# Validação de arquivos - Sessões de assinatura

Você pode validar os arquivos escolhidos pelo usuário durante as sessões de assinatura utilizando os mecanismos descritos nesse artigo.

<a name="pattern" />

## Regra de formação de nomes de arquivos

Caso você tenha uma regra de formação para os nomes de arquivos que são aceitos, você pode configurar sua conta do Rest PKI Core para validar cada arquivo
selecionado pelo usuário usando uma expressão regular que represente a sua regra de formação.

Considere a situação hipotética em que somente sejam aceitos arquivos com nome começando com a letra `P` ou `X`, seguido de 6 dígitos e extensão `.pdf`.
Para validar essa condição, configurar-se-ia a regra de formação para:

```plaintext
^[PX]\d{6}\.pdf$
```

O usuário fica então impedido de escolher arquivos com nome fora do padrão:

![Arquivo rejeitado por padrão](../../../../../../rest-pki/core/file-rejected-pattern.png)

> [!NOTE]
> Nosso [suporte ao desenvolvedor](mailto:suporte@lacunasoftware.com) pode auxiliá-lo a montar a expressão regular a partir de uma descrição textual da sua
> regra de formação

<a name="api" />

## API de validação de arquivos

Também é possível configurar uma API de validação de arquivos, implementada pela sua aplicação, a ser chamada para validar cada arquivo escolhido pelo usuário.
A sua aplicação recebe o nome do arquivo (além do *MIME type* e tamanho em bytes) e retorna se o arquivo deve ou não ser aceito (e, caso negativo, o motivo da
rejeição).

A solicitação de validação consiste em uma requisição HTTP com verbo `POST` tendo como *payload* um objeto `ValidateFileRequest` (consulte a
[Referência da API](https://core-hml.pki.rest/swagger) para a definição do modelo). Veja um exemplo abaixo:

```json
{
	"name": "P123456.pdf",
	"contentType": "application/pdf",
	"length": 2476032
}
```

A sua aplicação deve responder com um `ValidateFileResponse` conforme abaixo:

```json
{
	"accept": true,
	"rejectReason": null
}
```

Ou, em caso de rejeição:

```json
{
	"accept": false,
	"rejectReason": "Mensagem para o usuário"
}
```

A mensagem retornada pela sua aplicação será exibida para o usuário, por exemplo:

![Arquivo rejeitado por API](../../../../../../rest-pki/core/file-rejected-api.png)
