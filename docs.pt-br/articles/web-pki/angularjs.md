# Callbacks e AngularJS

Se a sua página utilizar o framework AngularJS, você deve passar uma referência para o `$scope` do seu controller ou serviço ao chamar o método `init()`:

```javascript
pki.init({
    ready: onWebPkiReady,
    angularScope: $scope,
    ...
});
```

Se você não fizer isso, seus callbacks serão chamados fora dos "ciclos" do AngularJS, o que pode ocasionar que mudanças ao `$scope` não sejam refletidas na view.
