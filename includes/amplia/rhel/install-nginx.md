<!-- https://access.redhat.com/solutions/1211673 -->

```sh
subscription-manager repos --enable=rhel-server-rhscl-7-rpms
yum install rh-nginx114
systemctl enable rh-nginx114-nginx
systemctl start rh-nginx114-nginx
scl enable rh-nginx114 bash
``` 
