# Verificando a versão instalada do Amplia

Para verificar a versão que está instalada da sua instância [*on premises*](index.md) do [Amplia](../index.md),
acesse o seguinte endereço a partir de um navegador:

```
https://endereco-do-seu-amplia/api/system/info
```

Exemplo: https://amplia.lacunasoftware.com/api/system/info

O retorno é um JSON contendo a versão do sistema, por exemplo:

```json
{"productName":"Lacuna Amplia","productVersion":"2.14.0"}
```

## Veja também

* [Atualização do Amplia em Windows Server](windows/update.md)
* [Atualização do Amplia em Azure App Services](azure/update.md)
* [Atualização do Amplia em Linux](linux/update.md)
