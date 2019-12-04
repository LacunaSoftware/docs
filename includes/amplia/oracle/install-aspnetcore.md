<!-- https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-centos7 -->
<!-- Using installation from RHEL instead of CentOS because MS package repository for centos lacks mssql-tools -->

```sh
sudo rpm -Uvh https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm
sudo yum install aspnetcore-runtime-2.2
```
