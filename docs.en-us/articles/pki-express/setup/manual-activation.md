# Manual activation of PKI Express

If during the installation of [PKI Express](../index.md) the activation procedure fails, please follow the steps
below to manually activate PKI Express.

> [!NOTE]
> These instructions refer to installation on Linux environments only. To activate PKI Express on Windows,
> either over the network or manually, use the *PKI Express Configuration Manager* tool (**pkiemgr.exe**)

To activate PKI Express manually, start by acquiring the activation *request code*:

[!include[Request code](../../../../includes/pki-express-/linux/request-manual-activation.md)]

A file named **pkie-activation-request.pem** will be saved on the current folder. Contact us through
our [Support Center](http://lacuna.help) attaching the file.

Upon receiving the activation file back from support (**pkie-activation.pem**), copy the file to the
current directory and execute:

[!include[Complete activation](../../../../includes/pki-express-/linux/complete-manual-activation.md)]

Or, if you prefer, execute the command passing the path to the activation file:

[!include[Complete activation](../../../../includes/pki-express-/linux/complete-manual-activation-with-file.md)]
