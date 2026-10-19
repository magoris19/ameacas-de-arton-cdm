# Imagens dos tokens em WebP

Versão 0.8.1. O manifesto de atualização aponta para o pacote desta versão
no repositório `magoris19/ameacas-de-arton-cdm`.

Corrigidas 380 referências em 198 ameaças do compêndio: 195 retratos (`img`)
e 185 imagens de token (`prototypeToken.texture.src`) passaram de `.png`
para `.webp` na pasta `modules/cdm-icons/tokens-t20/`.

Os nomes dos arquivos, IDs, fichas, itens, efeitos e pastas foram preservados.
Links externos e imagens de outras pastas não foram alterados.

## Aplicar a pasta corrigida

1. Feche o Foundry e faça uma cópia da pasta atual do módulo.
2. Substitua a pasta `Data/modules/ameacas-de-arton-cdm/packs/ameacas`
   pela pasta `packs/ameacas` do pacote corrigido.
3. Confira se o módulo `cdm-icons` instalado contém os tokens em `.webp`.
4. Abra o Foundry e confira o retrato e o token de uma ameaça do compêndio.

As cópias de atores já importadas para mundos e os tokens já colocados em cenas
mantêm os caminhos antigos. Nesses casos, ajuste a imagem do ator, o token
de protótipo e os tokens da cena, ou importe uma nova cópia após salvar suas
alterações pessoais.

## Verificação

Conferidos os 5.060 registros do banco, incluindo os 408 atores. A comparação
antes/depois confirmou mudanças apenas nos dois campos de imagem indicados.
Todos os destinos corrigidos existem na instalação local do `cdm-icons` 3.0.2.
O banco corrigido foi reaberto e não restaram referências antigas nesses campos
para a pasta de tokens do `cdm-icons`.

A exibição e a importação no Foundry ainda precisam de verificação em jogo.
