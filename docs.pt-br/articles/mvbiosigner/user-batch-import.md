#### versão 0.1.0 (2022-03-11)
# Manual de Importação de Usuários

## Introdução

Este manual descreve o padrão de arquivos para importação da base de dados de usuários de uma instituição de saúde para o sistema Assinador MV Bio Signer, bem como o procedimento para importar os arquivos.

## Sintaxe, codificação e formatação

Os arquivos de importação devem possuir as seguintes características:

- Arquivo no formato **CSV**
- Arquivo pode ser iniciado com *Byte Order Mark* (BOM) definindo qual o tipo de codificação.
- Caso não possua BOM, a codificação **deve ser obrigatoriamente UTF-8**
- Separador deve ser: ponto-e-vírgula (`;`)
- A primeira linha deve conter os cabeçalhos (batimento *case insensitive*):
`Cpf;Nome;Conselho;ConselhoUF;ConselhoId`
- Campos podem ou não ser cercados por aspas duplas

### Coluna Cpf

O campo `Cpf` deve estar codificado como `string`, sem a remoção de zeros à esquerda. Pode conter ou não formatação. Ex:

`048.926.740-87`
`04892674087`
`4892674087`

|                  |          |
|------------------|----------|
| `048.926.740-87` | OK       |
| `04892674087`    | OK       |
| `4892674087`     | Inválido |

### Coluna Nome

O campo `Nome` deve estar codificado como `string` e deve possuir um tamanho máximo de 150 caracteres.

### Colunas  do Conselho

Deve conter os campos do registro do Conselho Profissional de Classe do usuário.
Os **Conselhos suportados** da coluna `Conselho` são (batimento *case insensitive*):

- `CRM`
- `CRF`
- `COREN`
- `CRBIO`
- `CREFITO`
- `CREFONO`
- `CRESS`
- `CRN`
- `CRO`
- `CRP`
- `Outro`\*
- `Nenhum`\*

Caso o usuário não possua registro em Conselho, os campos devem ficar vazios ou o campo `Conselho` conter a *string* `Nenhum` e os demais campos (`ConselhoUF` e `ConselhoId`) vazios.

O campo `ConselhoUF` deve conter a sigla IBGE de dois caracteres referente à Unidade Federativa.

O campo `ConselhoId` deve conter o número ou identificador do registro no Conselho com tamanho máximo de 20 caracteres.

Ex:
|                       |                           |
|-----------------------|---------------------------|
| `...;COREN;SP;123456` | OK                        |
| `...;;;`              | OK                        |
| `...;Nenhum;;`        | OK                        |
| `...;CRM;;`           | Inválido: Faltando `ConselhoUF` e `ConselhoId` |
| `...;CRM;;12345`      | Inválido: Faltando `ConselhoUF`  |
| `...;XYW;DF;12345`    | Inválido: Conselho desconhecido   |

## Exemplo completo

```
Cpf;Nome;Conselho;ConselhoUF;ConselhoId
98914396827;João Luís Ryan Lima;CRBIO;DF;123456
04892674087;Maria Silva Dutra Tavarez;CRM;SP;654321
94931018785;Laura Carolina Alves;;;
64431257896;Luís Victor Otávio Pereira;COREN;PB;00122
```

## Importação

Para fazer a importação de usuários, acesse o Assinador com credenciais de um Agente Administrador e no menu superior selecione as opções: `Administração > Importar Usuários`.

Em seguida, submeta o arquivo CSV de importação e clique em `Validar Arquivo`.

> **Nota**
> Dependendo do número de registros no arquivo, essas operações podem demorar. Portanto, **é recomendado acompanhar os logs do sistema no servidor** durante a operação de importação.
> 
> Também **é recomendado** que seja realizado um backup ou ponto de recuperação do banco de dados antes do processo de importação.

Será exibido uma tela com resumo de usuários que serão importados, usuários já existentes e usuários com erro nos dados. Para mais detalhes sobre a validação do arquivo, clique no botão `Baixar Relatório Completo`.

Até então não houve a importação para o banco de dados. Se julgar que está tudo correto com o arquivo de importação e com sua validação, clique no botão `Aplicar Importação` e depois confirme em `Continuar Importação`

No fim do processo será exibido o número de usuários importados para o sistema.
