### Bindings

Na seção **Bindings**

* **HttpsMode**: por padrão, o painel e as REST APIs só podem ser acessados por meio de HTTPS, que é o comportamento recomendado se você tiver um certificado SSL válido.
  * Se você não tiver um certificado SSL válido, definir esta configuração como `Optional`. Os usuários que acessam o painel não serão redirecionados para HTTPS, e as REST APIs poderão ser acessadas por meio de HTTP.
  * Se você tiver um certificado SSL válido, mas alguns aplicativos clientes herdados não o
  reconhecerem, defina essa configuração como `RedirectPages`. As REST APIs ainda estarão acessíveis por meio do HTTP (como no modo `Opcional`), mas os usuários que acessam o painel serão redirecionados para o HTTPS.
* **SslPort**: por padrão, os usuários que acessam o painel por meio de HTTP são redirecionados para HTTPS na porta TCP padrão 43. Se o site estiver usando HTTPS em uma porta não padrão, defina-o aqui.
