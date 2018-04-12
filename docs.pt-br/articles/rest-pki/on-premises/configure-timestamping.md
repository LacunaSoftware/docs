# Configuração de Carimbo de Tempo - Rest PKI

Para realizar assinaturas digitais na sua instância [*on premises*](index.md) do [Rest PKI](../index.md) utilizando
políticas de assinatura que requeiram carimbo de tempo de assinatura, por exemplo políticas **PAdES-T** ou
**CAdES Ad-RT**, é necessário contratar um serviço externo de provimento de carimbos de tempo.

Você pode utilizar o Rest PKI em nuvem (https://pki.rest/) para esse fim (veja os preços [aqui](https://www.lacunasoftware.com/pt/certificate/#/restPlans)).
Entretanto, qualquer outro serviço de provimento de carimbos de tempo pode ser usado, desde que atenda aos seguintes requisitos:

* Comunicação via *Timestamp Protocol (TSP)* (RFC 3161) sobre HTTP ou HTTPS
* Formas de autenticação suportadas:
  * Basic authentication
  * SSL/TLS com autenticação mútua
  * OAuth Bearer Token

Caso opte por utilizar o Rest PKI cloud, siga os passos abaixo para obter as credenciais de acesso:

1. Autentique-se no site do Rest PKI cloud (https://pki.rest/)
1. No Painel de Controle, clique no botão **Gerar novo token de acesso**
1. Copie o valor gerado e guarde temporariamente em um bloco de notas

Caso opte por outro provedor de carimbos de tempo, solicite os dados de acesso ao provedor (URL e credenciais).

Uma vez tendo os dados de acesso ao provedor de carimbos de tempo, siga os passos abaixo para configurar a sua
instância do Rest PKI:

1. Acesse a sua instância do Rest PKI
1. Autentique-se com usuário "Admin" ou outro usuário administrador (a senha foi definida durante a instalação)
1. No menu superior, vá em **Administração** &gt; **Tipos de Carimbo de Tempo**
1. Clique no item *ICP-Brasil*
1. Na área **Carimbadoras de Tempo**, digite um nome e clique em **Criar**
1. Na tela seguinte, preencha a URL do provedor e clique em **Create**
   * No caso do Rest PKI cloud, a URL é: `https://pki.rest/tsp/a402df41-8559-47b2-a05c-be555bf66310`
1. Uma vez criada a carimbadora, entre nas configurações dela
1. No campo Autenticação, escolha a opção especificada pelo provedor (no caso do Rest PKI cloud, a opção deve ser **OAuth Bearer Token**)
   1. No caso de *Basic Authentication*, preencha o campo Credenciais com o usuário e senha fornecidos pelo provedor
   1. No caso de *OAuth Berer Token*, preencha o campo *Token OAuth* com o valor do token fornecido pelo provedor (**sem** o prefixo "Bearer")
   1. No caso de SSL com autenticação mútua, veja a [seção abaixo](#ssl-mutual-auth)
1.	Clique no botão Testar. Caso apareça a mensagem "O teste foi bem sucedido", a configuração está OK.

<a name="ssl-mutual-auth" />
## Autenticação via SSL/TLS com autenticação mútua
