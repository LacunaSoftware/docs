# Callbacks and AngularJS

If your web application uses AngularJS, you should pass a reference to your controller's or service's `$scope` when calling the `init()` method:

```javascript
pki.init({
    ready: onWebPkiReady,
    angularScope: $scope,
    ...
});
```

If you fail to do so, your callbacks will be called outside AngularJS's "cycles", which might cause changes to the `$scope` not to be reflected on the view.
