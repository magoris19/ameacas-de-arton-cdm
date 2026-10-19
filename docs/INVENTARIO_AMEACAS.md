# Inventário e estados das ameaças

Levantamento em 2026-10-19. Módulo 0.8.1; referência dos dados: commit `f08237838456f73ca3e241381029f9390fd0cbfb`.

Este documento registra o estado encontrado, sem migrar fichas. Contagens vêm dos registros ativos do LevelDB; arquivos antigos do banco não são somados novamente. O script abriu apenas cópias temporárias e confirmou que os bancos originais não mudaram.

## Como interpretar os estados

- **Completo no README**: marca editorial existente. Não comprova que cada ficha foi comparada com o livro ou testada no Foundry.
- **Presente, sem conclusão declarada**: grupo encontrado no banco, ausente da lista de completos. Não significa vazio nem incompleto comprovado.
- **Origem identificada**: versão nos metadados; não equivale a execução validada.
- **Migração 1.6.5: pendente** e **validação em jogo: não registrada** aplicam-se a todos os atores deste inventário. Só mudar com evidência por ator/lote.

## Visão geral

- Atores: **408**; npc: 408.
- Versões de sistema dos atores: 1.4.213: 408.
- Versões de Foundry dos atores: 12.331: 408.
- Capítulos marcados como completos: **22**.
- Itens dentro dos atores: **2913** (arma: 897; consumivel: 17; equipamento: 14; magia: 312; poder: 1400; tesouro: 273).
- Efeitos dos atores e de seus itens: **1705**.
- Magias com círculo ausente/fora de 1–5: **0** (ver pendências abaixo).

## Todos os capítulos/grupos

As contagens incluem subpastas; Elementais inclui Ar, Água, Terra e Fogo. As pastas contêiner com pais ausentes estão registradas abaixo. Não afirmar completude do livro pela contagem.

| Capítulo/grupo | Conteúdo declarado | Atores | Itens internos | Magias | Efeitos | Migração 1.6.5 |
|---|---|---:|---:|---:|---:|---|
| Áreas de Tormenta | Presente, sem conclusão declarada | 13 | 113 | 11 | 58 | Pendente |
| Brutos & Indomáveis | Presente, sem conclusão declarada | 21 | 107 | 4 | 33 | Pendente |
| Capangas & Bandoleiros | Presente, sem conclusão declarada | 17 | 98 | 7 | 70 | Pendente |
| Culto de Aharadak | Presente, sem conclusão declarada | 11 | 98 | 11 | 61 | Pendente |
| Dragões | Presente, sem conclusão declarada | 13 | 148 | 38 | 121 | Pendente |
| Duyshidakk | Completo no README | 12 | 101 | 20 | 80 | Pendente |
| Elementais | Completo no README | 12 | 75 | 1 | 8 | Pendente |
| Ermos | Completo no README | 12 | 91 | 5 | 25 | Pendente |
| Gnolls | Presente, sem conclusão declarada | 14 | 96 | 11 | 74 | Pendente |
| Golens | Completo no README | 11 | 49 | 0 | 7 | Pendente |
| Igreja de Arsenal | Completo no README | 8 | 83 | 19 | 86 | Pendente |
| Igreja de Kallyadranoch | Presente, sem conclusão declarada | 10 | 107 | 28 | 140 | Pendente |
| Império de Jade | Completo no README | 19 | 147 | 30 | 150 | Pendente |
| Império de Tauron | Completo no README | 12 | 101 | 4 | 35 | Pendente |
| Kobolds | Completo no README | 8 | 46 | 0 | 18 | Pendente |
| Mascotes & Familiares | Completo no README | 10 | 42 | 0 | 0 | Pendente |
| Masmorras | Completo no README | 16 | 93 | 0 | 11 | Pendente |
| Montarias | Completo no README | 26 | 103 | 0 | 14 | Pendente |
| Mortos-vivos | Completo no README | 22 | 166 | 13 | 49 | Pendente |
| Mundo Perdido | Completo no README | 14 | 62 | 0 | 4 | Pendente |
| Piratas & Pistoleiros | Completo no README | 21 | 156 | 4 | 77 | Pendente |
| Povos-trovão | Completo no README | 12 | 107 | 14 | 76 | Pendente |
| Puristas | Completo no README | 11 | 94 | 11 | 88 | Pendente |
| Reino dos Mortos | Completo no README | 10 | 99 | 26 | 111 | Pendente |
| Reinos de Moreania | Completo no README | 10 | 72 | 5 | 30 | Pendente |
| Sanguinárias | Completo no README | 10 | 74 | 0 | 0 | Pendente |
| Sob as Ondas | Completo no README | 19 | 107 | 5 | 44 | Pendente |
| Sszzaaszitas | Presente, sem conclusão declarada | 6 | 48 | 6 | 31 | Pendente |
| Trolls Nobres | Completo no README | 13 | 146 | 39 | 188 | Pendente |
| Uivantes | Completo no README | 15 | 84 | 0 | 16 | Pendente |

## Demais compêndios

| Banco | Tipos de registro e quantidades | Migração |
|---|---|---|
| ameacas | actors: 408; actors.effects: 242; actors.items: 2913; actors.items.effects: 1463; folders: 34 | Pendente |
| items | folders: 35; items: 481; items.effects: 576 | Pendente |
| journals | folders: 1; journal: 8; journal.pages: 18 | Pendente |

Itens independentes por tipo: arma: 23; consumivel: 26; equipamento: 21; magia: 8; poder: 392; tesouro: 11.

Versões de sistema dos itens independentes: 1.4.213: 481.

Itens independentes, efeitos, pastas, diários e páginas também fazem parte do escopo futuro. A tabela por ator abaixo cobre somente `packs/ameacas`.

## Integridade e pendências já observáveis

- Pastas de ameaças cujo pai não está no banco: **29**. São referências preexistentes; não inventar os nomes desses pais. Conferir agrupamento/visibilidade no Foundry antes de corrigir.
- Atores com pasta direta inexistente: **0**.
- Pai ausente `cbrvHQof9CjsESy3`: Áreas de Tormenta, Brutos & Indomáveis, Capangas & Bandoleiros, Culto de Aharadak, Dragões, Duyshidakk, Elementais, Ermos, Gnolls, Golens, Igreja de Arsenal, Igreja de Kallyadranoch, Império de Jade, Mascotes & Familiares, Masmorras, Montarias, Mortos-vivos, Mundo Perdido, Piratas & Pistoleiros, Povos-trovão, Puristas, Reino dos Mortos, Reinos de Moreania, Sanguinárias, Sob as Ondas, Sszzaaszitas, Trolls Nobres, Uivantes.
- Pai ausente `iV8rvywXaaMqrnpM`: Kobolds.

## Condições e efeitos existentes

São identificadores efetivamente encontrados em `statuses` dos efeitos de atores e itens internos. Não são a lista completa de condições possíveis no sistema, nem prova de automação funcional.

| Status/condição | Ocorrências | Estado para 1.6.5 |
|---|---:|---|
| Nenhum identificador preenchido | 0 | Revisar efeitos por alterações e descrição |

Condições representadas pela chave legada `changes[].key = condicao` nos efeitos internos (valor literal; revisar equivalência no destino):

| Valor armazenado | Ocorrências |
|---|---:|
| cego | 2 |
| debilitado | 6 |
| desprevenido | 7 |
| em chamas | 9 |
| esmorecido | 6 |
| exausto | 9 |
| fatigado | 6 |
| fraco | 3 |
| imóvel | 9 |
| inconsciente | 3 |
| ofuscado | 2 |
| pasmo | 6 |
| sangrando | 1 |
| surpreendido | 3 |

Campos modificados por efeitos (ocorrências; revisar chave, modo, prioridade, origem, duração e acumulação):

| Chave | Ocorrências |
|---|---:|
| `(chave vazia)` | 3 |
| `?.items.arma` | 3 |
| `alcance` | 174 |
| `alvo` | 172 |
| `area` | 48 |
| `ataque` | 96 |
| `cd` | 2 |
| `condicao` | 72 |
| `criticoM` | 14 |
| `criticoX` | 2 |
| `dano` | 363 |
| `dano:fogo` | 6 |
| `dano:luz` | 5 |
| `dano:perfuracao` | 1 |
| `dano&magico` | 6 |
| `duracao` | 161 |
| `efeito.dano` | 4 |
| `execucao` | 88 |
| `execução` | 1 |
| `passos` | 3 |
| `resistencia` | 43 |
| `roll` | 67 |
| `system.atributos.car.value` | 3 |
| `system.atributos.con.value` | 9 |
| `system.atributos.des.value` | 6 |
| `system.atributos.for.value` | 16 |
| `system.atributos.int.value` | 3 |
| `system.attributes.defesa.bonus` | 100 |
| `system.attributes.movement.climb` | 4 |
| `system.attributes.movement.dig` | 2 |
| `system.attributes.movement.fly` | 3 |
| `system.attributes.movement.swim` | 4 |
| `system.attributes.movement.walk` | 15 |
| `system.attributes.sentidos.value adicionar` | 1 |
| `system.criticoX.value` | 1 |
| `system.modificadores.ataque.ad` | 16 |
| `system.modificadores.ataque.cac` | 20 |
| `system.modificadores.ataque.geral` | 24 |
| `system.modificadores.dano.ad` | 4 |
| `system.modificadores.dano.cac` | 11 |
| `system.modificadores.dano.geral` | 37 |
| `system.modificadores.dano.geral&bonus` | 6 |
| `system.modificadores.dano.geral&penalidade` | 6 |
| `system.modificadores.dano.mag` | 10 |
| `system.modificadores.pericias.ataque` | 4 |
| `system.modificadores.pericias.geral` | 17 |
| `system.modificadores.pericias.geral&bonus` | 6 |
| `system.modificadores.pericias.geral&penalidade` | 6 |
| `system.pericias.acro.bonus` | 5 |
| `system.pericias.atle.bonus` | 10 |
| `system.pericias.dipl.bonus` | 7 |
| `system.pericias.enga.bonus` | 6 |
| `system.pericias.enga.outros` | 1 |
| `system.pericias.fort.bonus` | 15 |
| `system.pericias.furt.bonus` | 20 |
| `system.pericias.inic.bonus` | 20 |
| `system.pericias.inti.atributo` | 6 |
| `system.pericias.ladi.bonus` | 4 |
| `system.pericias.perc.bonus` | 6 |
| `system.pericias.refl.bonus` | 19 |
| `system.pericias.sobr.bonus` | 3 |
| `system.pericias.vont.bonus` | 21 |
| `system.pericias.vont.outros` | 1 |
| `system.tracos.ic.value` | 4 |
| `system.tracos.resistencias.acido.bonus` | 6 |
| `system.tracos.resistencias.corte.base` | 2 |
| `system.tracos.resistencias.dano.bonus` | 18 |
| `system.tracos.resistencias.eletricidade.bonus` | 6 |
| `system.tracos.resistencias.fogo.bonus` | 8 |
| `system.tracos.resistencias.frio.base` | 2 |
| `system.tracos.resistencias.frio.bonus` | 6 |
| `system.tracos.resistencias.luz.bonus` | 6 |
| `system.tracos.resistencias.perfuracao.base` | 2 |
| `system.tracos.resistencias.trevas.bonus` | 7 |
| `system.tracos.tamanho` | 2 |

## Fichas por capítulo: identificação para retomada

Todos os registros abaixo estão com migração e teste em 1.6.5 pendentes. O ND é o campo armazenado, sem reinterpretação. O hash curto representa o ator e seus registros filhos e serve para detectar mudanças entre inventários; não é validação de regras.

### Áreas de Tormenta

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Alma Acorrentada | `kfJodNm4JPKlLbxl` | 7 | 7 | 0 | 0 | `ebc0c53078ee` |
| Arquibruxo da Tormenta | `Xi82gHk2y48cxZ71` | 14 | 19 | 7 | 27 | `3f1701075421` |
| Bruxo da Tormenta | `kQWbjJw1JuyQjbtA` | 6 | 10 | 4 | 19 | `15dea2c1163d` |
| Enxame Infernal | `X3XvqBtPdgca3JS0` | 8 | 8 | 0 | 3 | `68cf2673aab0` |
| Esmagador coletivo | `8Fn0lmOltvJ22VFg` | 15 | 8 | 0 | 0 | `f653082f7b11` |
| Gatzvalith, Lorde da Tormenta | `L3aPqNEQDeAMKcmq` | S+ | 12 | 0 | 5 | `e70d1d36f4c1` |
| Infecto | `yBbiUYwxPzQzGt0F` | 3 | 6 | 0 | 0 | `1b66c55325d2` |
| Lefeu, Burodron | `Ov7FYYe1MNQU9uIy` | 11 | 10 | 0 | 1 | `f63582eb9e2d` |
| Lefeu, Ezzayn | `fEkyTSfehXLuK50y` | 17 | 10 | 0 | 0 | `0294141b4c17` |
| Lefeu, Hurobakk | `r6jPgNHbUke16PQ0` | 9 | 6 | 0 | 0 | `8bf39ac55aaf` |
| Lefeu, Morgadrel | `CWvmgrAChhzxG9xd` | 13 | 9 | 0 | 3 | `e66974abd989` |
| Lefeu, veridak | `VvClbpVVX95gm6Rp` | 8 | 5 | 0 | 0 | `501a2b654a52` |
| Turba de infectos | `Grd4yKdIgNzxsPez` | 7 | 3 | 0 | 0 | `df536ba79369` |

### Brutos & Indomáveis

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Meio-Orc Bandoleiro | `UlNwscdqxEFyPuWG` | 1 | 4 | 0 | 2 | `1c97b6804299` |
| Meio-Orc Capanga | `UH7kvxHxvvVyKlj0` | 1 | 3 | 0 | 0 | `9ba20da2287d` |
| Meio-Orc Chefe | `DPztngqyJ7UMxaMs` | 5 | 5 | 0 | 2 | `71b65978910a` |
| Ogro | `LPy8dRFFK2Pcn2ce` | 4 | 3 | 0 | 0 | `56b3d000cac3` |
| Ogro Caçador | `NtHE04uKggUuKthR` | 7 | 3 | 0 | 0 | `9626823f63b3` |
| Ogro Capanga | `e9oE7wIF1aIglSE0` | 11 | 3 | 0 | 0 | `e621cfc42023` |
| Orc chefe | `pECg2l5ZHy2h3UjU` | 2 | 3 | 0 | 0 | `b45216c850fd` |
| Orc Combatente | `TDCSckj8ydsr9f9F` | 1/2 | 2 | 0 | 0 | `393aead137f2` |
| Orc Mutante | `Qte0RkTkJMnfkMym` | 5 | 3 | 0 | 0 | `4b019734222a` |
| Orc Mutante Superior | `EsoFFkGUbw7HK2gT` | 10 | 14 | 0 | 1 | `28ab4da86af5` |
| Orc Rei | `RuYt6UaQx7GegI85` | 5 | 6 | 0 | 2 | `dd3bcc8671d3` |
| Orc Veterano | `Y3KXL9t2iICs87qW` | 1 | 2 | 0 | 0 | `48b85ddfec55` |
| Orc Xamã | `hnavT5Ne8PoFKF7C` | 7 | 9 | 4 | 24 | `f11ab310982c` |
| Sapo Atroz | `n8083H4D89bmrHqe` | 2 | 6 | 0 | 0 | `5850a6158347` |
| Tabrachi Campeão | `exBzvzdmVmDhVVi6` | 3 | 8 | 0 | 0 | `6dcd0b409d08` |
| Tabrachi Soldado | `Flmgx9Ib56wP5pox` | 1 | 6 | 0 | 0 | `d6b0713ed94b` |
| Trog Anão Bruto | `Q1bDekyK1oukpWl6` | 1 | 5 | 0 | 0 | `b63ef3575cf2` |
| Trog Anão Eremita | `Sq9ivjgUADGHfHdq` | 8 | 6 | 0 | 0 | `2a73b9451e63` |
| Trog Caçador | `9qnR1BHktd5LIkgT` | 2 | 5 | 0 | 2 | `984a7d335064` |
| Trog Combatente | `IBJiL08J6TVZe4B8` | 1 | 5 | 0 | 0 | `ee47caef79f7` |
| Trog Rei dos Túneis | `dUPijgOqcHV9Mal5` | 5 | 6 | 0 | 0 | `53a9ae5077da` |

### Capangas & Bandoleiros

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Alto Sacerdote de Hyninn | `D8aDmo1kjl5GHbSp` | 8 | 14 | 4 | 28 | `2b6f87941488` |
| Bandido Comum | `fdPW0V8kRiP5RqcZ` | 1/4 | 1 | 0 | 0 | `86d432a2e8ce` |
| Bandido Ligeiro | `DJx4EQGYEbdtnj8V` | 1/2 | 4 | 0 | 0 | `8edf40ee73ff` |
| Bandido Selvagem | `GDk58sy53mwVU2hV` | 1 | 3 | 0 | 0 | `2cd97ae7b00c` |
| Capanga | `3LiQo8VCaPcwbpap` | 1/2 | 2 | 0 | 0 | `f7ce4cb58a00` |
| Capanga Minotauro | `H66mnDW6UQShnUXI` | 3 | 7 | 0 | 0 | `86a08f2623f3` |
| Chefe Bandido | `HwOpKjdVu9WAX6vY` | 1 | 4 | 0 | 2 | `6a4c2abdf2dc` |
| Chefe de Gangue | `c0ELbk8SWHoWjFMD` | 2 | 5 | 0 | 2 | `92b718784568` |
| Chefe de Quadrilha | `bK5zCyynitl3okCM` | 4 | 7 | 0 | 2 | `322311af558d` |
| Devoto de Hyninn Manhoso | `fTfoKRmEa0DbS8s9` | 1/2 | 4 | 0 | 0 | `30ddd2208806` |
| Devoto de Hyninn Simão | `VYNP4DCCUvQOSgeP` | 1 | 4 | 0 | 0 | `b8d0f505ed56` |
| Devoto de Hyninn Velhaco | `UVSjG1UrSVLnGAKX` | 4 | 6 | 0 | 0 | `10175548c142` |
| Duplo | `f9f37Yu6jwzdDGYm` | 4 | 8 | 0 | 2 | `df3b3577381c` |
| Gatuno | `PqdNyA0h0Wbn8Tlv` | 1 | 6 | 0 | 4 | `5897fa93b203` |
| Gatuno Mestre | `6ieBzyb6ffiQpJWV` | 3 | 8 | 0 | 4 | `b0d5bb30ae45` |
| Jagunço | `4LcQFtdb1tlqfmhp` | 2 | 6 | 0 | 2 | `800c84e12fb4` |
| Sacerdote de Hyninn | `d6AJoMMuVKn0rLwj` | 2 | 9 | 3 | 24 | `92471000f781` |

### Culto de Aharadak

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Aspecto de Aharadak | `72qiBckJZ5qdnvGw` | 10 | 9 | 0 | 1 | `d98b06c4c476` |
| Avatar de Aharadak | `aU6VNKMt8oiqaXhR` | 20 | 10 | 0 | 0 | `8538a15b015d` |
| Fanatico Lefou | `M75x57VvnNxqe5oW` | 5 | 7 | 0 | 2 | `861e17a8186b` |
| Iniciado da Agonia | `2yYUl2YoseJgRtgj` | 3 | 7 | 3 | 13 | `b6be00512575` |
| Líder Fanático Lefou | `WzdZ2NAJeYrqsf4X` | 8 | 6 | 0 | 2 | `7e794dbd6cc0` |
| Reishid | `y0YsWWTi1eWh0uBD` | 8 | 8 | 0 | 2 | `dcedc4750f84` |
| Reishid Líder de Culto | `ANIaYLgDCKRIQniK` | 12 | 12 | 3 | 15 | `a59429ba5aff` |
| Sacerdote da Agonia | `3GyLzl6Mp8GjNUKp` | 9 | 12 | 5 | 22 | `7f24e958ec9e` |
| Senhor do Gigante Forma Inicial | `KD1CEFM5a3YHKEBW` | 9 | 8 | 0 | 2 | `74d9930d95d0` |
| Senhor do Gigante Rubro Forma Final | `TcS4jDkKRDoqeHRq` | 16 | 12 | 0 | 2 | `d34c3dba58ad` |
| Zyrrinaz | `YTsqtVBBR17gHaZ2` | 5 | 7 | 0 | 0 | `2ba33d9ed441` |

### Dragões

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Dragão Adulto da Tirania | `3uufXZFFYtnDDYJV` | 11 | 14 | 6 | 32 | `91fcc2d8dc93` |
| Dragão Adulto dos Segredos | `Q19Tmr8aQJu9YO3k` | 11 | 16 | 6 | 28 | `efc3ed628b29` |
| Dragão Bicéfalo | `sCUy7I6xIz1WfjZg` | 12 | 7 | 0 | 0 | `00c07a37624f` |
| Dragão Feral | `uKopIRTAZIodN8zV` | 10 | 8 | 0 | 0 | `de79aedaa10c` |
| Dragão Feral Corrompido | `MZrXAPdCYILEed6k` | 10 | 10 | 0 | 1 | `21b130959c73` |
| Dragão Filhote do Bosque | `rPtBgS7AVtqyM0xH` | 3 | 6 | 0 | 2 | `e91a1cfdcefb` |
| Dragão Filhote dos Rios | `rJztYXSCuXAwmhYg` | 3 | 5 | 0 | 0 | `8e437fec594f` |
| Dragão Jovem da Proteção | `Np0lFnvJViEb6V5A` | 7 | 6 | 0 | 0 | `b7f557d0c35d` |
| Dragão Jovem do Ocaso | `7OoVOgpcip9lH1gA` | 7 | 6 | 0 | 0 | `375427f3da61` |
| Dragão Venerável da Equidade | `MjL87U5JmIvcZxZJ` | 15 | 17 | 7 | 29 | `71d4bae2100a` |
| Dragão Venerável dos Recifes | `tV7fjt1OTkYbkswG` | 15 | 19 | 7 | 29 | `478e9025f69e` |
| Ninhada de Dragões Filhotes | `ij3iQDbL8jqR1ZtO` | 5 | 6 | 0 | 0 | `1754873ca0f0` |
| Sckhar, Dragão-Rei do fogo | `YqC8xC1G9IoC14WF` | S+ | 28 | 12 | 0 | `f17f30c38833` |

### Duyshidakk

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Bruxa Goblin | `Rzanlwjnc0WLE2Al` | 11 | 12 | 7 | 11 | `ffc11d1070cf` |
| Bugbear Guarda-Costas | `skqq7ityoPMVwW9m` | 6 | 4 | 0 | 0 | `8a02ee005501` |
| Bugbear Sentinela | `naC92A1yw2hHKJSp` | 2 | 4 | 0 | 0 | `45480a97533f` |
| Gangue Goblin | `w1QuiQP8nDCz04lS` | 5 | 4 | 0 | 1 | `ffa293009a86` |
| Goblin de Ferro | `VmsmGUV4eIbBXVEz` | 5 | 10 | 6 | 21 | `aa3d6e302349` |
| Goblin de Ferro Mark II | `7HPjE0EcFwsj4LDZ` | 8 | 8 | 0 | 0 | `0214b9d5300d` |
| Goblin-Bomba | `PhmTdzs0Z0bU8iTt` | 3 | 9 | 1 | 7 | `31d223662bca` |
| Hobgoblin Atirador | `2bRHSxOsmuZcYpzs` | 5 | 9 | 0 | 6 | `6ae7a1ff054a` |
| Hobgoblin Comandante Tático | `Lpj1DbADVaaMdCGH` | 11 | 10 | 0 | 7 | `72d7237c7318` |
| Hobgoblin Gladiador | `PvUWXRkSU7qxt66P` | 16 | 9 | 0 | 3 | `31773c0d64f3` |
| Horda Goblin | `QTHBXKXMxSw26x11` | 14 | 4 | 0 | 0 | `16e00f278634` |
| Sangue do Ayrrak | `hps215nro9zZPnhr` | 19 | 18 | 6 | 24 | `188149e7a41e` |

### Elementais

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Aquin’ne | `OKp3jfX1twIAqqDu` | 2 | 4 | 0 | 0 | `ab34dae5bdc9` |
| Ber-baram | `RRwgu4fHjcYL3F4Z` | 8 | 4 | 0 | 0 | `a3e4d969c4fb` |
| Corgann | `wC0ZMbKygKrH0xQ7` | 8 | 6 | 1 | 4 | `329bdbbab889` |
| Hallus’tir | `oyzH45ApRw8tvviO` | 15 | 9 | 0 | 0 | `84190b20ad79` |
| Namasqall | `jvOpLmjfCaaNpfb9` | 14 | 14 | 0 | 0 | `c3dc0860d593` |
| Pakk | `lpz9xuavZvmyN5Wk` | 1 | 5 | 0 | 2 | `92507af08fc4` |
| Pamgra | `81gh6ZYeyhWooSyT` | 7 | 4 | 0 | 0 | `a0a679ba686b` |
| Rarvnaak | `SzAMkrFwl3IOeCeW` | 7 | 6 | 0 | 2 | `c6bfcc58d785` |
| Serpentaar | `fmijlLKxJdsdApfx` | 14 | 6 | 0 | 0 | `65632b6b0ddd` |
| T’Peel | `2Mxq5XjH8YRylzEU` | 1 | 5 | 0 | 0 | `994ee838b849` |
| Tanaloom | `ljVNwSxYlcqrFVvg` | 13 | 7 | 0 | 0 | `6d89c3e0f7e5` |
| Terrier | `WGIL4PmFZmzcczWe` | 1 | 5 | 0 | 0 | `18e457115552` |

### Ermos

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Bulette | `OoV5Op1KCDMhaTCc` | 7 | 7 | 0 | 0 | `76681438620c` |
| Carrasco de Lena | `kukcKxpZQLpkNPWR` | 6 | 7 | 0 | 0 | `b3a714c83190` |
| Centauro Chefe | `yiuyl0muA8OXEx83` | 8 | 7 | 0 | 4 | `dabd222a0a51` |
| Centauro Xamã de Megalokk | `8bZz7Sq8h17wQPI6` | 10 | 13 | 5 | 19 | `8afa9530a816` |
| Ente | `UYx5lwFuvWedMDuw` | 8 | 10 | 0 | 0 | `7fbf55f56169` |
| Estirge | `lyVSVL4TtkPqX41w` | 1 | 6 | 0 | 0 | `d47610ebf37a` |
| Fera-Líder | `DcvxcHzXkYXwyUDo` | 5 | 6 | 0 | 0 | `ab3e88811903` |
| Fera-Mãe | `rH73DxiHrAvExd5l` | 13 | 6 | 0 | 2 | `025a74a79119` |
| Fera-Vassalo | `j9wYwzz52bSLzaQw` | 3 | 7 | 0 | 0 | `88dee1449e44` |
| Lagarto Perseguidor | `Hvheuafp67Ytys5B` | 2 | 4 | 0 | 0 | `327a0c5f1a66` |
| Rhandomm | `pAaFB1MP3yoCbJVN` | 20 | 10 | 0 | 0 | `4800ff452e27` |
| Tendrículo | `Z1KFGc5bPuJUM8UK` | 6 | 8 | 0 | 0 | `14cda7a5b802` |

### Gnolls

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Gnoll Caçador de Cabeças | `K8MZcZIpSLqZzNBF` | 8 | 12 | 0 | 2 | `75037b70b806` |
| Gnoll Capanga | `jfG24UyYdaSedElU` | 1/2 | 5 | 0 | 2 | `4e9a3d47f852` |
| Gnoll Filibusteiro | `ntSwmEbXdKmxwmnD` | 2 | 5 | 0 | 0 | `82c1fd024845` |
| Gnoll Líder de Alcateia | `YgoSCcIXkEjdTd0g` | 5 | 9 | 0 | 0 | `bea6084399b3` |
| Gnoll Saqueador | `J9ToS8OSfeBgFvah` | 1 | 4 | 0 | 0 | `d064b21f4e13` |
| Gnoll Vuul’rak | `bD80ySFtcnD8j1Ks` | 16 | 8 | 0 | 2 | `e1f2608fa3f6` |
| Gnoll Xamã de Allihanna | `ZMldVODaN4RUpDr0` | 2 | 10 | 3 | 16 | `93dffc291017` |
| Gnoll Xamã de Marah | `CqmEg1cFQvvRci2h` | 6 | 10 | 4 | 14 | `b5ec9aeb990f` |
| Gnoll Xamã de Megalokk | `XXc4RVcvTVbiCOTg` | 5 | 11 | 4 | 21 | `5b6f2c5bc059` |
| Hiena | `R6i9ntytQOYv4D9X` | 1 | 4 | 0 | 6 | `c25cf20a19ca` |
| Hiena Rainha | `JfaO4KP956OhChek` | 2 | 4 | 0 | 3 | `c591356a0dd3` |
| Hienodonte | `k8955mJKX7wvvcmg` | 3 | 4 | 0 | 8 | `3b5eb936fba3` |
| Matrona Gnoll | `oCEp9xKazpmF2ybh` | 11 | 8 | 0 | 0 | `336e984383a1` |
| Totem Risonho | `3mpsk4zAe1URQMVU` | 1 | 2 | 0 | 0 | `589c780a7eef` |

### Golens

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Gárgula | `iImSB0uVLxLQ7TxP` | 2 | 4 | 0 | 0 | `88c168839ec2` |
| Gárgula Assassina | `U38X38I4nq81DJxM` | 4 | 4 | 0 | 2 | `db11580b6540` |
| Golem de Barro | `jgIrR0C7t95f8huE` | 10 | 8 | 0 | 1 | `29fbf39e88fa` |
| Golem de Bronze | `UxvL60rRhYLuH3vc` | 9 | 4 | 0 | 0 | `af2da3545a55` |
| Golem de Carne | `SlMZoR9jHPZ625Sw` | 7 | 3 | 0 | 1 | `a469e1afd936` |
| Golem de Espelhos | `rdHBeXr0iDb3qgOA` | 9 | 5 | 0 | 0 | `2c90e5a22cc2` |
| Golem de Ferro | `vaCrH8fEgtrwWq4t` | 10 | 3 | 0 | 0 | `b589fc18f079` |
| Golem de Ferro Superior | `QQm3yY9ThWDpfmHt` | 1 | 0 | 0 | 0 | `0cf2e8fc69e9` |
| Golem de Matéria Vermelha | `etFrgvhNRgUnfah9` | 18 | 8 | 0 | 1 | `dd3687112118` |
| Golem de Pedra | `lEnMD19YT24se8iq` | 12 | 4 | 0 | 0 | `22133488e54b` |
| Instrumento Divino | `zPJrIpNTomzrSXp2` | 7 | 6 | 0 | 2 | `77099e92c89c` |

### Igreja de Arsenal

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Bispo de Guerra | `ot6HdVRW2LtLTN4n` | 8 | 15 | 6 | 31 | `cc17abc99250` |
| Capelão de Guerra | `VV51LfgAxEdED8PY` | 4 | 10 | 4 | 16 | `43609c0efd82` |
| Coletor de Arsenal | `ztk2T0LlTCsU36Q8` | 10 | 13 | 5 | 20 | `ff6e73690d1c` |
| Concílio forjador | `D1skhgYy0dEzo8OS` | 13 | 6 | 0 | 0 | `54e4e3c2604b` |
| Forjador Litúrgico | `JS6gRc8l0KhyIJQ6` | 9 | 5 | 0 | 0 | `5f1a7e1a250c` |
| Guerreiro Perpétuo | `ppsVSmj7Gt33wP5j` | 7 | 6 | 0 | 2 | `bc1a8a173ff9` |
| Kishin | `HgMkejugM96LN9QZ` | 13 | 9 | 0 | 5 | `8b3df023917c` |
| Kishinauros | `i3thHBOGtnrfVUXJ` | S | 19 | 4 | 12 | `5e2849173d3d` |

### Igreja de Kallyadranoch

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Acólito de Kally | `QZ8b2xgDfFKarEKg` | 3 | 11 | 4 | 16 | `25d5437ca010` |
| Alto Clérigo de Kally | `fedfqv2oEWUqH39m` | 13 | 18 | 8 | 35 | `e1e1f3bba21b` |
| Avatar de Kallyadranoch | `fFtYT5vHuFrdZ4Ud` | 20 | 12 | 0 | 0 | `8db6fc7360bc` |
| Cavaleiro de Kally | `fQrtrPOG9usi4Ekx` | 8 | 8 | 0 | 0 | `c02a1ac601f5` |
| Clérigo de Kally | `3QvXeX3hjFpVpE7g` | 8 | 15 | 6 | 29 | `744b4b619436` |
| Corcel de Kally | `dl2AaxTJSPi1eMsb` | 2 | 6 | 0 | 0 | `3d495f9d4132` |
| Dracomante | `6kO9fRpzZtgF0MFM` | 5 | 9 | 4 | 20 | `f25abef3ceee` |
| Dracomante Superior | `sXEB81PtXOJx4dHx` | 14 | 15 | 6 | 33 | `e6b9d4122415` |
| Kallyanach Bárbaro | `GGTgHSX1g40MR4aF` | 6 | 5 | 0 | 2 | `b9e303ba3f72` |
| Kallyanach Morte Glacial | `YTEhaImCkZ4cc4Il` | 9 | 8 | 0 | 5 | `3007932fa487` |

### Império de Jade

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Aka Oni | `xdScGzh8hWitDEol` | 9 | 10 | 0 | 4 | `f1ef3e5d886a` |
| Chibi-Kabuto | `Hmkee1VBFmV9BAJN` | 1/4 | 2 | 0 | 0 | `c0a769c6209a` |
| Dai-Kabuto | `N9Nzd4D8GBVoLjg2` | 4 | 4 | 0 | 2 | `f462579a3cb2` |
| Daitengu | `VY62Mz5wgecZj0EU` | 8 | 8 | 4 | 27 | `d750895ca1bd` |
| Dragão Celestial Adulto | `hAI4KDDLMz5vWOe0` | 15 | 17 | 6 | 21 | `0359eace7e73` |
| Dragão Celestial Jovem | `CSlT1vi1EgC8OHPQ` | 10 | 12 | 6 | 21 | `e2d97ba8a52c` |
| Dragão Celestial Venerável | `BN5rXmgmHQnL3UTo` | 20 | 21 | 9 | 28 | `ad56d38ef59f` |
| Kaijin Bruto | `Bw4cvx1KmTctD2zK` | 11 | 9 | 0 | 0 | `a3f96d6281bc` |
| Kaijin Capanga | `g32asY0C26ZUCoTt` | 6 | 3 | 0 | 0 | `bc44a966d937` |
| Kaijin Ninja | `sSl2AUFM3EpBpOL5` | 13 | 14 | 5 | 28 | `04a00f32ec28` |
| Kappa Brigao | `AxTHVxJDx4btLi5X` | 1 | 5 | 0 | 2 | `fc6d6509a8d4` |
| Kappa Yokozuna | `jl0sbRdJydL1uatO` | 3 | 6 | 0 | 4 | `b50a5df936ee` |
| Ko-Kabuto | `CSSerSzywOb2J7i6` | 1 | 3 | 0 | 2 | `480a29f615eb` |
| Mashin Monge | `l7zftUzQFYj24nz1` | 3 | 4 | 0 | 1 | `95c2b99443df` |
| Mashin Samurai | `T5Hw3bfAzkjaADvq` | 5 | 5 | 0 | 2 | `83d1b62cffed` |
| Nezumi Capanga | `48efJAliGXqrOUDj` | 1 | 5 | 0 | 2 | `1a5a260b7e4c` |
| Nezumi Ninja | `cJumk4PUAiJVGS8L` | 3 | 9 | 0 | 2 | `8f0890ae3ca6` |
| Oni | `prc1z6eqw1MjwvpF` | 5 | 6 | 0 | 4 | `8a4cff54f009` |
| Tengu Bandoleiro | `Sr1Cn3deNIwJYQPU` | 6 | 4 | 0 | 0 | `aea34915ffa9` |

### Império de Tauron

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Arqueiro Escravo | `OPvVGg5KvU122E75` | 5 | 6 | 0 | 0 | `2d83304c52ce` |
| Centurião | `wxMNWJxrLlSLIiJw` | 3 | 10 | 0 | 5 | `f462b5bd7563` |
| Centurião de Elite | `346ljaOgl0PKFiju` | 7 | 10 | 0 | 7 | `6780ce96cb96` |
| Decúria | `Uu2z9IHCsVyw4JuE` | 5 | 9 | 0 | 2 | `a8fb7e5b0372` |
| Estouro de Fúrias de Tauron | `NSJD8mlWtsEY3EUW` | 8 | 6 | 0 | 0 | `ddf820a720a5` |
| Fúria de Tauron | `TJQicQnmayEfYj9M` | 4 | 6 | 0 | 0 | `39e1813509a5` |
| Gladiador Táurico | `rkfawdJL4Qczwzqh` | 10 | 10 | 0 | 0 | `7b23ea075977` |
| Governador Corrupto | `ZHfCoIJzKtojCPlq` | 6 | 11 | 0 | 0 | `dabcfd545a9a` |
| Legionário | `pGBc7GWDHpsjXv9m` | 1 | 9 | 0 | 2 | `f390085755fe` |
| Legionário Insano | `fChMjVefPYlZISud` | 8 | 7 | 0 | 0 | `327a3e84d9d7` |
| Minauro Arcanista | `e6kyksqMYQ0YzFU7` | 3 | 8 | 4 | 16 | `3ddc67ee90a7` |
| Minauro Ladino | `2rF16OUW4eChCjND` | 6 | 9 | 0 | 3 | `81d4a4b6d65e` |

### Kobolds

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Cão de Kally | `aYCcMtKKLNJkYPel` | 2 | 4 | 0 | 0 | `1bb860e80b25` |
| Enxame Larval | `p0pqbsXBT49sSzZP` | 1 | 3 | 0 | 0 | `9c7f3cafcdaa` |
| Kobold Bruto | `7N6m0HYRyA1KwCoV` | 4 | 4 | 0 | 3 | `17b6a2c039aa` |
| Kobold Explosivo | `q7507LWkF8EM6YRx` | 1 | 6 | 0 | 3 | `66c194c6e649` |
| Kobold Patrulheiro | `98IcEdnKb69LfLYq` | 1/2 | 5 | 0 | 3 | `db96404829f0` |
| Kobold Veterano | `PqXkZkoMutVmDrit` | 2 | 7 | 0 | 3 | `153057b6646f` |
| Kobold Xamã | `6veMgLWitYQNaq6a` | 3 | 11 | 0 | 5 | `66d16c902fbb` |
| Kobold-Mãe | `6EsgM8QBhslHAqFs` | 12 | 6 | 0 | 1 | `d709d5740d11` |

### Mascotes & Familiares

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Bogum | `yvvrGqVvAygLOssr` | 1/2 | 5 | 0 | 0 | `ac1de6a932d5` |
| Escudeiro | `egPLwmgkoR1UiOo6` | 1/2 | 2 | 0 | 0 | `e427bc897576` |
| Fofo | `JHHlbarIBbMjlfsy` | 1/2 | 3 | 0 | 0 | `78df640c7ec1` |
| Gambá | `v3gOHiQ8UAvJ2HTR` | 1/2 | 4 | 0 | 0 | `ba6d84821245` |
| Homúnculo | `cgdpM0OhLGc19yFB` | 1 | 6 | 0 | 0 | `55c00a2d4a9c` |
| Kill’Bone | `Ag8FYOO5yuqWwBTL` | 1/2 | 3 | 0 | 0 | `739631389ba6` |
| Malafex | `J1LWy8rBtpOHzegk` | 1/2 | 3 | 0 | 0 | `0db9e77f257c` |
| Tentacute | `fnEwQD4hGLYvf6Gv` | 1/2 | 6 | 0 | 0 | `23474e8ba38d` |
| Tropa de Tentacutes | `s5pqg4JwvRLWT5Vk` | 2 | 7 | 0 | 0 | `214421d54558` |
| Verilêmur | `WTDZKAefLKkqOaDH` | 1/2 | 3 | 0 | 0 | `b3d786cf4b59` |

### Masmorras

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Asa-Assassina | `mTyARFeBu0icZEFy` | 1 | 4 | 0 | 0 | `5af7df254fd8` |
| Brawar | `OKYwkTqwwImrj9CE` | 14 | 6 | 0 | 2 | `f64d1393d99c` |
| Cocatriz | `Cb4T9hDinzcffv05` | 3 | 4 | 0 | 0 | `6692233e32f5` |
| Cocatriz-Real | `qBYdLoR882eDBc6M` | 7 | 8 | 0 | 0 | `17b755dd6a60` |
| Cocatriz-Real Chefe Final | `ObODsdit0Qi5adfX` | 9 | 8 | 0 | 0 | `7f3f44eb972f` |
| Glooop | `DC0YMNFO417xLlZN` | 2 | 4 | 0 | 0 | `628ab0e0bce1` |
| Glop | `ywwwSd2U0FYFnybT` | 1/4 | 2 | 0 | 0 | `82ca6a532ea6` |
| Harpia Saqueadora | `u0oCmJshAoA1MBG1` | 4 | 6 | 0 | 0 | `e80e073651d9` |
| Mamãe Glop | `6GgMpnZMgzOV9ld4` | 2 | 5 | 0 | 0 | `560e91a50c5a` |
| Mantor | `COMA2PWM7Yw9f48o` | 5 | 5 | 0 | 0 | `a7920204c5a9` |
| Mímico | `bJLIQCrhzAl6GoFi` | 6 | 7 | 0 | 2 | `7997598b598d` |
| Mímico Jovem | `BspYNUh0sqO8hZLh` | 3 | 7 | 0 | 2 | `8263c55f6ba3` |
| Quimera | `0tJwSOWdEQGEIG9T` | 8 | 6 | 0 | 1 | `5ef01d99aee3` |
| Slark | `XqNubXx0YSJadW6l` | 1 | 4 | 0 | 4 | `8e2c56012e0b` |
| Tigre-de-Hyninn | `3shXPm7UdquFUGVs` | 5 | 9 | 0 | 0 | `13952331dd18` |
| Tigre-de-Hyninn Primordial | `0g5h38lgUHvzXNaH` | 11 | 8 | 0 | 0 | `e3cf92969de4` |

### Montarias

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Baleote | `0cOdISjYGHPbF45w` | 3 | 3 | 0 | 0 | `d60783105fbb` |
| Brontotério | `ijTWMtLN1ZFe1VIA` | 8 | 5 | 0 | 2 | `8ae71ea57c77` |
| Capivara | `4gaK8HZgooDVSgHq` | 1 | 4 | 0 | 0 | `1a343415a9f3` |
| Cavalo de Carga | `y8q3Bm2BJElesvIn` | 1/2 | 2 | 0 | 0 | `767c50af8a91` |
| Cavalo de Guerra | `0BwYJCkizZMubBIK` | 1 | 2 | 0 | 0 | `efecd2ba3a65` |
| Cavalo de Montaria | `KWENtj0JqE5bR47K` | 1/2 | 2 | 0 | 0 | `03be733d0f3f` |
| Cavalo de Namalkah | `gLIrhyqZNT2i2UTA` | 2 | 2 | 0 | 0 | `e33e40c69acd` |
| Cavalo Glacial | `apGVQEKNt4B7E6Ya` | 2 | 3 | 0 | 0 | `3f19931f3a5c` |
| Corcel do Deserto | `7ED7ldnV70OR3zpy` | 2 | 3 | 0 | 0 | `b80aab1da48e` |
| Dromedário | `4WbfyPE06wWQNm2t` | 1 | 4 | 0 | 0 | `4c8bb9b62346` |
| Elefante | `ymNrWcFqJjvhYToT` | 7 | 8 | 0 | 0 | `0309b5eaeb7d` |
| Gorlogg | `oqfhLboYsBl6L1VO` | 1 | 3 | 0 | 0 | `9b66c61c8051` |
| Gorlogg Alfa | `EFTLhM5DZ6hb80t7` | 5 | 4 | 0 | 0 | `3d1ead73cb1b` |
| Leão | `gI7t13pttXPsiNmH` | 2 | 5 | 0 | 2 | `0545a772838e` |
| Pantera | `ExDW9C78Nc2qPjvZ` | 2 | 5 | 0 | 0 | `7dc78aab6eaa` |
| Rinoceronte | `sDcKQBB3YgPzGJFO` | 4 | 2 | 0 | 2 | `b0ed11f283d5` |
| Rinoceronte Lanoso | `Ej9qcfC4fT7KbzPc` | 6 | 4 | 0 | 2 | `1b620c12240b` |
| Tatu-Montanha | `xab9NLSNvXC67ht0` | 4 | 4 | 0 | 0 | `27aac0731195` |
| Tigre | `6MRmmhDPUgyuPXXz` | 3 | 7 | 0 | 2 | `5337ccdd17d3` |
| Trobo | `QXASTSZR9uadGzzk` | 1 | 2 | 0 | 0 | `ab4fdba3223b` |
| Tumarkhân | `fOq9sifDJ51eqEBB` | 4 | 3 | 0 | 0 | `33292f23bb2d` |
| Unicórnio | `95AVgngYrwT81xgD` | 4 | 8 | 0 | 0 | `d2038166ff1d` |
| Urso das Cavernas | `iPUN4lJhjL1yPhV0` | 8 | 5 | 0 | 2 | `b59c5802d999` |
| Urso Panda | `slglwoYbqzUUjmj7` | 1 | 5 | 0 | 0 | `19302c89b38b` |
| Urso Pardo | `kS1ej25l2IjvB9K1` | 3 | 4 | 0 | 0 | `940ccdae918e` |
| Warg | `OwNCnKYMVoL2jjVb` | 3 | 4 | 0 | 2 | `6d61541cd7f0` |

### Mortos-vivos

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Carniçal | `dgNc9LpGwKN6m1ec` | 1 | 6 | 0 | 0 | `c7e5ed4f3e10` |
| Cavalo Esqueleto | `ypIVTqfouVL4PAXC` | 1 | 3 | 0 | 0 | `4915eff9bc91` |
| Fantasma | `UgasD3Pgn8AoKeLm` | 7 | 5 | 0 | 0 | `ad754369f898` |
| Garra-Zumbi | `5iTDRAnaKzcUpZX3` | 1/4 | 3 | 0 | 0 | `d4b5f8ed0bac` |
| Garra-Zumbi Enxame | `V2Bm6JRmqqKN8lGD` | 3 | 3 | 0 | 0 | `c5185f9418e4` |
| Garra-Zumbi Gigante | `XnpRGfkJUpQrGlxq` | 5 | 5 | 0 | 0 | `828f64b7ff4d` |
| Garra-Zumbi Ogro | `Vw9M5tpqJ3tfxMbj` | 2 | 12 | 0 | 0 | `b37e1ac35078` |
| Gigante Esqueleto | `GbDp4UNl8CATh8Jb` | 5 | 6 | 0 | 0 | `ec02e1f2cef9` |
| Hidra Esqueleto | `EAheLU7y2Ot0i49I` | 11 | 3 | 0 | 0 | `3f5379d7f32e` |
| Lacedon | `d4pa4GrLLCk45vR7` | 2 | 14 | 0 | 0 | `7f7b6960fb16` |
| Lívido | `NueYJ7bovoahLRKo` | 3 | 9 | 0 | 2 | `477becf36bda` |
| Mamute Esqueleto | `kvD9CFdIyJYCB8XQ` | 8 | 6 | 0 | 0 | `ec1318cd23a2` |
| Mortalha | `jIBwK9NXSphS3mZn` | 11 | 5 | 0 | 0 | `44ff4e1f2b8e` |
| Múmia | `e8sRc6wDQblHfR8H` | 5 | 4 | 0 | 0 | `59ab2978b879` |
| Necrodraco Esqueleto | `B8EL4EI47BfN5hpx` | 12 | 6 | 0 | 0 | `744c8291faea` |
| Necrodraco Lich | `1Iyv6AkiYrCLKau6` | 20 | 19 | 8 | 28 | `774fa90dd37c` |
| Necrodraco Zumbi | `wXiCmyxAnMCilUz8` | 14 | 8 | 0 | 0 | `93cc259227a8` |
| Ogro Esqueleto | `9gPe0gwEzpX24VUK` | 3 | 4 | 0 | 0 | `d285a48f634c` |
| Rei-Tirano Esqueleto | `NdDEWhzfvp5gXo4I` | 12 | 8 | 0 | 0 | `e652b3d13f35` |
| Senhor das Múmias | `GWwnSMzZb6T7vCM1` | 15 | 15 | 5 | 19 | `63bb861f57f0` |
| Tarso, Dragão-Rei dos Mortos | `4NoYZxdKcqdtLnZ4` | 20 | 15 | 0 | 0 | `132fba355fa7` |
| Urso Pardo Esqueleto | `NoFNQuBhz907af0o` | 4 | 7 | 0 | 0 | `0414ce31d1ab` |

### Mundo Perdido

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Armento de Burafontes | `dNHzc7MVChXmKVlj` | 8 | 4 | 0 | 0 | `10e90e06bc27` |
| Árvore-Matilha | `OXbAZYpNJi4oIB8L` | 13 | 4 | 0 | 0 | `36ad968ef95a` |
| Bando de Deinonicos | `gcqQFkXcYdJROFjp` | 8 | 5 | 0 | 0 | `48ffcfa8bf38` |
| Burafonte | `bM54qFHdk3nyf87a` | 4 | 2 | 0 | 0 | `4c609307e9d8` |
| Deinonico | `dCw1dmLhqviLnNVX` | 4 | 7 | 0 | 2 | `71583a461729` |
| Enxame de Gali-Gali | `hOy4eT4q0GdeW6sl` | 1 | 3 | 0 | 0 | `81aa426d7d4b` |
| Espada-da-Floresta | `aCIJytldP1DxFhub` | 3 | 4 | 0 | 0 | `9ccfae0df24f` |
| Galhada Fêmea | `c2erS8zieF8hMU3Z` | 2 | 2 | 0 | 0 | `74ea49f048df` |
| Galhada Macho | `YpuFw0SzfQ9wri9I` | 2 | 5 | 0 | 0 | `3f1c1ad43671` |
| Gali-Gali | `XZ5mCsPMNstfez0J` | 1/4 | 2 | 0 | 0 | `a4da68a13f14` |
| Grande Battham | `HoDfI8taOKTUfRMF` | 12 | 5 | 0 | 0 | `505faf21aff9` |
| Raagoran | `G2dZZbvM9lcYj6Bh` | 8 | 8 | 0 | 0 | `3ec7a19d220b` |
| Rei-Tirano | `uUyxrhmuVSKv3hz5` | 14 | 7 | 0 | 0 | `ceab4bf73066` |
| Tuntram | `oqAAwIGMTSSqn79A` | 10 | 4 | 0 | 2 | `e42592972c7f` |

### Piratas & Pistoleiros

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Afogado | `PHJMooTfyz145QOF` | 7 | 3 | 0 | 0 | `7dca360d52e7` |
| Armeiro de Tenebra Clérigo | `sakFK8F4kaKGG6na` | 8 | 15 | 4 | 21 | `baa1cce03d39` |
| Armeiro de Tenebra Devoto | `0amsB9fZz2ESqqwG` | 6 | 10 | 0 | 6 | `79bffed558ae` |
| Bando Pirata | `fp1ZwGH0QpZbiPkn` | 6 | 5 | 0 | 2 | `2164ebb55f16` |
| Capitão Afogado | `vDFC9uLBNkBEui55` | 10 | 4 | 0 | 0 | `d6a25fd1b722` |
| Capitão da Frota Áurea | `w1MCHdllGHsqKZhc` | 10 | 11 | 0 | 6 | `639d825bc174` |
| Capitão do Conclave Pirata | `sCPC9H6HKKp6QzpY` | 8 | 11 | 0 | 5 | `3a66871b3a7e` |
| Capitão Pirata | `NIO4qtvAf84ZnMcd` | 7 | 10 | 0 | 4 | `cfaeca6a36ac` |
| Chapéu-Preto | `YIjYD4e9LlHqQUmh` | 12 | 10 | 0 | 8 | `e8363d58e0f4` |
| Demônio da Pólvora | `n8rpFhrtzFnsjckr` | 12 | 6 | 0 | 1 | `e71fa5bc9b20` |
| Goblin de Sombreiro | `EMRwNL6uLpLNabzj` | 2 | 6 | 0 | 2 | `d6a25b4ecf6c` |
| Homem-Piranha | `K0at67gmYHhV6WFP` | 2 | 2 | 0 | 0 | `8815b2559266` |
| Homem-Piranha Capitão | `4XMkIVL82LHgYoBx` | 7 | 8 | 0 | 2 | `f7f7f069be08` |
| Imediato | `6FDeWsePVjuFaLLf` | 4 | 4 | 0 | 2 | `b5d45d2b3ff1` |
| Líder Goblin de Sombreiro | `pnFjPomNrY4sUfqo` | 6 | 8 | 0 | 2 | `474986d955af` |
| Líder Pistoleiro | `3UIHTuPzCiHkspLm` | 4 | 8 | 0 | 4 | `de3da65ab993` |
| Lobo do Mar | `eRUyB5sR5lXSY0kz` | 16 | 10 | 0 | 4 | `2e372b85ade4` |
| Pirata | `uGYIDYvsNbzQd85C` | 1/2 | 3 | 0 | 2 | `085600e0f590` |
| Pistoleiro | `FAt12xWmacdJjlxH` | 2 | 5 | 0 | 2 | `62c81b5dbf6d` |
| Sahuagin Metamorfo | `o7hpbqeQVpf8LUhd` | 3 | 10 | 0 | 2 | `eda78747176a` |
| Sahuagin Predador | `9tS9PXtm2Cdz4q5Y` | 1 | 7 | 0 | 2 | `a7b9d55b505c` |

### Povos-trovão

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Ceratops Chefe da Tribo | `Roq6oGNg4EgPzcVK` | 7 | 7 | 0 | 1 | `09f8345393bc` |
| Ceratops Guerreiro | `maxC7Impt9S01WNw` | 3 | 5 | 0 | 0 | `439a97354b6f` |
| Pteros Ceifador | `GdXUwrCVcLXFU1VJ` | 2 | 5 | 0 | 2 | `79335aeefeeb` |
| Pteros do Céu Infinito | `TrENTRdCMmQKfjyK` | 5 | 11 | 4 | 21 | `39412ea1b76e` |
| Totem da Divina Serpente (Aspecto de Allihanna) | `TJnZajTGo0iIG7k8` | 14 | 17 | 5 | 15 | `0f9e8cd16325` |
| Totem de Sarana (Aspecto de Marah) | `02mGq5lGA86NMJCA` | 10 | 5 | 0 | 0 | `84e6d8e11333` |
| Totem do Pai-de-Tudo (Aspecto de Azgher) | `wwWwwZ2ejNzzqy8c` | 12 | 5 | 0 | 4 | `060e516c070c` |
| Totem do Rei-Tirano (Aspecto de Megalokk) | `E5tQGaVl2J2j3ktS` | 15 | 6 | 0 | 0 | `ea4333ea31dd` |
| Velocis Caçador | `zvQaibisgjcsk1e9` | 4 | 11 | 0 | 4 | `ac162cdd7954` |
| Voracis Caçadora | `PvC6vz1lvvOkty8d` | 8 | 11 | 0 | 2 | `8bc64633dc87` |
| Voracis Rainha | `3rGW0q4cXaxYy9hs` | 11 | 11 | 0 | 2 | `cf2f2f5b62f2` |
| Xamã de Sarana | `VJEKoyT4bpRvcW1c` | 6 | 13 | 5 | 25 | `4a0f4d7b2855` |

### Puristas

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Arcano de Guerra Adepto | `4mF4iUg9lz6EAYaZ` | 4 | 11 | 5 | 28 | `cb78821c5a49` |
| Arcano de Guerra Veterano | `qoqJuWNhVN4gN1ha` | 11 | 14 | 6 | 31 | `578d3455fe74` |
| Caçador de Impuros | `c0sXET6Gf8dFSqfk` | 8 | 11 | 0 | 6 | `3193dc6d874a` |
| Carruagem de Comando | `5vYD6Uh0oUVnyjUP` | 5 | 8 | 0 | 4 | `5e95b5e5a109` |
| Companhia Blindada de Elite | `xnVPWjbewz1Dti19` | 9 | 7 | 0 | 0 | `a888d86e8bd7` |
| Corcel de Comando | `peqVrKHrHth7x889` | 3 | 9 | 0 | 6 | `ba2b9471c16b` |
| Dançarino de Guerra | `oStWMyEhvDk4pYEB` | 4 | 8 | 0 | 4 | `9168924cd970` |
| Dançarino de Guerra Veterano | `VmoQ6lFFMiK4MXKn` | 6 | 9 | 0 | 4 | `1aed27af2eed` |
| Purificado | `8tkVFib26dOOBwX0` | 2 | 2 | 0 | 0 | `bd9ca077e352` |
| Soldado Blindado | `RjTNvPJPaFWtzJtt` | 5 | 7 | 0 | 4 | `64a798a628d8` |
| Soldado Superior | `o1KF0PhxIuVTzVAS` | 17 | 8 | 0 | 1 | `004b96e2ca38` |

### Reino dos Mortos

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Alzeras | `oOYF8aQAIr1zhHnX` | 11 | 14 | 10 | 33 | `1683012adca3` |
| Archlich Ferren Asloth | `b6Ws7c0PN2KIsIZc` | S | 1 | 0 | 0 | `62fd11770e13` |
| Cemitério Vivo | `K6IIMvpomMhPXTzY` | 17 | 7 | 0 | 0 | `8bbb97392668` |
| Chacal-Zumbi | `v2kibNY1QpM0qZMq` | 2 | 6 | 0 | 2 | `c55a6b75dace` |
| Lich | `prtZ8UXsGUOEzAff` | 15 | 23 | 7 | 44 | `7163158bcff5` |
| Lich de Aslothia | `TO3VjwF1pWK6gbp6` | 18 | 25 | 9 | 28 | `63523a948735` |
| Líder Mercenário de Aslothia | `FDLyUjjZ57CC9sZC` | 5 | 6 | 0 | 2 | `7658f406a614` |
| Mercenário de Aslothia | `NVq2TZFX2Ayp2Ikd` | 3 | 3 | 0 | 2 | `19a9ba7e9701` |
| Morgue’raz | `7GSnGjP0lfahBItF` | 9 | 8 | 0 | 0 | `3fbcfedacbf0` |
| Wisphago | `3ygazBbCBqdpxROU` | 8 | 6 | 0 | 0 | `dd30540d3cc9` |

### Reinos de Moreania

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Búfalo Paladino de Bullton | `lnLGsYd4TKEh0qT7` | 6 | 9 | 0 | 7 | `3ef0cffbbaa6` |
| Búfalo-de-Guerra | `igZmEH4E7YmzYxn2` | 2 | 3 | 0 | 0 | `330157fb5072` |
| Coruja Druida | `NBMQlPKfZSK5Fm3y` | 10 | 14 | 5 | 16 | `4da54a79a1f2` |
| Hippossauro | `WcHt7WEisCDhOu2Y` | 3 | 5 | 0 | 0 | `27f9c3ad5ee5` |
| Horda de Otyughs | `HBOnahqOGej4jQqe` | 16 | 8 | 0 | 0 | `c73bbcdee750` |
| Mantícora | `2EZW6B6u4TyZDnom` | 6 | 5 | 0 | 0 | `c2cba629f207` |
| Mantícora Primal | `ceLOjVYqo39pIkFJ` | 14 | 7 | 0 | 2 | `b79e667ba628` |
| Otyugh | `nI7pnJUYwwO1laR1` | 5 | 6 | 0 | 0 | `0c30213a958e` |
| Raposa Bucaneira | `ntantfga6FrSdva8` | 2 | 10 | 0 | 3 | `6dc24ffeacd0` |
| Yidishan Bugbear | `EEr7pqrei01TlMaP` | 2 | 5 | 0 | 2 | `978f8faa8573` |

### Sanguinárias

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Cerianthar | `qcaGhhbGYHeQQtpD` | 4 | 14 | 0 | 0 | `dfb6515e0769` |
| Grande Tachygloss | `dQflFIDOfQE9rdaq` | 16 | 6 | 0 | 0 | `46ac5b27dfab` |
| Kaiju | `v9iqzoaMtG5nUa0K` | 20 | 12 | 0 | 0 | `fcd2a970f72c` |
| Oxxdon | `YNnJOAvd6MyY3AEl` | 2 | 5 | 0 | 0 | `c1496d258a3d` |
| Oxxdon Imenso | `TpJQf6HrZo8088aO` | 10 | 7 | 0 | 0 | `e36f0b7d11d3` |
| Razza’Kham | `tovS82v03G49Jqsz` | 17 | 7 | 0 | 0 | `573fc5f1064c` |
| Serpe | `9W9zuozJK0IKqSmv` | 5 | 6 | 0 | 0 | `9171aa302a2d` |
| Serpe Anciã | `gyvxKdRAXlSJ0AW1` | 8 | 8 | 0 | 0 | `6904f782fff7` |
| Uraghian Adulto | `gzx3YfgyMNzVb3q2` | 8 | 4 | 0 | 0 | `27fc1f744417` |
| Uraghian Jovem | `zFzQyxIvhngJITgX` | 5 | 5 | 0 | 0 | `d418884a35f2` |

### Sob as Ondas

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Água-viva | `mZIktbDcPd625WmN` | 1 | 4 | 0 | 0 | `07f6d7fcafba` |
| Água-viva Gigante | `g1pOVaVrdUxs5NJz` | 8 | 4 | 0 | 0 | `1fac464e8958` |
| Canceronte | `v6jEv1QmdqsDl9gw` | 3 | 4 | 0 | 2 | `c56ed956ca67` |
| Cardume de Selakos | `TaU5N5Jb8mcFZFez` | 9 | 6 | 0 | 0 | `065747cab8c5` |
| Elfo-do-Mar Chefe | `HjS0SSGKNkKp2VwR` | 6 | 8 | 0 | 6 | `0aa77cbc583d` |
| Elfo-do-Mar Druida | `p8uFPXpzAzuTACYb` | 10 | 10 | 5 | 28 | `36f26a2bc544` |
| Elfo-do-Mar Pescador | `GV1dYPGZLSjubCRM` | 2 | 3 | 0 | 2 | `64e8686b5f9d` |
| Enguia Rainha | `s8CeCSg0RYfsAtXz` | 19 | 9 | 0 | 0 | `6bc2efb822b3` |
| Enxame de Águas-vivas | `hgdYalBN1lg02nuK` | 6 | 4 | 0 | 0 | `68f1a5ffa66f` |
| Irukanjin | `txiRaks9ako5lr5Q` | 4 | 5 | 0 | 0 | `2e04a64ba704` |
| Kraken | `XpWeVuCRFl3kYkST` | 19 | 10 | 0 | 0 | `50a9a8e4beaf` |
| Mega-Selako | `kxIpvW4AzfNYvHhy` | 12 | 6 | 0 | 0 | `0a1716961927` |
| Nereida | `UZaJUF9qbXr8ZOyc` | 12 | 9 | 0 | 6 | `5334a23caac3` |
| Peixe-Recife | `SoD0qZsbSkkC09ZT` | 6 | 4 | 0 | 0 | `8a615972801b` |
| Platan | `bmiyb0WARTbUhP8c` | 2 | 1 | 0 | 0 | `ed9d60316c70` |
| Pliorex | `hwx3f5fZAisI7YdG` | 5 | 5 | 0 | 0 | `55213dbf0fa3` |
| Pliorex Abissal | `Na5Fs0tEC21fJGa0` | 10 | 6 | 0 | 0 | `9adb60072e82` |
| Selako | `Lby4G2OBtIRa5es5` | 2 | 4 | 0 | 0 | `d028959739bb` |
| Selako-Tigre | `FBFA20GZsjr4N8bS` | 6 | 5 | 0 | 0 | `146af1ebaeae` |

### Sszzaaszitas

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Cultista de Sszzaas | `kN4BdbyxEQyjH54e` | 7 | 15 | 6 | 29 | `8096ec3849be` |
| Elemental do Veneno Médio | `4HLiAnsC98a9QLx9` | 2 | 5 | 0 | 0 | `3b8062a5d659` |
| Elemental do Veneno Pequeno | `geEM5NwxCC7Y5SH4` | 2 | 5 | 0 | 0 | `83b7d3fbeed4` |
| Hynne Dormente | `vAwffVJjfVJxSi9g` | 5 | 9 | 0 | 2 | `f051bab85c51` |
| Nagah Dormente | `wfez6KIp5zwRaHGk` | 3 | 8 | 0 | 0 | `31b99389630b` |
| Zumbi Peçonha | `yKmZqy3sSsCRMXil` | 1 | 6 | 0 | 0 | `24d51f9e321d` |

### Trolls Nobres

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Alto Sacerdote Finntroll | `UJyRAb3Dyn5tIp6h` | 12 | 20 | 7 | 45 | `1e9b75882dcc` |
| Arcanista Finntroll | `erkhORKVukrLiLqf` | 14 | 13 | 7 | 21 | `d789908aa938` |
| Cavaleiro Finntroll | `yjQWx1C7Ve7i1AeQ` | 7 | 19 | 4 | 22 | `1aa4ef6f3a3d` |
| Defeituoso | `r4eSQjynLCel104p` | 6 | 5 | 0 | 0 | `6e1cf0168d30` |
| Finntroll Caçador | `6jyqRauZOKns34yj` | 2 | 12 | 0 | 6 | `b8b11c850991` |
| Finntroll Feitor | `DijWHLfkmrW2xNCc` | 6 | 15 | 6 | 27 | `f25821a77ade` |
| Finntroll Senhor de Estábulo | `twRcvWAzFRiPkopv` | 12 | 16 | 6 | 28 | `3f133b62b546` |
| Horda Mycotann | `K3tNIhHx1GKvwSUm` | 12 | 4 | 0 | 0 | `d040f5d786d3` |
| Mycotann Druida | `MVyGrnvWXvUbsJZ6` | 5 | 7 | 3 | 14 | `fddf6177989e` |
| Mycotann Labutador | `r7H7MP84EwanRwgs` | 2 | 4 | 0 | 0 | `0823fdbb6daf` |
| Perdigueiro Troll | `jwBGC188zhhAaFga` | 1 | 8 | 0 | 0 | `e72da58c284d` |
| Protetor-Refém | `UCWvSrbNlOCwTlYL` | 5 | 6 | 0 | 0 | `236bf2a6bbda` |
| Sacerdote Finntroll | `GYxIv11jKpwygJtW` | 6 | 17 | 6 | 25 | `0581a8317ca2` |

### Uivantes

| Ameaça | ID | ND armazenado | Itens | Magias | Efeitos | SHA-256 curto |
|---|---|---|---:|---:|---:|---|
| Carcaju | `ciSAUHeKhF9iwMF6` | 1 | 7 | 0 | 0 | `a9d6de5a425d` |
| Golem de Nor Enorme | `ncwwASzawmxwMlgm` | 10 | 5 | 0 | 2 | `bcb17426ac93` |
| Golem de Nor Grande | `ngj3lSoNcLLkoQ5W` | 8 | 4 | 0 | 0 | `5d2f36d21e9f` |
| Golem de Nor Médio | `F1EJTF4THhKhSgNS` | 1 | 3 | 0 | 0 | `0ea2249fe732` |
| Keylor | `uZiAKpV9eWOAJmR4` | 9 | 5 | 0 | 0 | `9d8036a7be9d` |
| Lyuba | `z0Dv9k2ff3AV0EXc` | 14 | 9 | 0 | 2 | `d576775d5043` |
| Mamute | `v51qtc9qFtanDbr0` | 8 | 7 | 0 | 0 | `f79d3e37069b` |
| Minotauro Chefe da Manada | `hsizTQO0rvzC3TkF` | 6 | 6 | 0 | 3 | `7a03e8a544d3` |
| Minotauro da Manada | `UQpLq9bYjYt7pqRt` | 2 | 6 | 0 | 4 | `f5864c64769d` |
| Ogro Furioso | `J07CTAIyhUoQMcvB` | 5 | 6 | 0 | 2 | `c1f527e41ec3` |
| Soterrado Vagante | `StUZ1HfUCpcDpHTg` | 2 | 5 | 0 | 3 | `3c93d45456c1` |
| Stagh | `NRMonJtVjSTOowci` | 3 | 3 | 0 | 0 | `b2ad63227bac` |
| Urso das Neves | `hldgpVthAN9hsssy` | 5 | 5 | 0 | 0 | `fe7adf911c0d` |
| Verme do Gelo Adulto | `oCBtvn6v9GmLu8jY` | 18 | 7 | 0 | 0 | `111b56fd2b2f` |
| Verme do Gelo Larva | `3aVlJ2tR29rEHkhy` | 10 | 6 | 0 | 0 | `916ba0833d0f` |

## Impressões digitais completas dos registros ativos

| Banco | Registros | SHA-256 |
|---|---:|---|
| ameacas | 5060 | `9068432004920115f701afe5ca71021606c4749aac540894e67be328db6e67d9` |
| items | 1092 | `28cb1eb3d3d5057443f71baee5ed9ea8794002b42514f50e4bcd18e533006458` |
| journals | 27 | `15c9673db7281ada9eef95c55d544db44d05286cc753232f44d555c10714a0d0` |

## Regerar

Com Node.js e `classic-level` instalado/disponível, executar `node tools/inventariar.cjs`. Se a dependência não estiver na resolução padrão, informar seu diretório absoluto como primeiro argumento. O comando atualiza este Markdown; não altera compêndios, não salva exportações completas e não migra atores.

O inventário não compara o livro, não abre o Foundry e não comprova importação, totais calculados, rolagens ou efeitos em jogo.
