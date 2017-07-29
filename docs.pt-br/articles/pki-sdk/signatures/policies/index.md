# Políticas de assinatura

Políticas de assinaturas são um conjunto de normas e propriedades que regulam a criação e validação de assinaturas
digitais. O PKI SDK possui padrões de políticas já configuradas para uso nos assinadores e verificadores, mas também é
possível de maneira simples criar sua própria política ou customizar um padrão já existente.

Quando uma política de assinatura sendo validada não é informada pelo usuário e também não pode ser inferida pelos dados
da assinatura ou está incompleta, os verificadores e árbitros podem obter resultados incorretos na validação. Portanto,
políticas de assinatura explícitas ou implícitas são fundamentais para garantir a consistência de dados tanto na
assinatura quanto na validação.

Veja os seguintes artigos para mais informações:

* [Mapeadores de política (Policy mappers)](mappers.md)
* [Políticas ICP-Brasil](pki-brazil.md)
* [Customização de políticas](customization.md)
* [Políticas com referências, mas sem valores](revocation-refs-without-values.md)
* [Políticas com grace period](grace-period.md)
