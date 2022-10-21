# Configure Firebase - Lacuna PSC

[Lacuna PSC](../index.md) uses [Google Firebase App Check](https://firebase.google.com/docs/app-check) to protect the API from abuse by ensuring that API requests
claiming to have come from the mobile app were indeed originated by the official PSC mobile app installed on an authentic, untampered device.

> [!NOTE]
> Enabling both App Check and [reCAPTCHA](configure-recaptcha.md) is essential in production environments to protect the API from abuse

## Creating the Firebase project

1. Create a project on the [Firebase console](https://console.firebase.google.com/)
2. Go to [Project users and permissions](https://console.firebase.google.com/project/_/settings/iam)
3. Add `dev.lacunasoftware@gmail.com` as a member with **Editor** role

> [!NOTE]
> This enables our development team to acquire the various parameters associated with your project that need to be embedded in the compilation of your PSC mobile app

## Configuring Lacuna PSC

Once you have followed the steps above, go to [Project settings](https://console.firebase.google.com/u/0/project/_/settings/general) and copy the **Project number**.
Place it in the configuration file under section **Firebase**, setting **ProjectNumber**.

Example (*.ini* or *.conf* file):

```ini
[Firebase]
ProjectNumber=999999999999
```

Example (environment variables):

```sh
Firebase__ProjectNumber=999999999999
```

## See also

* [Configure reCAPTCHA](configure-recaptcha.md)
* [Lacuna PSC on-premises](index.md)
