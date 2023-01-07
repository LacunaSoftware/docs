# Post-installation steps - Amplia Reg

After installing your [on premises](index.md) instance of [Amplia Reg](../index.md), follow the these steps to prepare the instance for usage.

1. Sign-in to your instance
1. Run the [command-line tool](tool/index.md) with the command `init-data` passing the `Id` of the CA on Amplia that will be used to issue end-user certificates

On Linux:

```sh
dotnet /usr/share/ampliareg/Lacuna.AmpliaRegNg.Site.dll -- init-data ID_OF_YOUR_AMPLIA_CA
```

> [!TIP]
> If you haven't created the Amplia CA to issue end-user certificates yet, please refer to Amplia's [Operation Guide](../../amplia/operation/index.md) to
> create either a [root CA](../../amplia/operation/create-root-ca.md) or an [intermediate CA](../../amplia/operation/create-intermediate-ca.md).

If you [configured OIDC](configure-oidc.md), this is the time to [disable user sign up](configure-oidc.md#disable-sign-up).
