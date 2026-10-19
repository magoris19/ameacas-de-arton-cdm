# Plano de migração: Tormenta20 1.4.213 → 1.6.5

Registrado em **19/10/2026**, a pedido do mantenedor. Este é o roteiro para o assistente executar a migração quando o usuário retomá-la nos próximos meses. O trabalho atual é inventário e planejamento; nenhuma ficha foi convertida para 1.6.5.

## Onde estamos e o que será preservado

O produto é o módulo **Ameaças de Arton — CDM**, repositório `magoris19/ameacas-de-arton-cdm`. A versão pública de partida é **0.8.1**, tag `v0.8.1`, commit `f08237838456f73ca3e241381029f9390fd0cbfb`. Essa atualização corrigiu imagens `.png` para `.webp`, sem alterar regras ou esquema.

Os **408 atores** guardam `_stats.systemVersion = 1.4.213` e `_stats.coreVersion = 12.331`. Isto identifica a origem dos dados, sem comprovar testes de cada ficha nesse ambiente. Há **2.913 itens internos**, **1.705 efeitos internos**, mais **481 itens independentes com 576 efeitos**, **8 diários e 18 páginas**. As contagens detalhadas estão no [inventário](INVENTARIO_AMEACAS.md).

O README declara **22 capítulos completos**, somando **303 atores**. Oito grupos adicionais presentes no banco somam **105 atores**, sem conclusão declarada no README. A prioridade é preservar e migrar os capítulos completos, sem apagar os demais nem tratá-los como vazios. Não declarar que os 303 representam todas as fichas do livro sem comparar com a fonte.

Os bancos são LevelDB. Uma ficha é composta por registros do ator, itens e efeitos filhos, identificados por chaves como `!actors!ID`, `!actors.items!ATOR.ITEM` e `!actors.items.effects!ATOR.ITEM.EFEITO`. Ler apenas o registro principal deixa a ficha incompleta. Arquivos físicos antigos do LevelDB não são documentos adicionais.

## Arquivos que permitem retomar sem depender deste chat

| Arquivo | Uso |
|---|---|
| [INVENTARIO_AMEACAS.md](INVENTARIO_AMEACAS.md) | Todos os capítulos, contagens, nomes/IDs das 408 fichas, hashes, condições e chaves de efeitos |
| [CONTROLE_MIGRACAO.csv](CONTROLE_MIGRACAO.csv) | Estado de cada ator, evidência e pendências; atualizar durante a execução |
| [../tools/inventariar.cjs](../tools/inventariar.cjs) | Reproduzir o inventário sem alterar os bancos originais |
| [../AGENTS.md](../AGENTS.md) | Instruções curtas que o assistente deve ler ao trabalhar neste repositório |

O inventário é a fotografia de partida. O controle é o acompanhamento vivo. Não reclassificar os capítulos originais para “incompletos” apenas porque sua migração está pendente.

## Fontes oficiais e versões a conferir novamente

| Referência | Evidência encontrada em 19/10/2026 |
|---|---|
| [Manifesto fonte 1.4.213](https://gitlab.com/vizael/Tormenta20/-/raw/1.4.213/system.json) | Versão 1.4.213; Foundry mínimo 11.313, verificado/máximo 12 |
| [Esquema fonte 1.4.213](https://gitlab.com/vizael/Tormenta20/-/raw/1.4.213/template.json) | Modelo antigo em `template.json`; commit da tag `2773cd4e1f6665506417f8f9e8caacff4b978b06` |
| [Release oficial v1.6.5](https://gitlab.com/vizael/Tormenta20/-/releases/v1.6.5) | O pacote de distribuição deve ser a referência de instalação |
| [Manifesto publicado v1.6.5](https://gitlab.com/api/v4/projects/20169602/packages/generic/tormenta20/v1.6.5/system.json) | Versão **1.6.5**, Foundry mínimo/verificado/máximo **14**; SHA-256 `ffcb21c6b262bacb9c6911b7647c9a1a72261889d1eeaff961c2f1d51d46b6da` |
| [Manifesto na tag fonte v1.6.5](https://gitlab.com/vizael/Tormenta20/-/raw/v1.6.5/system.json) | Traz **1.6.4**, apesar do nome da tag; commit `9e88b3186683c438f89968ea153315f85958e3d2`. Não usar uma igualdade ingênua entre versão interna da fonte e versão do pacote |
| [Modelos do destino](https://gitlab.com/vizael/Tormenta20/-/tree/v1.6.5/module/dataModel) | Modelos novos e migrações precisam ser comparados com o pacote efetivamente instalado |

O destino planejado é **Tormenta20 1.6.5 em Foundry 14**, com build exato a escolher e registrar na retomada. Não atualizar automaticamente o alvo para uma versão mais nova porque ela passou a existir. Reconsultar fontes e hashes; se mudaram, investigar e registrar. Não usar a instalação local como fonte única: ela pode ter reparos manuais.

## Passo a passo para a execução futura

### 1. Congelar e conferir a base

1. Ler os quatro arquivos de continuidade acima e o estado atual do GitHub.
2. Identificar a última release de origem e comparar com `v0.8.1`. Regerar um inventário em cópia de trabalho; não sobrescrever o inventário histórico sem registrar diferenças.
3. Comparar IDs e hashes do controle com os dados atuais. Separar fichas novas, removidas ou alteradas desde este levantamento. Não migrar uma base desatualizada nem apagar progresso já registrado.
4. Salvar backup integral fora do Git e registrar commit/tag e hashes dos três bancos. Manter `v0.8.1` recuperável e testar restauração em cópia.
5. Criar uma branch com prefixo `codex/` para a migração. Não substituir o pacote estável 1.4.213 durante o desenvolvimento. Se houver mudanças novas em `main`, partir da base atual autorizada e registrar a diferença.

**Saída:** base reproduzível, diferenças conhecidas e rollback disponível.

### 2. Preparar o destino exato

1. Obter o manifesto e o pacote da release oficial 1.6.5; verificar versão, faixa de Foundry e hashes. Resolver a divergência de manifesto da tag fonte comparando os modelos/código com a distribuição.
2. Preparar instalação e mundo de teste isolados com Foundry 14 (build registrado), sistema 1.6.5 e `cdm-icons` com WebP. Começar com módulos mínimos; registrar dependências necessárias.
3. Consultar migrações nativas, modelos de Actor/Item/ActiveEffect, configurações de condições, rotina de importação, cartões, rolagens e regiões. Registrar arquivo, símbolo e commit de cada regra de adaptação.
4. Decidir com evidência se a migração nativa cobre a passagem direta ou exige uma etapa intermediária. Não inventar uma cadeia 1.4 → 1.5 → 1.6 nem confiar que abrir o mundo resolve tudo.

**Saída:** ambiente identificado e tabela de campos origem/destino com fontes, ainda sem lotes grandes.

### 3. Reconstruir e auditar os documentos de origem

1. Ler cópias dos três bancos com ferramenta adequada. Reconstituir os itens, efeitos, páginas e pastas a partir das referências dos documentos.
2. Verificar referências de filhos, IDs únicos, pais, UUIDs, origens de efeitos e links de compêndio. Preservar os IDs sempre que o modelo permitir; qualquer remapeamento exige tabela explícita.
3. Preparar para cada ator uma tabela de valores esperados: ND, tipo/papel/tamanho, seis atributos, Defesa, PV/PM, movimentos, Iniciativa, Percepção, resistências e demais perícias, ataques, danos, crítico, CDs, custos, ações e durações.
4. Distinguir total confirmado na fonte de valor apenas armazenado/derivado no JSON antigo. Quando faltar evidência, marcar revisão e pedir somente a fonte necessária; não preencher por suposição.
5. Registrar equipamentos, tesouro, habilidades compartilhadas de tipo/família e exceções. Revisar também segredos, descrição pública e texto do chat.

**Saída:** referência por ator para comparar resultados depois da migração.

### 4. Implementar a conversão com rastreabilidade

1. Criar adaptador com entrada imutável e saída em diretório separado. Não reescrever strings dos arquivos `.ldb`/`.log` diretamente.
2. Separar adaptação de esquema de mudança de conteúdo. Conservar descrições, regras e valores finais. Registrar cada transformação, campos não reconhecidos e itens cuja automação permaneça manual.
3. Executar/considerar as migrações e normalizações nativas do destino antes de comparar os totais. A saída precisa sobreviver à importação, preparação e reabertura, sem depender de campos derivados salvos.
4. Testar idempotência: passar a conversão duas vezes não pode duplicar itens/efeitos, somar bônus novamente nem gerar outra alteração mecânica.
5. Tratar documentos independentes dos compêndios `items` e `journals`, incluindo referências usadas pelas ameaças.

**Saída:** adaptador testado e relatório por ator. Não mudar `_stats.systemVersion` sozinho e chamar isso de migração.

### 5. Validar primeiro um lote piloto

Escolher fichas existentes por **ID do inventário**, registrando a seleção e os critérios, antes de gerar a saída:

- Uma criatura simples de Montarias ou Mascotes & Familiares.
- Uma com múltiplos ataques, dano adicional e crítico, como as disponíveis em Uivantes ou Mundo Perdido.
- Um conjurador de Trolls Nobres, Império de Jade ou Reino dos Mortos.
- Uma criatura com várias modalidades de movimento, resistência/imunidade e efeitos.
- Um morto-vivo para testar as interações de trevas/cura/luz e regras compartilhadas.
- Uma ficha com área/condição/recarga e uma com descrição secreta, se existentes na base escolhida.

Uma ficha pode cobrir mais de um critério. As revisões de Dragões/Gnolls servem como casos adicionais, sem reclassificar seus capítulos como completos. Não depender de nomes parecidos para localizar fichas de outros projetos.

Testar cada piloto no mundo isolado: importar, abrir, preparar dados, conferir todos os valores esperados, rolar ataque/dano/crítico, gerar cartão, consumir recursos, aplicar/remover efeitos, criar área quando houver e reabrir após recarregar. Conferir também com usuário jogador quando houver texto secreto. Guardar evidências e erros reais por ID e versão.

**Saída:** causas dos erros corrigidas no adaptador/dados, pilotos aprovados e plano de lotes confirmado.

### 6. Migrar por capítulos e atualizar o controle

1. Priorizar os **22 completos no README**, conforme a tabela do inventário. Começar pelos lotes de menor complexidade após o piloto; não supor que um capítulo inteiro é simples só pelo nome.
2. Para cada lote, gerar comparação antes/depois, conferir contagens/IDs/UUIDs e todos os valores esperados, testar comportamentos representativos e registrar as exceções. Conclusão em jogo exige evidência dos comportamentos relevantes por ficha, não apenas uma amostra do capítulo.
3. Atualizar o CSV a cada lote. Em `evidencia`, indicar relatório/commit, ambiente e resultado; em `pendencia`, explicar o bloqueio concreto. Logs e exportações completos permanecem locais, sem credenciais.
4. Corrigir um padrão recorrente no adaptador e reprocessar os atores afetados. Não editar apenas um JSON sem registrar a regra, nem aplicar compensação numérica de uma criatura em todas as outras.
5. Depois, tratar os oito grupos sem conclusão declarada. Migrar o que existe e manter as pendências de conteúdo separadas das pendências de versão.

**Saída:** progresso recuperável por ator e capítulo; nenhuma ficha perdida no lote.

### 7. Integrar, empacotar e testar instalação/atualização

1. Montar os bancos finais com IDs e referências conferidos, reabrir e comparar com a saída aprovada. Não levar backups, registros temporários ou dados pessoais ao pacote.
2. Testar uma instalação nova do módulo e uma atualização da versão antiga em cópias de mundos. Verificar os caminhos de compêndio do manifesto (`.db` legado versus diretório LevelDB no destino), permissões e pastas.
3. Conferir dependências e ícones. Não presumir que atualizar o compêndio modifica atores já importados ou tokens de cenas.
4. Se o usuário solicitar migrar também mundos existentes, fazer um fluxo separado: backup, prévia por ID, preservação de alterações pessoais, vínculo de token, cenas e plano de desfazer. Não substituir atores de mundo automaticamente com o compêndio.

**Saída:** pacote que instala e atualiza no ambiente testado, com limites de escopo documentados.

### 8. Publicar a migração pronta para atualizar

1. Somente após os critérios de aceite, escolher uma nova versão do módulo, registrar compatibilidade real com Tormenta20 1.6.5 e Foundry 14/build testado e documentar a versão antiga que continua disponível.
2. Planejar a distribuição para usuários do Foundry 12: não oferecer um pacote exclusivo de Foundry 14 como atualização utilizável no ambiente antigo. Conferir seleção de versão/manifestos do Foundry e, se necessário, manter canal/manifesto legado explícito. Testar antes de mudar o endereço estável.
3. Atualizar manifesto e download para o repositório correto. Criar commit, tag e release coerentes; publicar pacote completo e manifesto, marcar como estável apenas o que foi aprovado.
4. Baixar pelos endereços públicos, validar manifesto, integridade do ZIP, versão e conteúdo dos bancos, e testar o caminho **Atualizar** no Foundry de destino.
5. Atualizar README, inventário do destino, CSV e notas da release com evidências e limitações. Só então marcar os atores/lotes publicados.

**Saída:** atualização publicada e verificável, sem exigir que o usuário monte arquivos manualmente.

## Riscos e transformações que precisam de verificação

| Área | O que o assistente deve fazer |
|---|---|
| Atributos, Defesa e perícias | Comparar a fórmula nativa e o total final depois da preparação. Não somar duas vezes atributo, ND, treinamento ou bônus já incluído |
| Movimento | Comparar campos numéricos antigos com `{base, bonus}` do modelo novo; conferir unidades, voo, escavação e efeitos que ainda apontam para o caminho antigo |
| Ataques e danos | Conferir estrutura de `rolls`, perícia, atributo, parcelas, crítico e dano tipado. Em `RollData.migrateData` da tag v1.6.5, perícia vazia em ataque pode receber `luta`; testar para evitar acerto duplicado |
| Magias | Preservar custo/execução e aprimoramentos específicos da ficha; conferir círculo 1–5, escola, ícone, alcance, alvo e efeitos. Os 312 itens de magia atuais têm círculo em 1–5, mas isso não comprova correspondência com o livro |
| Poderes | Conferir ação ativa/passiva, clique, cartão, frequência/recarga e consumo. Nome e texto iguais não comprovam comportamento igual |
| Condições e efeitos | O inventário encontrou 1.705 efeitos internos sem `statuses` preenchidos; há 72 alterações legadas na chave `condicao`. Mapear os valores listados no inventário para o modelo nativo, com ícones e aplicação testados; não concluir que não há condições porque `statuses` está vazio |
| Chaves de efeitos | Revisar todas as chaves listadas; há chaves vazias, formas antigas de movimento e variações como `execucao`/`execução`. São candidatos a inspeção, não prova automática de erro. Preservar modo, prioridade, duração, origem, transferência e acumulação |
| Áreas | No código de `RegionT20` consultado, o cartão é lido por `JSON.parse(item.area_behaviors)`. Conferir o campo e o ciclo de serialização do destino; quando não houver comportamentos, testar a lista vazia serializada `"[]"`. Não inventar comportamentos para preencher campo |
| Cartões | Há histórico externo de falha com `onUseEffects.map` ao exibir cartão sem lista. Reproduzir no pacote oficial intacto e conferir os dados/opções. Não embutir reparo na instalação nem assumir que um reparo local está no sistema oficial |
| Segredos | Testar descrição pública, blocos secretos, chat e permissões de jogador, sem duplicar CDs/recargas secretas em campos públicos |
| Pastas e referências | Há 29 pastas de ameaça com pai ausente e nenhum ator com pasta direta ausente; conferir a árvore real antes de reparar. Preservar UUIDs/links e registrar remapeamentos necessários |
| Ícones | Preservar as 380 correções de WebP da 0.8.1; conferir também imagens externas, de itens e efeitos no ambiente de destino, sem troca global de extensões |
| Regras compartilhadas | Conferir regras de tipo/família e exceções; não duplicar imunidades, resistências ou bônus já contabilizados. Não declarar curas/condições automatizadas só pela descrição |

Referências diretas: [RollData e migrações](https://gitlab.com/vizael/Tormenta20/-/blob/v1.6.5/module/dataModel/helpers.mjs), [MovementData](https://gitlab.com/vizael/Tormenta20/-/blob/v1.6.5/module/dataModel/fields/data-movement.mjs), [RegionT20](https://gitlab.com/vizael/Tormenta20/-/blob/v1.6.5/module/documents/region.mjs). Revalidar contra o pacote de distribuição escolhido.

## Estados do controle e critérios de aceite

| Coluna | Estados e significado |
|---|---|
| `conteudo_declarado` | `completo_readme` ou `sem_conclusao_declarada`: fotografia editorial da origem |
| `migracao` | `nao_iniciada`, `em_andamento`, `convertida`, `bloqueada` |
| `estrutura` | `pendente`, `aprovada`, `reprovada`: modelo, IDs, referências, reabertura do banco e serialização |
| `valores_finais` | `pendente`, `aprovados`, `reprovados`: comparação dos resultados após normalizações nativas com a referência de origem |
| `efeitos` | `pendente`, `aprovados`, `reprovados`: mecânicas aplicáveis conferidas; funções manuais devem estar documentadas, nunca tratadas como automáticas |
| `foundry` | `nao_testado`, `aprovado`, `reprovado`: importação, preparação, reabertura e ações relevantes em jogo, na combinação exata registrada |
| `publicacao` | `nao_publicada`, `publicada`: somente após release/pacote remoto verificados |
| `evidencia`, `pendencia`, `atualizado_em` | Localizador do resultado e versões, bloqueio concreto e data da última mudança |

Um capítulo só termina a **migração validada** quando todos os seus atores satisfazem os critérios aplicáveis. Para liberar a migração como estável, exigir também:

- Mesmos atores, itens, efeitos e referências, ou alterações individualmente justificadas.
- Valores finais, custos, ações, danos e segredos preservados; nenhum bloqueio essencial em aberto.
- Nenhuma falha de importação/preparação/cartão/área nos casos relevantes testados, com erros reais registrados.
- Itens independentes, diários, imagens e links conferidos; plano de atualização e rollback testados.
- Registro do que é manual e do que foi automatizado, sem promessas de compatibilidade baseadas apenas em testes locais.

Os pilotos aprovam o método; não aprovam automaticamente os outros 408 atores. Análise estática aprova estrutura; não substitui execução no Foundry.

## Pendências globais no encerramento deste planejamento

| Trabalho | Estado |
|---|---|
| Inventariar capítulos, atores, itens, efeitos e condições | Concluído neste levantamento |
| Registrar plano e controle por ator | Concluído neste levantamento |
| Definir build do Foundry 14 e congelar pacote oficial 1.6.5 | Pendente de retomada |
| Reconciliar fonte/tag e distribuição do sistema | Pendente de retomada; divergência identificada, manifesto publicado conferido |
| Comparar campos e implementar adaptador | Não iniciado |
| Executar piloto/lotes e conferir cálculos/efeitos | Não iniciado |
| Validar em jogo e testar atualização | Não iniciado |
| Publicar versão migrada | Não iniciado; a release 0.8.1 continua sendo 1.4.213 |

## Instrução pronta para retomar com o assistente

> Retome a migração do módulo magoris19/ameacas-de-arton-cdm de Tormenta20 1.4.213 para 1.6.5. Leia AGENTS.md, docs/MIGRACAO_T20_1_6_5.md, docs/INVENTARIO_AMEACAS.md e docs/CONTROLE_MIGRACAO.csv. Confira mudanças desde a base 0.8.1, preserve a origem e trabalhe em cópias e branch de migração. Comece pelo congelamento da base e ambiente oficial de destino; depois implemente e valide o piloto antes dos lotes. Priorize os 22 capítulos marcados completos, preserve os demais e atualize o controle por ID com evidências. Não confunda conteúdo completo com compatibilidade validada. Ao concluir e validar em jogo, publique versão, manifesto, tag, release e pacote para atualização pelo Foundry, preservando acesso à versão antiga.
