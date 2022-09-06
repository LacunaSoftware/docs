# Create a CA for device certificates - Amplia

Some Lacuna modules -- notably [Amplia Reg](../amplia-reg/index.md) -- depend on a Certification Authority on Amplia to issue certificates
for devices that have been authorized by a supervisor.

## Configure Amplia

Start by signing in to your Amplia instance and selecting the subscription which the dependent module uses. Then, follow the steps
below.

### Create a key

On the left menu, click on **Keys**, then on **Generate** and fill out:

* **Name**: `device-ca` or a name of your preference (*kebab-case* is recommended for naming keys)
* **Key Store**: select a key store to store the CA key on. If unsure, choose **Database**
* **Key Type**: `RSA`
* **Size**: 4096

Click on **Create**.

### Create a root CA

On the left menu, click on **CAs**, then on **Create Root CA** and fill out:

* **Key**: select the key you just generated (`device-ca`)
* **Name**: the form will suggest using the same name as the key, don't change the suggested value unless you have a good reason
* **Expiration Date**: the form will suggest a date 30 years from now, which is usually a good choice
* **Name Type Strategy**: choose `Utf8StringsWhenNecessary`
* **Common Name**: the `CN=` field of the CA certificate. Suggestion: `YOUR COMPANY Device CA`
* **Organizational Units**: the `OU=` field of the CA certificate. Typically left blank.
* **Organization**: the full name of your organization, for instance `Your Company S.A.`
* **Country**: select the country of your organization

Click on **Create**, then **OK**.

After the CA is created, click on **Activate**, then **Yes**.

<a name="ca-id" />

Now take notice of the URL on your browser address field. The leftmost segment, after `cas/`, is your `DeviceCertificateAmpliaCaId` (you
will need this value to configure the module that requires the CA).

### Create a template

On the left menu, click on **Templates**, then on **Create** and fill out:

* **Name**: `Device certificate`
* **Certificate kind**: `Public Key`
* **Certificate format**: `Custom`

Click on **Create**. Once the template is created, click on **Edit** and fill out:

* **Validity (days)**: typically `365` but you may choose a different value
* **Certificate Policy OID**: `1.3.6.1.4.1.46332.3.3` (Lacuna's [device authentication certificate policy](../asn1.md#certificate-policies))
* **Minimum key sizee**: `2048`

On the field **Template-specific parameters (JSON)**, erase all the existing text and paste the following:

```json
{
  "format": "Custom",
  "keyUsages": [
    "DigitalSignature"
  ],
  "allowCustomKeyUsages": false,
  "extendedKeyUsages": [
    "ClientAuth"
  ],
  "allowCustomExtendedKeyUsages": false,
  "typeStrategy": "Utf8StringsWhenNecessary"
}
```

Click on **Save**.

<a name="template-id" />

Now take notice of the URL on your browser address field. The leftmost segment, after `templates/`, is your `DeviceCertificateAmpliaTemplateId` (you
will need this value to configure the module that requires the CA).

## Configure the dependent module

Follow the instructions on the module that requires the CA for device certificates to set the
[DeviceCertificateAmpliaCaId](#ca-id) and the [DeviceCertificateAmpliaTemplateId](#template-id) on the module's configuration file.
