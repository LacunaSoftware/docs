# Updating Rest PKI Core on Azure App Services

<!-- link to version in Portuguese -->
<div data-alt-locales="pt-br"></div>

Before updating, check whether the new version requires additional migration steps:

* [Update from 2.x to 3.0](../update-30.md)
* [Update from 3.x to 4.0](../update-40.md)

Then, replicate the new Docker image of the system to your *container registry* (replace `MY_ACR_NAME` with the name chosen during installation
and `4.2.5` with the desired version):

```sh
az login
az acr login --name MY_ACR_NAME
az acr import --name MY_ACR_NAME --source docker.io/lacunasoftware/restpkicore:4.2.5 --image restpkicore:4.2.5
```

Finally, on the system's App Service, go to **Deployment Center** and, in the **Tag** field, select the new version and click **Save**.

## See also

* [Installing Rest PKI Core on Azure App Services](install.md)
