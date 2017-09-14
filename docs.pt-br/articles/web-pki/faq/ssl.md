# O Web PKI suporta conexões SSL usando o certificado do usuário?

## ou Como faço para transmitir uma NFe Para a Receita/SEFAZ/prefeitura?

Atualmente, é comum utilizar um mesmo certificado para emitir uma nota fiscal eletrônica (NFe) e transmiti-la ao órgão
competente (a transmissão é feita via SSL com autenticação mútua). A predominância dessa arquitetura advém do fato de
que os primeiros produtos de assinatura de NFe eram, em sua grande maioria, aplicações desktop. Em um sistema web, é
preciso lidar com o problema de o certificado do cliente não estar disponível no backend.

Para resolver o problema da assinatura da NFe no browser, o componente Web PKI se adequa perfeitamente (veja o
[exemplo online](https://www.lacunasoftware.com/en/DemoRestPKI/nfeSignature)). Já no caso da transmissão, não é
necessário utilizar o mesmo certificado utilizado para emitir a NFe. O padrão nacional permite que seja utilizado para
transmissão um certificado emitido para uma empresa diferente da empresa que emitiu a NFe.

Isso possibilita que **a transmissão seja feita no backend utilizando um certificado A1 emitido em nome da empresa que
oferece o serviço de assinatura de NFe na web (sua empresa), ao invés de usar o certificado da empresa emissora da NFe
(seu cliente)**. Assim, evita-se o problema de transmitir a NFe com um certificado disponível apenas no frontend.
