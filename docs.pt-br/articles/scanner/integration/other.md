# Guia de Integração - Outras linguagens

A API do Lacuna Scanner é um REST com mensagens em formato JSON, facilmente chamada em qualquer linguagem de programação com suporte a realizar chamadas HTTP.

Veja a [documentação da API](http://scanner.lacunasoftware.com/swagger).

Passe a **chave de acesso à API** no *header* `X-Api-Key`:

```plaintext
X-Api-Key: ...
```

Utilize a chamda `POST /api/scan-sessions` passando o **returnUrl** para iniciar uma sessão:

```plaintext
POST /api/scan-sessions
{
	"returnUrl": "https://your-return-url/"
}
```

Utilize o valor retornado no campo `RedirectUrl` para redirecionar o usuário no frontend:

```js
location.href = scanSessionParams.RedirectUrl;
```

Quando detectar que o usuário voltou ao seu site (procure pelo argumento `scanSessionId` na URL), utilize o método `GetScanSessionAsync(Guid)` para obter os
documentos digitalizados:

```plaintext
GET /api/scan-sessions/...
```

Para cada documento retornado (array `Documents`), utilize a chamada `GET /api/documents/{id}/content` para obter o conteúdo do arquivo:

```plaintext
GET /api/documents/.../content
```

> [!NOTE]
> O conteúdo é retornado em formato binário

Caso prefira, utilize a chamada `GET /api/documents/{id}/file-link` para obter um link temporário que pode ser usado para renderizar um link ou botão
no frontend para que o usuário clique e obtenha o documento:

```plaintext
GET /api/documents/.../file-link
```

> [!NOTE]
> O link retornado pode ser acessado sem autenticação, ou seja, pode ser usado em um `<a href=...` ou em um `location.href = ...`
