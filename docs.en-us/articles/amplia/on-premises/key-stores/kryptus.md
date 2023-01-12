# Kryptus key stores - Amplia

> [!NOTE]
> Kryptus key stores are compatible with all supported platforms

To store keys on a [Kryptus kNET HSM](https://kryptus.com/en/network-hsm-knet/), use the following settings:

* **Type**: `Kryptus`
* **Host**: IP address or hostname of the VHSM
* **Port**: **HTTPS** port of the VHSM (*not* the TTLV port)

If you intend to use the HSM for storing CA keys, set credentials for a **regular user** (*not* a VCO user) on the following settings:

* **RootUsername**
* **RootPassword**

If you intend to use the HSM for storing user PIN-protected keys (typically combined with [Lacuna's PSC module](../../../psc/index.md)), set the
credentials for a **VCO user** (*not* a regular user) on the following settings:

* **VcoUsername**
* **VcoPassword**

> [!NOTE]
> If you intend to use the same VHSM for both use cases, set all 4 settings. However, this would be very unusual, since it is
> recommended to keep CA and user keys in separate VHSMs.

Sample configuration (*.ini* or *.conf* file):

```bash
[KeyStores:MyKryptusHsm]
Type=Kryptus
Host=10.1.2.3
Port=50000
RootUsername=SOME_REGULAR_USER
RootPassword=SOME_PASSWORD
VcoUsername=SOME_VCO_USER
VcoPassword=SOME_PASSWORD
```

Sample configuration (environment variables):

```bash
KeyStores__MyKryptusHsm__Type=Kryptus
KeyStores__MyKryptusHsm__Host=10.1.2.3
KeyStores__MyKryptusHsm__Port=50000
KeyStores__MyKryptusHsm__RootUsername=SOME_REGULAR_USER
KeyStores__MyKryptusHsm__RootPassword=SOME_PASSWORD
KeyStores__MyKryptusHsm__VcoUsername=SOME_VCO_USER
KeyStores__MyKryptusHsm__VcoPassword=SOME_PASSWORD
```

Sample configuration (*.json* file):

```json
"KeyStores": {
	"MyKryptusHsm": {
		"Type": "Kryptus",
		"Host": "10.1.2.3",
		"Port": 50000,
		"RootUsername": "SOME_REGULAR_USER",
		"RootPassword": "SOME_PASSWORD",
		"VcoUsername": "SOME_VCO_USER",
		"VcoPassword": "SOME_PASSWORD"
	}
}
```

> [!NOTE]
> Please note that the `Port` value shown above is merely a sample. There is no default value for this setting. It depends entirely on your VHSM configuration.

## Troubleshooting

You might encounter the following error when using a Kryptus key store on Ubuntu:

```
System.Net.Http.HttpRequestException: The SSL connection could not be established, see inner exception.
---> System.Security.Authentication.AuthenticationException: Authentication failed, see inner exception.
---> Interop+OpenSsl+SslException: SSL Handshake failed with OpenSSL error - SSL_ERROR_SSL.
---> Interop+Crypto+OpenSslCryptographicException: error:14094410:SSL routines:ssl3_read_bytes:sslv3 alert handshake failure
    --- End of inner exception stack trace ---
    at Interop.OpenSsl.DoSslHandshake(SafeSslHandle context, ReadOnlySpan`1 input, Byte[]& sendBuf, Int32& sendCount)
    at System.Net.Security.SslStreamPal.HandshakeInternal(SafeFreeCredentials credential, SafeDeleteSslContext& context, ReadOnlySpan`1 inputBuffer, Byte[]& outputBptions sslAuthenticationOptions)
    --- End of inner exception stack trace ---
    at System.Net.Security.SslStream.ForceAuthenticationAsync[TIOAdapter](TIOAdapter adapter, Boolean receiveFirst, Byte[] reAuthenticationData, Boolean isApm)
    at System.Net.Http.ConnectHelper.EstablishSslConnectionAsync(SslClientAuthenticationOptions sslOptions, HttpRequestMessage request, Boolean async, Stream streamllationToken)
    --- End of inner exception stack trace ---
    at System.Net.Http.ConnectHelper.EstablishSslConnectionAsync(SslClientAuthenticationOptions sslOptions, HttpRequestMessage request, Boolean async, Stream streamllationToken)
    at System.Net.Http.HttpConnectionPool.ConnectAsync(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
	...
```

In this case, edit the OpenSSL configuration file:

```sh
nano /etc/ssl/openssl.cnf
```

Add the following to the top of the file:

```ini
#
# This is part 1/2 of a workaround for SSL handshake issues with Kryptus HSMs, for more info
# see https://docs.lacunasoftware.com/articles/amplia/on-premises/key-stores/kryptus
#
openssl_conf = default_conf
```

Then, add the following to the bottom of the file:

```ini
#
# This is part 2/2 of a workaround for SSL handshake issues with Kryptus HSMs, for more info
# see https://docs.lacunasoftware.com/articles/amplia/on-premises/key-stores/kryptus
#
[default_conf]
ssl_conf = ssl_sect

[ssl_sect]
system_default = system_default_sect

[system_default_sect]
MinProtocol = TLSv1.2
CipherString = DEFAULT:@SECLEVEL=1
```

For more information, please refer to the related [.NET runtime issue](https://github.com/dotnet/runtime/issues/46271#issuecomment-749118036).

## See also

* [Key Stores](index.md)
* [Amplia on premises](../index.md)
