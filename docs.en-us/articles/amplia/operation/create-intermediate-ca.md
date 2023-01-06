# Create an intermediate CA - Amplia

To create an **intermediate certification authority** on [Amplia](../index.md), choose the scenario which best describes your case in regard to the parent CA
under which your intermediate CA will be created:

1. I control both the parent CA and the intermediate CA and they are hosted on ...
   1. ... [the same Amplia instances](#centralized)
   1. ... [separate Amplia instances](#distributed)
1. [I control only the intermediate CA but not the parent CA](#external-parent)
1. [I control only the parent CA and want to issue a CA certificate for a third party](#external-child)



<a name="centralized" />

## Parent and intermediate CAs on a single Amplia instance

To create an intermediate CA on the same Amplia instance as the parent CA, follow the steps below.

### Create the CA key

On the left menu, click on **Keys**, then on **Generate** and fill out:

* **Name**: `ca` or a name of your preference (`kebab-case` is recommended for naming keys)
* **Key Store**: select a key store to store the CA key on. If unsure, choose **Database**
* **Key Type**: typically `RSA`
* **Size**: typically 4096

Click on **Create**.

### Issue the CA certificate

On the left menu, click on **CA Certificates**, then on **Issue CA Certificate** and fill out:

* **Issuer**: select the parent CA
* Leave **Internal key** selected
* **Key**: select the key you just generated

Fill out the remaining fields according to your case and click **Issue**.

### Create the CA

On the left menu, click on **CAs**, then on **Create CA** and fill out:

* **Key**: select the key you just generated
* **Name**: the form will suggest using the same name as the key, don't change the suggested value unless you have a good reason
* Leave **Public Key CA** selected
* Leave **Internal Certificate** selected
* **Certificate**: select the certificate you just issued

Click on **Create**.

After the CA is created, click on **Activate**, then **Yes**.



<a name="distributed" />

## Parent and intermediate CAs on separate Amplia instances

To create an intermediate CA while having the parent CA hosted on a different Amplia instance, follow the steps below.

<a name="distributed-create-key" />

### Create the CA key and generate a CSR (intermediate CA instance)

On the intermediate CA instance, on the left menu, click on **Keys**, then on **Generate** and fill out:

* **Name**: `ca` or a name of your preference (`kebab-case` is recommended for naming keys)
* **Key Store**: select a key store to store the CA key on. If unsure, choose **Database**
* **Key Type**: typically `RSA`
* **Size**: typically 4096

Click on **Create**.

On the key details page, click on **Show CSR** and copy the CSR contents to your clipboard.

<a name="distributed-issue-ca-cert" />

### Issue the CA certificate (parent CA instance)

On the parent CA instance, on the left menu, click on **CA Certificates**, then on **Issue CA Certificate** and fill out:

* **Issuer**: select the parent CA
* Select **External Key**
* **CSR**: paste the CSR of the intermediate CA key

Fill out the remaining fields according to your case and click **Issue**, then click **Download** and save the CA certificate file on your computer.

<a name="distributed-create-ca" />

### Create the CA (intermediate CA instance)

Back on the intermediate CA instance, on the left menu, click on **CAs**, then on **Create CA** and fill out:

* **Key**: select the key you just generated
* **Name**: the form will suggest using the same name as the key, don't change the suggested value unless you have a good reason
* Leave **Public Key CA** selected
* Select **External Certificate**
* Upload the CA certificate file you just downloaded

Click on **Create**.

After the CA is created, click on **Activate**, then **Yes**.



<a name="external-parent" />

## External parent CA

To create an intermediate CA under a parent CA which you do not control, for instance under a country's root CA, follow the steps below:

1. [Create the CA key and generate a CSR](#distributed-create-key)
1. Request your CA certificate to the parent CA, providing the CSR
1. Once the parent CA issues your CA certificate, [Create the CA](#distributed-create-ca)



<a name="external-child" />

### External intermediate CA

If you want to allow a third party to create an intermediate CA under your own CA operated on Amplia, follow the steps below:

1. Instruct the third party to generate the intermediate CA key and send you the corresponding CSR
1. [Issue the CA certificate](#distributed-issue-ca-cert) with the given CSR and send the CA certificate file back to the third party



## See also

* [Create a root CA](create-root-ca.md)
* [Operation Guide](index.md)
