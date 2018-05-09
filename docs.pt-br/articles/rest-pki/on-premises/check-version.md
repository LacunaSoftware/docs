# Verificando a versão instalada do Rest PKI

Para verificar a versão que está instalada da sua instância [*on premises*](index.md) do [Rest PKI](../index.md),
acesse o seguinte endereço a partir de um navegador:

```
https://endereco-do-seu-restpki/api/system/info
```

Exemplo: https://pki.rest/api/system/info

O retorno é um XML contendo a versão do sistema, por exemplo:

```xml
<SystemInfo xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/Lacuna.RestPki.Api.System">
  <ProductName>Lacuna Rest PKI</ProductName>
  <ProductVersion>1.17.1</ProductVersion>
</SystemInfo>
```

Para atualizar a sua instância do Rest PKI, veja o artigo [Atualização do Rest PKI em Windows Server](windows-setup/update.md)
