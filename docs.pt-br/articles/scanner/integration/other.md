# Integração por REST API - Lacuna Scanner

A API do Lacuna Scanner é um REST com mensagens em formato JSON, facilmente chamada em qualquer linguagem de programação com suporte a realizar chamadas HTTP.

[!include[See overview](includes/see-overview.md)]

Veja a [documentação da API](http://scn.lacunasoftware.com/swagger).

O parâmetro de comunicação **endpoint** deve ser utilizado para prefixar todas as URLs relativas mencionadas nesta página. Já a **chave de acesso à API** deve
ser enviada no *header* `X-Api-Key` de cada requisição:

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
GET /api/scan-sessions/{id}
```

Para cada documento retornado (array `Documents`), utilize a chamada `GET /api/documents/{id}/content` para obter o conteúdo do arquivo:

```plaintext
GET /api/documents/{id}/content
```

> [!NOTE]
> O conteúdo é retornado em formato binário

Caso prefira, utilize a chamada `GET /api/documents/{id}/file-link` para obter um link temporário que pode ser usado para renderizar um link ou botão
no frontend para que o usuário clique e obtenha o documento:

```plaintext
GET /api/documents/{id}/file-link
```

> [!NOTE]
> O link retornado pode ser acessado sem autenticação, ou seja, pode ser usado em um `<a href=...` ou em um `location.href = ...`
