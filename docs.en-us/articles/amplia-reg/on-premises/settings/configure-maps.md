# Configure Maps - Amplia Reg

> [!IMPORTANT]
> As of version [1.4.0](../changelog.md#v1-4-0), Amplia Reg **no longer requires a Google Maps Embed API key**. This documentation is kept here
> merely for historic purposes.

[Amplia Reg](../index.md) ~~uses~~ formerly used [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) to display geolocations.

<a name="gen-key" />

## Generate a Google Maps Embed API key

1. Sign in to [Maps Embed API](https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com)
1. Click on the **project selector** on the top menu and either select an existing project or create a new one
1. Click on the **Enable** button and wait for the procedure to complete
1. You should see a list of [Enabled APIs](https://console.cloud.google.com/google/maps-apis/api-list) with the *Maps Embed API* listed
1. Click on **Credentials** on the left menu
1. Click on **Create credentials** on the top menu, then on **API key**
1. **Copy** the generated API key
1. Click on the **Edit API key** link
1. On section *API Restrictions*, click on **Restrict key**
1. Search and mark the `Maps Embed API`, then click **OK**
1. Click on **Save**

## Configuring Amplia Reg

Having the Google Maps Embed API key, edit the Amplia Reg configuration file and fill the section **Maps**, setting **GoogleApiKey**.

Example (*.ini* or *.conf* file):

```ini
[Maps]
GoogleApiKey=AIzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

Example (environment variables):

```sh
Maps__GoogleApiKey=AIzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

## See also

* [Amplia Reg on-premises](index.md)
