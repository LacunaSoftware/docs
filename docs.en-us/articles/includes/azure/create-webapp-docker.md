## Creating the App Service

Follow the steps below to create an *App Service* (you must have an *App Service Plan* previously created with the **Linux** operating system):

1. Under **App Services**, click **+ Create** then **+ Web App**
1. On the first tab (*Basics*), fill in the fields according to your infrastructure (following the region chosen for the system)
   * Under *Publish*, choose **Docker Container**
   * Under *Operating System*, choose **Linux**
   * Under *Region*, choose the region where your *app service plan* is located
   * Under *Linux Plan*, choose your *app service plan*
   * Click **Next : Docker &gt;**
1. On the next tab (*Docker*), fill in:
   * Under *Options*, leave the **Single Container** option
   * Under *Image Source*, select **Azure Container Registry**
   * Under *Registry*, select the *container registry* created earlier
   * Under *Image* and *Tag*, select the system's image/tag according to the `az acr import` command run earlier
   * Leave the *Startup Command* option **blank**
   * Click **Review + create**
1. Click **Create**

Once the App Service has been created, click **Go to resource**. Then take note of its domain, for example `my-app-service.azurewebsites.net`.

Go to the App Service **Configuration** and add the following settings:

* `ASPNETCORE_ENVIRONMENT`: `Azure`
* `Bindings__HttpsMode`: `Strict`
* `STANDBY`: `True`

Save the settings.

Still in the App Service configuration, go to the **General settings** tab and, under the **HTTPS Only** option, select **Off** (the application itself will take care of requiring HTTPS access in the most appropriate way).

Then go to **Custom domains** and copy the **Custom Domain Verification ID** (this value will be needed later).
