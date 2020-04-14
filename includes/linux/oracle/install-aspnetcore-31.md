<!-- https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-centos7 -->
<!-- Using installation from RHEL instead of CentOS because MS package repository for centos lacks mssql-tools -->

<!-- THIS WAS COPIED FROM 2.2 AND ONLY CHANGED TO 3.1, THERE ARE NO ORACLE-SPECIFIC INSTRUCTIONS ON MS DOCS! UNTESTED! -->

```sh
rpm -Uvh https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm
yum install aspnetcore-runtime-3.1
```
