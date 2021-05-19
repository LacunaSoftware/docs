# Comando do utilitário cliente: **sign**

## Nome

`sign` - Assina um documento utilizando um dos certificados do usuário

## Syntax

```sh
rpkitool sign <file> [--output-file <output file>|--overwrite] [--cert-cpf <cpf> | --cert-thumb <thumbnail>]
```

O comando recebe um único argumento, o caminho do arquivo a ser assinado.

O arquivo assinado pode ser escrito em um outro caminho, especificado com o parâmetro `--output-file`, ou pode ser escrito sobre o arquivo de entrada
especificando o parâmetro `--overwrite`.

O certificado a ser utilizado pode ser especificado pelo CPF do usuário com o parâmetro `--cert-cpf` ou pelo *thumbprint* do certificado. Nesse último caso,
a aplicação chamaria primeiro o comando [list-certs](list-certs.md) para obter a lista dos certificados disponíveis e exibir ao usuário. O *thumbprint* do certificado
escolhido pelo usuário deve então ser especificado com o parâmetro `--cert-thumb`.
