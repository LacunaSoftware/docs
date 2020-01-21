<!-- https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-centos7 -->
<!-- Using installation from RHEL instead of CentOS because MS package repository for centos lacks mssql-tools -->
<!-- Not using https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-rhel7 because packages for ASP.NET Core Runtime 2.2 are not available -->

```sh
rpm -Uvh https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm
yum install aspnetcore-runtime-2.2
```
