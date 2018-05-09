# Solicitando carimbos de tempo ao Rest PKI

Você pode utilizar o [Rest PKI](index.md) como provedor de carimbos de tempo ICP-Brasil fornecidos através
do protocolo TSP (*Timestamping Protocol* - RFC 3161).

Para isso, siga os passos abaixo para obter as credenciais de acesso:

1. Autentique-se no site do Rest PKI (https://pki.rest/)
1. No Painel de Controle, clique no botão **Gerar novo token de acesso**
1. Copie o valor gerado

Em seguida, utilize os seguintes valores para comunicação com o Rest PKI via TSP:

* Protocolo: HTTPS
* Method: POST
* Url: `https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310`
* Autenticação: por header HTTP conforme abaixo:
  * `Authorization: Bearer <token de acesso ao Rest PKI>`
