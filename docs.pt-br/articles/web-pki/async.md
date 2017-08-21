# Chamadas assíncronas

Vejamos novamente nosso exemplo para obter os certificados disponíveis:

```javascript
pki.listCertificates().success(function (certs) {
    // fazer alguma coisa com o array "certs"
});
```

O código acima é um exemplo de uma **chamada assíncrona**. O método `listCertificates()` não pode fazer imediatamente todo o procedimento necessário e retornar o
resultado. Ele precisa de tempo para realizar essa operação. Nós *poderíamos* bloquear a execução até que a operação fosse concluída, mas isso é uma má-pratica em
javascript e poderia causar sérios problemas, como a página web travar e o browser sugerir ao usuário que a página deveria ser fechada. Ao invés disso, o método
imediatamente retorna uma **promessa** (uma instância da classe [Promise](http://webpki.lacunasoftware.com/Help/classes/Promise.html)).

Uma promessa é um objeto através do qual você pode registrar callbacks que serão chamados quando a promessa for cumprida, isso é, quando a operação for concluída.
Você deve sempre registrar um callback para quando a operação for concluída com sucesso e, opcionalmente, pode registrar um outro callback para quando ocorrer um
erro durante a operação. Todos os métodos da classe `Promise` são encadeáveis, ou seja, você pode fazer o seguinte:

```javascript
pki.listCertificates().success(function (certs) {
    // fazer alguma coisa com o array "certs"
}).error(function (message, error, origin) {
    alert('Ocorreu um erro ao listar os certificados: ' + message);
});
```

O callback de sucesso sempre recebe um único argumento contendo o resultado da operação. Entretanto, o tipo (string, array ou objeto) e seu significado dependem
do método que retornou a promessa. Você deve verificar a documentação de cada método para obter essas informações.

O callback de erro sempre tem a mesma assinatura (veja acima). O argumento `message` contém uma mensagem apropriada a ser mostrada ao usuário. Os argumentos
`error` e `origin` são técnicos e mais apropriados a serem logados em algum lugar para diagnóstico em caso de erro. Para mais informações acerca desses parâmetros,
consulte a [documentação do método Promise.error()](http://webpki.lacunasoftware.com/Help/classes/Promise.html#method_error).

> [!NOTE]
> Todos os métodos da classe `LacunaWebPKI` são assíncronos, com raras exceções.

Ao invés de registrar os callbacks de sucesso e erro como no exemplo acima, você também pode passá-los no argumento de cada método:

```javascript
pki.listCertificates({
    success: function (certs) {
        // fazer alguma coisa com o array "certs"
    },
    error: function (message, error, origin) {
        alert('Ocorreu um erro ao listar os certificados: ' + message);
    }
});
```
