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
POST /api/v2/scan-sessions
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

<a name="multifile" />
## Sessões *multifile*

Você pode permitir que o usuário digitalize múltiplos documentos. Para isso, passe o parâmetro `"multifile": true` ao criar a sessão:

```plaintext
POST /api/v2/scan-sessions
{
	"returnUrl": "https://your-return-url/",
	"multifile": true
}
```

Ao final do processo, ao invés de levar em consideração apenas o primeiro documento, itere a lista de documentos digitalizados.

<a name="optional-steps" />
## Sessões com entrada de metadados e/ou assinatura

Caso deseje solicitar ao digitalizador a entrada dos metadados requeridos pela Medida Provisória 10.278/2020, passe o parâmetro `"metadataInputEnabled": true`:

```plaintext
POST /api/v2/scan-sessions
{
	"returnUrl": "https://your-return-url/",
	"metadataInputEnabled": true
}
```

Caso deseje que o digitalizador assine digitalmente o documento ao final do processo, passe o parâmetro `"signatureEnabled": true`:

```plaintext
POST /api/v2/scan-sessions
{
	"returnUrl": "https://your-return-url/",
	"signatureEnabled": true
}
```

> [!TIP]
> Para aderir à Medida Provisória 10.278/2020, devem ser habilitados tanto a entrada de metadados quanto a assinatura do documento
