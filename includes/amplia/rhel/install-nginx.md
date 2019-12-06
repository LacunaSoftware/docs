<!-- https://access.redhat.com/solutions/1211673 -->

```sh
subscription-manager repos --enable=rhel-server-rhscl-7-rpms
yum install rh-nginx18
systemctl enable rh-nginx18-nginx
systemctl start rh-nginx18-nginx
scl enable rh-nginx18 bash
``` 
