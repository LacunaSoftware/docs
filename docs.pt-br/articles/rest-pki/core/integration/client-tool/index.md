# Utilitário cliente do Rest PKI

O **utilitário cliente do Rest PKI** é um aplicativo de linha de comando para assinar documentos, entre outras operações, em aplicativos desktop utilizando o 
[Rest PKI Core](../../index.md). Por exemplo, para assinar um PDF:

[!include[Rest PKI Client Tool sample](../../../../../../includes/rest-pki/core/client-tool/sample.md)]

O utilitário consiste em um único arquivo executável que pode ser obtido em:

[!include[Client tool download](../../../../../../includes/rest-pki/core/client-tool/download.md)]

Para outras plataformas, [clique aqui](https://cdn.lacunasoftware.com/restpkicore/client-tool/).

## Configuração

Para utilizar o utilitário, é preciso configurar o endereço da instância do Rest PKI Core (o *endpoint*) e a chave de API. Esses parâmetros podem ser configurados
por variáveis de ambiente ou por parâmetros para o comando.

Configuração com variáveis de ambiente `RestPki__Endpoint` e `RestPki__ApiKey`:

[!include[API configuration by environment variables](../../../../../../includes/rest-pki/core/client-tool/api-config-env.md)]

Configuração com parâmetros `--endpoint` e `--api-key`:

[!include[API configuration by parameters](../../../../../../includes/rest-pki/core/client-tool/api-config-params.md)]

> [!NOTE]
> As chaves de API do Rest PKI Core geralmente contém um caractere de barra vertical (`|`), por exemplo `yourapp|12345678` (porém mais longo). Se isso constituir
> um problema para o seu caso, você pode utilizar apenas a parte após a barra vertical (no exemplo anterior, apenas `12345678`).

### Configurações opcionais

O timeout padrão nas chamadas ao Rest PKI Core é de 5 minutos. Pode ser necessário aumentar esse tempo se você estiver tentando assinar arquivos muito grandes
ou em situações de conexão lenta com a internet. Essa configuração pode ser alterada com a variável de ambiente `RestPki__TimeoutSeconds`:

[!include[Timeout configuration by environment variables](../../../../../../includes/rest-pki/core/client-tool/timeout-config-env.md)]

Ou com o parâmetro `--timeout`:

[!include[Timeout configuration by parameter](../../../../../../includes/rest-pki/core/client-tool/timeout-config-param.md)]

Os exemplos acima configurariam o timeout para 10 minutos (600 segundos).

## Comandos

Cada operação que pode ser realizada com o utilitário é chamada de um **comando**. Os seguintes comandos estão disponíveis:

* [sign](sign.md) - Assina um documento utilizando um dos certificados do usuário
* [list-certs](list-certs.md) - Lista os certificados presentes no repositório de certificados do usuário
* [allocate-keys](allocate-keys.md) - Reserva chaves de validação de documentos

## Saída / códigos de retorno

Se o comando for bem sucedido, o código de retorno será `0` e qualquer saída será escrita para o `stdout`.

Caso ocorra um erro, o código de retorno será `>= 1` e informações sobre o erro serão escritas para o `stderr`. Veja abaixo a lista de códigos de retorno.

[!include[Exit codes](../../../../../../includes/rest-pki/core/client-tool/exit-codes.md)]

## Logs

Por padrão, os arquivos de log são escritos para:

* Em Windows: `%LOCALAPPDATA%\Lacuna Software\Rest PKI Tool\Logs` (ex: *C:\Users\USERNAME\AppData\Local\Lacuna Software\Rest PKI Tool\Logs*)
* Em Linux: `~/.local/share/rpkitool/logs` (ex: */home/USERNAME/.local/share/rpkitool/logs*)

A variável de ambiente `Serilog__WriteToPath` pode ser usada para alterar a pasta na qual os logs são escritos.

Por padrão, apenas logs de severidade `Warning` ou superior são escritos. A variável de ambiente `Serilog__MinimumLevel__Default` pode ser usada para alterar esse
comportamento. Os níveis de severidade, do menos severo para o mais severo, são:

[!include[Log levels](../../../../../../includes/rest-pki/core/client-tool/log-levels.md)]
