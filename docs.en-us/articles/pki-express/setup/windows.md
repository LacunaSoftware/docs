# Install PKI Express on Windows

PKI Express is compatible with the following Windows environments:

* Server: Windows Server 2008 R2 or later
* Desktop: Windows 7 or later

To install PKI Express, download and run the installer:

<br />
<center>
**[!include[main-link](../../../../includes/pki-express/windows/main-link.md)] (recommended)**
</center>
<br />

After completing the installation procedure, run the *PKI Express Configuration Manager* tool (**file `pkiemgr.exe` on the installation folder** example: C:\Program Files\Lacuna Software\PKI Express)
and follow the instructions to activate PKI Express.

> [!NOTE]
> The Configuration Manager tool does not appear on the start menu, you must run it from the installation folder (this will be fixed soon)

## Alternative downloads

File                                                                            | Description
------------------------------------------------------------------------------- | ------------------
**[!include[msi-64](../../../../includes/pki-express/windows/link-msi-64.md)]** | **Windows installer (64 bits)**
[!include[msi-86](../../../../includes/pki-express/windows/link-msi-86.md)]     | Windows installer (32 bits)
[!include[zip-64](../../../../includes/pki-express/windows/link-zip-64.md)]     | Standalone zip package (64 bits)
[!include[zip-86](../../../../includes/pki-express/windows/link-zip-86.md)]     | Standalone zip package (32 bits)

Whenever possible, choose the 64-bit version of PKI Express.

> [!NOTE]
> To install PKI Express on a development environment on which you do not have administrative privileges, use one of the standalone zip packages.

## .NET Framework

PKI Express requires .NET Framework 4.6.1, which is probably already installed on your system. However, if during installation
you receive an error message stating that the .NET Framework is not installed, use one of the links below to install it:

* [Microsoft .NET Framework 4.6.1 (Web Installer)](https://www.microsoft.com/en-us/download/details.aspx?id=49981)
* [Microsoft .NET Framework 4.6.1 (Offline Installer)](https://www.microsoft.com/en-us/download/details.aspx?id=49982)

> [!NOTE]
> To install the .NET Framework 4.6.1 on Windows 7 or Windows Server 2008 R2 you must have the Service Pack 1 for the operating system installed.
