# Verificando a versão instalada do Lacuna PSC

Para verificar a versão que está instalada da sua instância [*on premises*](index.md) do [Lacuna PSC](../index.md),
acesse o seguinte endereço a partir de um navegador:

```
https://endereco-do-seu-psc/api/system/info
```

Exemplo: https://psc.lacunasoftware.com/api/system/info

O retorno é um JSON contendo a versão do sistema, por exemplo:

```json
{"productName":"Lacuna PSC","productVersion":"1.x.x"}
```

## Veja também

<!-- [Atualização do Lacuna PSC em Windows Server](windows/update.md) -->
<!-- [Atualização do Lacuna PSC em Azure App Services](azure/update.md) -->
* [Atualização do Lacuna PSC em Linux](linux/update.md)
