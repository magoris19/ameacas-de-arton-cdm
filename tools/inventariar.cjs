// Inventário de metadados; lê somente cópias temporárias dos bancos.
// node tools/inventariar.cjs [caminho absoluto do pacote classic-level]
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { ClassicLevel } = require(process.argv[2] || 'classic-level');
const root = path.resolve(__dirname, '..');
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const escape = value => String(value ?? '—').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
const order = (a, b) => a.localeCompare(b, 'pt-BR');
const normalize = s => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
const countBy = (list, fn) => {
  const result = {};
  for (const entry of list) { const k = fn(entry) ?? 'ausente'; result[k] = (result[k] || 0) + 1; }
  return result;
};
const describe = counts => Object.entries(counts).sort(([a], [b]) => order(a, b)).map(([k, n]) => `${k}: ${n}`).join('; ') || 'nenhum';

function fileDigest(dir) {
  const files = [];
  function visit(folder) {
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
      const file = path.join(folder, entry.name);
      if (entry.isDirectory()) visit(file);
      else files.push(path.relative(dir, file).replaceAll('\\', '/'));
    }
  }
  visit(dir);
  return sha(files.sort().map(f => `${f}\0${sha(fs.readFileSync(path.join(dir, f)))}`).join('\n'));
}

async function readPack(name, temp) {
  const source = path.join(root, 'packs', name);
  const before = fileDigest(source);
  const copy = path.join(temp, name);
  fs.cpSync(source, copy, { recursive: true });
  const current = path.join(copy, 'CURRENT');
  fs.writeFileSync(current, fs.readFileSync(current, 'utf8').replace(/\r\n/g, '\n'));
  const db = new ClassicLevel(copy, { createIfMissing: false });
  const records = [];
  try {
    for await (const [key, raw] of db.iterator()) {
      const [ , type, ids] = key.split('!');
      records.push({ key, type, ids: ids.split('.'), data: JSON.parse(raw), raw });
    }
  } finally { await db.close(); }
  if (before !== fileDigest(source)) throw new Error(`Banco original mudou: ${name}`);
  return { records, hash: sha(records.map(r => `${r.key}\0${r.raw}`).join('\n')) };
}

async function main() {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'ameacas-inventario-'));
  try {
    const packs = {};
    for (const name of ['ameacas', 'items', 'journals']) packs[name] = await readPack(name, temp);
    const records = packs.ameacas.records;
    const actors = records.filter(r => r.type === 'actors');
    const items = records.filter(r => r.type === 'actors.items');
    const effects = records.filter(r => ['actors.effects', 'actors.items.effects'].includes(r.type));
    const folders = new Map(records.filter(r => r.type === 'folders').map(r => [r.data._id, r.data]));
    const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
    const marked = [...readme.matchAll(/^\s*- \[([ xX])\]\s*(.+?)\s*$/gm)].map(m => ({ name: m[2], complete: m[1].toLowerCase() === 'x' }));
    function ancestry(id) {
      const chain = [], seen = new Set();
      while (id && folders.has(id)) {
        if (seen.has(id)) throw new Error(`Ciclo de pastas: ${id}`);
        seen.add(id); const folder = folders.get(id); chain.unshift(folder); id = folder.folder;
      }
      return chain;
    }
    const chapterOf = actor => ancestry(actor.data.folder)[0]?.name || 'Sem pasta reconhecida';
    const ownItems = actor => items.filter(r => r.ids[0] === actor.data._id);
    const ownEffects = actor => effects.filter(r => r.ids[0] === actor.data._id);
    const chapters = [...new Set([...marked.map(m => m.name), ...actors.map(chapterOf)])].sort(order);
    const stats = actors.map(actor => {
      const childItems = ownItems(actor), childEffects = ownEffects(actor);
      return { actor, chapter: chapterOf(actor), items: childItems, effects: childEffects,
        spells: childItems.filter(r => r.data.type === 'magia'),
        digest: sha(records.filter(r => r.type.startsWith('actors') && r.ids[0] === actor.data._id).map(r => `${r.key}\0${r.raw}`).join('\n')).slice(0, 12) };
    });
    const orphanFolders = [...folders.values()].filter(f => f.folder && !folders.has(f.folder));
    const badActorFolders = actors.filter(r => r.data.folder && !folders.has(r.data.folder));
    const spellIssues = items.filter(r => r.data.type === 'magia' && ![1, 2, 3, 4, 5].includes(Number(r.data.system?.circulo)));
    const conditionCounts = {}, changeCounts = {}, legacyConditions = {};
    for (const effect of effects) {
      for (const status of effect.data.statuses || []) conditionCounts[status] = (conditionCounts[status] || 0) + 1;
      for (const change of effect.data.changes || []) {
        changeCounts[change.key] = (changeCounts[change.key] || 0) + 1;
        if (change.key === 'condicao') {
          const value = typeof change.value === 'string' ? change.value : JSON.stringify(change.value);
          legacyConditions[value] = (legacyConditions[value] || 0) + 1;
        }
      }
    }
    const version = JSON.parse(fs.readFileSync(path.join(root, 'module.json'), 'utf8')).version;
    const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
    const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date());
    const lines = [
      '# Inventário e estados das ameaças', '',
      `Levantamento em ${date}. Módulo ${version}; referência dos dados: commit \`${commit}\`.`, '',
      'Este documento registra o estado encontrado, sem migrar fichas. Contagens vêm dos registros ativos do LevelDB; arquivos antigos do banco não são somados novamente. O script abriu apenas cópias temporárias e confirmou que os bancos originais não mudaram.', '',
      '## Como interpretar os estados', '',
      '- **Completo no README**: marca editorial existente. Não comprova que cada ficha foi comparada com o livro ou testada no Foundry.',
      '- **Presente, sem conclusão declarada**: grupo encontrado no banco, ausente da lista de completos. Não significa vazio nem incompleto comprovado.',
      '- **Origem identificada**: versão nos metadados; não equivale a execução validada.',
      '- **Migração 1.6.5: pendente** e **validação em jogo: não registrada** aplicam-se a todos os atores deste inventário. Só mudar com evidência por ator/lote.', '',
      '## Visão geral', '',
      `- Atores: **${actors.length}**; ${describe(countBy(actors, r => r.data.type))}.`,
      `- Versões de sistema dos atores: ${describe(countBy(actors, r => r.data._stats?.systemVersion))}.`,
      `- Versões de Foundry dos atores: ${describe(countBy(actors, r => r.data._stats?.coreVersion))}.`,
      `- Capítulos marcados como completos: **${marked.filter(m => m.complete).length}**.`,
      `- Itens dentro dos atores: **${items.length}** (${describe(countBy(items, r => r.data.type))}).`,
      `- Efeitos dos atores e de seus itens: **${effects.length}**.`,
      `- Magias com círculo ausente/fora de 1–5: **${spellIssues.length}** (ver pendências abaixo).`, '',
      '## Todos os capítulos/grupos', '',
      'As contagens incluem subpastas; Elementais inclui Ar, Água, Terra e Fogo. As pastas contêiner com pais ausentes estão registradas abaixo. Não afirmar completude do livro pela contagem.', '',
      '| Capítulo/grupo | Conteúdo declarado | Atores | Itens internos | Magias | Efeitos | Migração 1.6.5 |',
      '|---|---|---:|---:|---:|---:|---|',
    ];
    for (const chapter of chapters) {
      const group = stats.filter(s => normalize(s.chapter) === normalize(chapter));
      const mark = marked.find(m => normalize(m.name) === normalize(chapter));
      lines.push(`| ${escape(chapter)} | ${mark?.complete ? 'Completo no README' : mark ? 'Não marcado como completo' : 'Presente, sem conclusão declarada'} | ${group.length} | ${group.reduce((s, r) => s + r.items.length, 0)} | ${group.reduce((s, r) => s + r.spells.length, 0)} | ${group.reduce((s, r) => s + r.effects.length, 0)} | Pendente |`);
    }
    lines.push('', '## Demais compêndios', '', '| Banco | Tipos de registro e quantidades | Migração |', '|---|---|---|');
    for (const [name, pack] of Object.entries(packs)) lines.push(`| ${name} | ${escape(describe(countBy(pack.records, r => r.type)))} | Pendente |`);
    const independentItems = packs.items.records.filter(r => r.type === 'items');
    lines.push('', `Itens independentes por tipo: ${describe(countBy(independentItems, r => r.data.type))}.`, '',
      `Versões de sistema dos itens independentes: ${describe(countBy(independentItems, r => r.data._stats?.systemVersion))}.`, '',
      'Itens independentes, efeitos, pastas, diários e páginas também fazem parte do escopo futuro. A tabela por ator abaixo cobre somente `packs/ameacas`.', '',
      '## Integridade e pendências já observáveis', '',
      `- Pastas de ameaças cujo pai não está no banco: **${orphanFolders.length}**. São referências preexistentes; não inventar os nomes desses pais. Conferir agrupamento/visibilidade no Foundry antes de corrigir.`,
      `- Atores com pasta direta inexistente: **${badActorFolders.length}**.`,
    );
    const missingParents = [...new Set(orphanFolders.map(f => f.folder))];
    for (const id of missingParents) lines.push(`- Pai ausente \`${id}\`: ${orphanFolders.filter(f => f.folder === id).map(f => f.name).sort(order).join(', ')}.`);
    for (const actor of badActorFolders) lines.push(`- Ator com pasta ausente: ${escape(actor.data.name)} (\`${actor.data._id}\`, pasta \`${actor.data.folder}\`).`);
    for (const issue of spellIssues) lines.push(`- Conferir círculo: ${escape(actors.find(a => a.data._id === issue.ids[0])?.data.name)} / ${escape(issue.data.name)} (\`${issue.ids.join('.')}\`; valor \`${escape(issue.data.system?.circulo)}\`).`);
    lines.push('', '## Condições e efeitos existentes', '',
      'São identificadores efetivamente encontrados em `statuses` dos efeitos de atores e itens internos. Não são a lista completa de condições possíveis no sistema, nem prova de automação funcional.', '',
      '| Status/condição | Ocorrências | Estado para 1.6.5 |', '|---|---:|---|');
    for (const [status, n] of Object.entries(conditionCounts).sort(([a], [b]) => order(a, b))) lines.push(`| ${escape(status)} | ${n} | Mapear identificador, ícone e aplicação |`);
    if (!Object.keys(conditionCounts).length) lines.push('| Nenhum identificador preenchido | 0 | Revisar efeitos por alterações e descrição |');
    lines.push('', 'Condições representadas pela chave legada `changes[].key = condicao` nos efeitos internos (valor literal; revisar equivalência no destino):', '', '| Valor armazenado | Ocorrências |', '|---|---:|');
    for (const [value, n] of Object.entries(legacyConditions).sort(([a], [b]) => order(a, b))) lines.push(`| ${escape(value || '(vazio)')} | ${n} |`);
    lines.push('', 'Campos modificados por efeitos (ocorrências; revisar chave, modo, prioridade, origem, duração e acumulação):', '', '| Chave | Ocorrências |', '|---|---:|');
    for (const [key, n] of Object.entries(changeCounts).sort(([a], [b]) => order(a, b))) lines.push(`| \`${escape(key || '(chave vazia)')}\` | ${n} |`);
    lines.push('', '## Fichas por capítulo: identificação para retomada', '',
      'Todos os registros abaixo estão com migração e teste em 1.6.5 pendentes. O ND é o campo armazenado, sem reinterpretação. O hash curto representa o ator e seus registros filhos e serve para detectar mudanças entre inventários; não é validação de regras.', '');
    for (const chapter of chapters) {
      lines.push(`### ${chapter}`, '', '| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |', '|---|---|---|---:|---:|---:|---|');
      for (const row of stats.filter(s => normalize(s.chapter) === normalize(chapter)).sort((a, b) => order(a.actor.data.name, b.actor.data.name))) {
        const a = row.actor.data;
        lines.push(`| ${escape(a.name)} | \`${a._id}\` | ${escape(a.system?.attributes?.nd)} | ${row.items.length} | ${row.spells.length} | ${row.effects.length} | \`${row.digest}\` |`);
      }
      lines.push('');
    }
    lines.push('## Impressões digitais completas dos registros ativos', '', '| Banco | Registros | SHA-256 |', '|---|---:|---|');
    for (const [name, pack] of Object.entries(packs)) lines.push(`| ${name} | ${pack.records.length} | \`${pack.hash}\` |`);
    lines.push('', '## Regerar', '',
      'Com Node.js e `classic-level` instalado/disponível, executar `node tools/inventariar.cjs`. Se a dependência não estiver na resolução padrão, informar seu diretório absoluto como primeiro argumento. O comando atualiza este Markdown; não altera compêndios, não salva exportações completas e não migra atores.', '',
      'O inventário não compara o livro, não abre o Foundry e não comprova importação, totais calculados, rolagens ou efeitos em jogo.', '');
    fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
    fs.writeFileSync(path.join(root, 'docs', 'INVENTARIO_AMEACAS.md'), lines.join('\n'));
    const ledger = path.join(root, 'docs', 'CONTROLE_MIGRACAO.csv');
    // O controle é iniciado uma vez. Regerar o inventário não pode apagar progresso humano.
    if (!fs.existsSync(ledger)) {
      const csv = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
      const rows = [[
        'ator_id', 'capitulo', 'nome', 'conteudo_declarado', 'sistema_origem', 'foundry_origem',
        'hash_origem_curto', 'sistema_destino', 'migracao', 'estrutura', 'valores_finais',
        'efeitos', 'foundry', 'publicacao', 'evidencia', 'pendencia', 'atualizado_em',
      ]];
      for (const row of stats.sort((a, b) => order(a.chapter, b.chapter) || order(a.actor.data.name, b.actor.data.name))) {
        const a = row.actor.data;
        rows.push([a._id, row.chapter, a.name,
          marked.some(m => m.complete && normalize(m.name) === normalize(row.chapter)) ? 'completo_readme' : 'sem_conclusao_declarada',
          a._stats?.systemVersion, a._stats?.coreVersion, row.digest, '1.6.5',
          'nao_iniciada', 'pendente', 'pendente', 'pendente', 'nao_testado', 'nao_publicada', '', '', date]);
      }
      fs.writeFileSync(ledger, rows.map(row => row.map(csv).join(',')).join('\n') + '\n');
    }
    console.log(JSON.stringify({ actors: actors.length, chapters: chapters.length, completed: marked.filter(m => m.complete).length, items: items.length, effects: effects.length, orphanFolders: orphanFolders.length, badActorFolders: badActorFolders.length, spellIssues: spellIssues.length, conditionCounts, hashes: Object.fromEntries(Object.entries(packs).map(([name, p]) => [name, p.hash])) }, null, 2));
  } finally {
    if (!temp.startsWith(path.join(os.tmpdir(), 'ameacas-inventario-'))) throw new Error('Caminho temporário inesperado');
    fs.rmSync(temp, { recursive: true, force: true });
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
