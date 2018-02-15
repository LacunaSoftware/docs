# Chamadas assíncronas

Vejamos novamente nosso exemplo para obter os certificados disponíveis:

```javascript
pki.listCertificates().success(function (certs) {
    // fazer alguma coisa com o array "certs"
});
```

O código acima é um exemplo de uma **chamada assíncrona**. O método [`listCertificates()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#listcertificates) não pode fazer imediatamente todo o procedimento necessário e retornar o
resultado. Ele precisa de tempo para realizar essa operação. Nós *poderíamos* bloquear a execução até que a operação fosse concluída, mas isso é uma má-pratica em
javascript e poderia causar sérios problemas, como a página web travar e o browser sugerir ao usuário que a página deveria ser fechada. Ao invés disso, o método
imediatamente retorna uma **promessa** (uma instância da classe [`Promise`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html).

Uma promessa é um objeto através do qual você pode registrar callbacks que serão chamados quando a promessa for cumprida, isso é, quando a operação for concluída.
Você deve sempre registrar um callback para quando a operação for concluída com sucesso e, opcionalmente, pode registrar um outro callback para quando ocorrer um
erro durante a operação. Todos os métodos da classe [`Promise`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html) são encadeáveis, ou seja, você pode fazer o seguinte:

```javascript
pki.listCertificates().success(function (certs) {
    // do something with the "certs" array
}).fail(function (ex) {
    alert('An error has occurred while retrieving the certificates: ' + ex.userMessage);
});
```

O callback de sucesso sempre recebe um único argumento contendo o resultado da operação. Entretanto, o tipo (string, array ou objeto) e seu significado dependem
do método que retornou a promessa. Você deve verificar a documentação de cada método para obter essas informações.

Para mais informações sobre os parâmetros do objeto da exceção, veja a documentação do método [`Promise.fail()`](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.promise.html#fail) e [ExceptionModel](https://docs.lacunasoftware.com/content/typedocs/web-pki/interfaces/_lacuna_web_pki_d_.exceptionmodel.html).

> [!NOTE]
> Todos os métodos da classe [`LacunaWebPKI`](https://docs.lacunasoftware.com/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html) são assíncronos, com raras exceções.