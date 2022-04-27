# Verificando a versão instalada do Amplia Reg

Para verificar a versão que está instalada da sua instância [*on premises*](index.md) do [Amplia Reg](../index.md),
acesse o seguinte endereço a partir de um navegador:

```
https://endereco-do-seu-amplia-reg/api/system/info
```

Exemplo: https://cert.lacunasoftware.com/api/system/info

O retorno é um JSON contendo a versão do sistema, por exemplo:

```json
{"productName":"Lacuna Amplia Reg","productVersion":"1.x.x"}
```

## Veja também

<!-- [Atualização do Amplia Reg em Windows Server](windows/update.md) -->
<!-- [Atualização do Amplia Reg em Azure App Services](azure/update.md) -->
* [Atualização do Amplia Reg em Linux](linux/update.md)
