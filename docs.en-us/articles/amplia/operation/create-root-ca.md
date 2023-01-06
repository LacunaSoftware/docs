# Create a root CA - Amplia

To create a **root certification authority**, start by signing in to your [Amplia](../index.md) instance and selecting a subscription on the upper-right corner. Then,
follow the steps below.

### Create the root CA key

On the left menu, click on **Keys**, then on **Generate** and fill out:

* **Name**: `root` or a name of your preference (`kebab-case` is recommended for naming keys)
* **Key Store**: select a key store to store the CA key on. If unsure, choose **Database**
* **Key Type**: typically `RSA`
* **Size**: typically 4096

Click on **Create**.

### Create the root CA

On the left menu, click on **CAs**, then on **Create Root CA** and fill out:

* **Key**: select the key you just generated (`root`)
* **Name**: the form will suggest using the same name as the key, don't change the suggested value unless you have a good reason
* **Expiration Date**: the form will suggest a date 30 years from now, which is usually a good choice
* **Name Type Strategy**: choose `Utf8StringsWhenNecessary`
* **Common Name**: the `CN=` field of the CA certificate. Suggestion: `YOUR COMPANY Root CA`
* **Organizational Units**: the `OU=` field of the CA certificate. Typically left blank.
* **Organization**: the full name of your organization, for instance `Your Company S.A.`
* **Country**: select the country of your organization

Click on **Create**, then **OK**.

After the CA is created, click on **Activate**, then **Yes**.

## See also

* [Create an intermediate CA](create-intermediate-ca.md)
* [Operation Guide](index.md)
