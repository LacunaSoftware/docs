<!-- https://access.redhat.com/solutions/1211673 -->

```sh
subscription-manager repos --enable=rhel-server-rhscl-7-rpms
yum install rh-nginx116
systemctl enable rh-nginx116-nginx
systemctl start rh-nginx116-nginx
scl enable rh-nginx116 bash
``` 
