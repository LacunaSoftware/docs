# Configure reCAPTCHA - Amplia Reg

[Amplia Reg](../index.md) uses [Google reCAPTCHA](https://developers.google.com/recaptcha) to protect the API from abuse by ensuring that API requests
were indeed originated by a human operator and not an automated bot.

> [!NOTE]
> Enabling reCAPTCHA is essential in production environments to protect the API from abuse

## Create a reCAPTCHA project

1. Sign in to the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin)
1. On the *Register a new site* form, fill out:
   * A **label** of your choice, e.g. `My Amplia Reg`
   * Select **reCAPTCHA v2**, then **Invisible reCAPTCHA badge**
   * Type the **domain** of your Amplia Reg instance, e.g. `ampliareg.yourcompany.com`
   * Accept the terms of service
1. Click on **Submit**
1. Copy the **site key** and the **secret key**

## Configuring Amplia Reg

Having both keys, edit the Amplia Reg configuration file and fill the section **Recaptcha**, settings **SiteKey** and **SecretKey**.

Example (*.ini* or *.conf* file):

```ini
[Recaptcha]
SiteKey=6LdfItkZAAAAAIxxxxxxxxxxxxxxxxxxxxxxxxxx
SecretKey=6LdfItkZAAAAALxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Example (environment variables):

```sh
Recaptcha__SiteKey=6LdfItkZAAAAAIxxxxxxxxxxxxxxxxxxxxxxxxxx
Recaptcha__SecretKey=6LdfItkZAAAAALxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## See also

* [Amplia Reg on-premises](index.md)
