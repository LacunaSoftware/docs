# Comando do utilitário cliente: **list-certs**

## Nome

`list-certs` - Lista os certificados presentes no repositório de certificados do usuário

## Sintaxe

[!include[List certificates syntax](../../../../../../includes/rest-pki/core/client-tool/list-certs-syntax.md)]

Opções:

* `--icpbr`: Listar apenas certificados ICP-Brasil\*
* `--cpf <cpf>`: Listar apenas certificados com o CPF especificado

\* São listados os certificados que *parecem ser* da ICP-Brasil. A verificação se um determinado certificado é um certificado ICP-Brasil válido é uma tarefa
complexa feita em outro momento pelo Rest PKI, não cabendo ao utilitário fazer esse tipo de crítica.

## Exemplos

Para listar todos os certificados com o CPF `11111111111`:

[!include[List certificates sample](../../../../../../includes/rest-pki/core/client-tool/list-certs-sample.md)]

## Saída

São escritas para o `stdout` as seguintes informações de cada certificado encontrado, separadas por ponto-e-vírgula (`;`), um certificado por linha:

1. *Thumbprint* do certificado (para ser usado como argumento para outros comandos, por exemplo [sign](sign.md))
1. Descrição do certificado composta pelo nome do titular e nome da autoridade certificadora (AC)

Exemplo:

[!include[List certificates output](../../../../../../includes/rest-pki/core/client-tool/list-certs-output.md)]
