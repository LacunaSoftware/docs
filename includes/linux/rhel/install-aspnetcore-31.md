<!-- https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-rhel7 -->

<!-- On 2.2, for some reason, we did not use the *rhel-7-server-dotnet-rpms* packages. Will this work with our instructions? -->

```sh
subscription-manager repos --enable=rhel-7-server-dotnet-rpms
yum install rh-dotnet31-aspnetcore-runtime-3.1 -y
ln -s /opt/rh/rh-dotnet31/root/usr/bin/dotnet /usr/bin/dotnet
```

<!-- doing `ln -s /opt/rh/rh-dotnet31/root/usr/bin/dotnet /usr/bin/dotnet` instead of `scl enable rh-dotnet31 bash` to keep daemon definition common -->
