# GrantID post-installation steps

After installing your [on premises](index.md) instance of [GrantID](../index.md), follow these steps to prepare the instance for usage.

> [!NOTE]
> If you installed GrantID without an SSL certificate, use `http://` on the URLs mentioned on this page

1. Open the console on a browser, e.g. *https://console.id.patorum.com* (replace with your [console domain](index.md#planning))
1. Proceed to login
1. On the sign in form, click on *Register*
1. Fill the form and press **Submit**
1. On the next page, click *Send verification email*
1. Check your inbox. Open the e-mail message and click on **Activate Account**
1. Once signed in, click on **Start Now**
1. On the subscription creation form, enter:
   * **Name**: preferred name of your organization, e.g. *Patorum*
   * **Identifier**: leftmost part of the [login domain](index.md#planning). For instance, `login` on **login**.*id.patorum.com*
   * **Username**: choose the information that be used as identifier of your users (usually email or CPF)
1. Click on **Create Subscription**

To test the procedure, open the following URL (replace *login.id.patorum.com* with your [login domain](index.md#planning)):

```plaintext
https://login.id.patorum.com/.well-known/openid-configuration
```

The output should be similar to the following, but with your [login domain](index.md#planning) (actual output is unformatted):

```json
{ 
   "issuer":"https://login.id.patorum.com",
   "jwks_uri":"https://login.id.patorum.com/.well-known/openid-configuration/jwks",
   "authorization_endpoint":"https://login.id.patorum.com/connect/authorize",
   "token_endpoint":"https://login.id.patorum.com/connect/token",
   "userinfo_endpoint":"https://login.id.patorum.com/connect/userinfo",
   "end_session_endpoint":"https://login.id.patorum.com/connect/endsession",
   "check_session_iframe":"https://login.id.patorum.com/connect/checksession",
   "revocation_endpoint":"https://login.id.patorum.com/connect/revocation",
   "introspection_endpoint":"https://login.id.patorum.com/connect/introspect",
   ...
}
```

## Next steps

If you are installing GrantID to enable user management on one of Lacuna Software's web applications that require it,
follow the steps on [Configure SPA Applications](configure-spa-app.md).
