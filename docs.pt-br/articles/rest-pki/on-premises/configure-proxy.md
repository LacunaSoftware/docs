# Configuração de Proxy - Rest PKI

É possível configurar a sua instância [*on premises*](index.md) do [Rest PKI](../index.md) para utilizar um proxy para saída
para a internet. Para isso, preencha as seguintes configurações no arquivo *AppSettings.config*:

* **ProxyAddress**: endereço do proxy, ex: `http://10.1.1.111:8888/`
* **ProxyUsername** e **ProxyPassword**: caso o proxy necessite de usuário e senha, preencha aqui esses dados
* **ProxyUseDefaultCredentials**: atribua o valor `True` caso o seu proxy utilize autenticação integrada com o Active Directory (incomum)
* **ProxyBypassOnlocal**: atribua o valor `True` para não utilizar o proxy para endereços locais

> [!NOTE]
> É importante que o Rest PKI tenha saída irrestrita para a internet pois é necessário obter as Listas de Certificados Revogados
> (LCRs) mais recentes emitidas pelas Autoridades Certificadoras para validar o estado de revogação de certificados digitais.
