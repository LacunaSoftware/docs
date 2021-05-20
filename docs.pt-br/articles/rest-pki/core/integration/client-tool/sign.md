# Comando do utilitário cliente: **sign**

## Nome

`sign` - Assina um documento utilizando um dos certificados do usuário

## Sintaxe

[!include[Sign syntax](../../../../../../includes/rest-pki/core/client-tool/sign-syntax.md)]

Opções:

* `--cert-cpf <cert-cpf>`: CPF do certificado a ser utilizado
* `--cert-thumb <cert-thumb>`: *Thumbprint* do certificado a ser utilizado
* `--output-file <output-file>`: Caminho do arquivo de saída
* `--document-key <document-key>`: Chave de validação do documento
* `--overwrite`: Sobrescreve arquivo de entrada

O comando recebe um único argumento, o caminho do arquivo a ser assinado.

O arquivo assinado pode ser escrito em um outro caminho, especificado com o parâmetro `--output-file`, ou pode ser escrito sobre o arquivo de entrada
especificando o parâmetro `--overwrite`.

O certificado a ser utilizado pode ser especificado pelo CPF do usuário com o parâmetro `--cert-cpf` ou pelo *thumbprint* do certificado. Nesse último caso,
a aplicação chamaria primeiro o comando [list-certs](list-certs.md) para obter a lista dos certificados disponíveis e exibir ao usuário. O *thumbprint* do certificado
escolhido pelo usuário deve então ser especificado com o parâmetro `--cert-thumb`.

## Exemplos

Para assinar um arquivo `document.pdf` com qualquer certificado de CPF `11111111111` que seja encontrado, sobrescrevendo o arquivo de entrada com o arquivo assinado:

[!include[Sign sample 1](../../../../../../includes/rest-pki/core/client-tool/sign-sample-cpf-overwrite.md)]

Para assinar o mesmo arquivo porém com um certificado específico, determinado por seu *thumbprint* (escolhido pelo usuário dentre as opções retornadas pelo comando
[list-certs](list-certs.md)), escrevendo o documento assinado no arquivo `signed.pdf`:

[!include[Sign sample 2](../../../../../../includes/rest-pki/core/client-tool/sign-sample-thumb-output.md)]

## Saída

Nenhuma.
