# Continuidade do módulo Ameaças de Arton — CDM

- Trabalhar em português. Este repositório é o módulo `magoris19/ameacas-de-arton-cdm`; não é o conversor de PDFs `t20-pdf-to-json`.
- Estado atual: módulo 0.8.1, fichas de origem Tormenta20 1.4.213 / Foundry 12.331. A correção de imagens WebP não fez migração de esquema.
- Antes de retomar qualquer migração, ler `docs/MIGRACAO_T20_1_6_5.md`, `docs/INVENTARIO_AMEACAS.md` e `docs/CONTROLE_MIGRACAO.csv`.
- O pedido de 19/10/2026 é inventariar e preparar a migração futura. Não iniciar a transformação das fichas só por ler este plano; aguardar a solicitação de retomada do usuário.
- O inventário cobre todos os 408 atores e distingue 22 capítulos marcados como completos no README de oito outros grupos existentes. Completude editorial não significa teste em jogo nem migração concluída.
- Manter a versão 1.4.213 recuperável. Ao executar a migração futura, trabalhar em branch e cópias isoladas; nunca abrir os bancos de produção para uma inspeção. `tools/inventariar.cjs` lê cópias temporárias.
- `packs/` contém bancos LevelDB, não JSONs de texto. Usar biblioteca/rotinas adequadas e reconstruir documentos com itens e efeitos filhos. Nunca substituir strings diretamente nos binários nem somar registros obsoletos dos arquivos físicos.
- Preservar IDs, UUIDs, referências, valores finais, descrições, custos/aprimoramentos específicos e segredos. Conferir a migração nativa e os valores recalculados, não apenas o formato salvo.
- Consultar manifesto, pacote publicado, código e modelo da versão exata do sistema. A tag fonte `v1.6.5` traz `version: 1.6.4` no `system.json`; o manifesto do pacote publicado informa 1.6.5 / Foundry 14. Registrar hashes e resolver qualquer divergência antes de converter.
- O controle CSV é o registro por ator. Atualizar estados somente com evidência e não sobrescrever o progresso ao regenerar inventários. Documentar também itens independentes e diários.
- Não adicionar PDFs, livros, credenciais, compêndios pessoais, exportações completas, backups ou saídas de testes. Os bancos já versionados são o produto do módulo; os documentos/CSV guardam apenas metadados de acompanhamento.
- Testes estáticos não comprovam execução no Foundry. Não anunciar suporte a 1.6.5/Foundry 14, nem publicar essa migração como estável, antes dos critérios do plano.
- Ao publicar mudanças funcionais autorizadas, concluir versão, manifesto, tag, release e verificação do pacote remoto para o usuário atualizar pelo Foundry. Documentação sozinha não exige nova versão do módulo.
