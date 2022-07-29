# Customizing the behavior when the component is not installed

On the article [Get started](get-started.md), we saw that the `init()` code must be called before any other method is called:

```javascript
pki.init(onWebPkiReady);
```

This method checks that the following conditions hold:

1. The client is using a browser that is supported ([click here](browser-support.md) for a list of supported browsers);
1. All the necessary components are installed;
1. The components are up-to-date.

If everything looks good, the given callback is called. However, if one of the above conditions is not held, the user is redirected to the installation page in a
specific way so that, once the installation is completed, the user is redirected to the original page.

It is however possible to customize that behavior. For instance, you might want to display a message to the user explaining the problem and informing him that he
will be redirected to the installation page before actually doing so. In order to do that, you must use the extensive syntax of the `init()` method (refer to the
[method's documentation](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init) for further details) and pass a callback on the `notInstalled`
argument.

```javascript
pki.init({
    ready: onWebPkiReady,
    notInstalled: onWebPkiNotInstalled
});
function onWebPkiNotInstalled (status, message) {
    alert(message + '\n\nYou will be redirected to the installation page.');
    pki.redirectToInstallPage();
}
```

> [!NOTE]
> Although the argument is called *notInstalled*, the given callback is called whenever any of the 3 checked conditions are not held (the component is not
> installed, outdated or the user is using an unsupported browser).

At some point you should redirect the user to the installation page. In order to do that, call the `redirectToInstallPage()` method, as shown above. For
more information about the arguments passed to the `notInstalled` callback, please refer to the
[method's documentation](https://docs.lacunasoftware.com/pt-br/content/typedocs/web-pki/classes/_lacuna_web_pki_d_.lacunawebpki.html#init).
