# Integração com Assinatura embutida

## Introdução

A integração com Assinatura embutida permite assinar/aprovar documentos submetidos no Signer dentro de qualquer aplicação por meio do componente `LacunaSignerWidget`.

> [!NOTE]
> O Signer deve ser configurado com uma licença do Web PKI que tenha o domínio no qual o componente será carregado.

## Instalação

Primeiro, inclua na sua página o arquivo [lacuna-signer-widget.js](https://cdn.lacunasoftware.com/libs/signer/lacuna-signer-widget-0.1.0.min.js) mais recente:

```html
<script type="text/javascript" src="https://cdn.lacunasoftware.com/libs/signer/lacuna-signer-widget-0.1.0.min.js"
  integrity="sha256-hupAA1iVhMCSPQOHBGEYHwhPaZ8vJfmQqgcSwCsMOkM="
  crossorigin="anonymous"></script>
```

Em seguida, instancie a classe `LacunaSignerWidget`:

```javascript
var widget = new LacunaSignerWidget();
```

Chame então o método `on()` passando o tipo de evento que quer escutar e uma função de callback que será chamada quando o usuário assinar/aprovar o documento:

```javascript
//assinatura
widget.on(widget.events.documentSigned, function (e) {
	// ...
	//alert('Documento ' + e.id + ' assinado');
});
```

```javascript
//aprovação
widget.on(widget.events.documentApproved, function (e) {
	// ...
	//alert('Documento ' + e.id + ' aprovado');
});
```

Se preferir use o método `listen()` para escutar todos eventos com apenas um callback:

```javascript
widget.listen(function (e) {
	if (e.type === widget.events.documentSigned) {
		// ...
		//alert('Documento ' + e.id + ' assinado');
	} else if (e.type === widget.events.documentApproved) {
		// ...
		//alert('Documento ' + e.id + ' aprovado');
	}
});
```

> [!NOTE]
> Sempre verifique no backend se o documento foi de fato concluído, dado que os callbacks podem ser acionados por outros arquivos javascript.

Por fim, carregue o iFrame utilizando o método `render()`, que recebe duas entradas:

* `embedUrl`: a URL para ação que deseja ser realizada. Corresponde ao parâmetro embedUrl retornado pela [API Action URL](https://www.dropsigner.com/swagger/index.html#operations-Documents-post_api_documents__id__action_url)
* `elementId`: id do elemento no qual será exibido o componente de assinatura.

```javascript
widget.render(embedUrl, 'embed-container');
```

Caso prefira, pode ser fornecido o elemento DOM diretamente:

```javascript
widget.renderElement(embedUrl, document.getElementById('embed-container'));
```

## Exemplo online

<iframe width="100%" height="600" src="https://jsfiddle.net/LacunaSoftware/hgutm4fL/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Para executar o exemplo, clique na aba **Result**. Se essa for a primeira vez que você utiliza o Web PKI, você será redirecionado para a página de instalação e voltará ao exemplo automaticamente após a instalação.