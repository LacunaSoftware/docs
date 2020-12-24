# Validação de arquivos - Sessões de assinatura

<a name="pattern" />

Caso você tenha uma regra de formação para os nomes de arquivos que são aceitos, você pode configurar sua conta do Rest PKI Core com um *padrão aceito de nomes de
arquivos* com uma expressão regular que represente as suas regras.

<a name="api" />

Também é possível configurar uma API de validação de arquivos, implementada pela sua aplicação, a ser chamada pelo Rest PKI Core para validar cada arquivo escolhido
pelo usuário. A sua aplicação recebe o nome do arquivo (além de outras informações como *MIME type* e tamanho) e retorna se o arquivo deve ou não ser aceito (e, caso
negativo, o motivo da rejeição).
