> [!NOTE]
> In the instructions below, we will use the creation of the record for the domain `app.patorum.com` as an example

1. Under **DNS zones**, click the zone the domain belongs to (e.g.: `patorum.com`)
1. Click **+ Record set**
1. Under *Name*, type the leftmost portion of the domain (e.g.: `app`)
1. Under *Type*, select **CNAME**
1. Under *Alias record set*, select **No**
1. Under *Alias*, fill in the App Service domain (e.g.: `my-app-service.azurewebsites.net`)
1. Click **OK**
1. Click **+ Record set** again
1. Under *Name*, type `asuid.` followed by the leftmost portion of the domain (e.g.: `asuid.app`)
1. Under *Type*, select **TXT**
1. Under *Value*, paste the **Custom Domain Verification ID** previously copied from the App Service
1. Click **OK**

> [!NOTE]
> If you do not use Azure as the DNS server for your zones, perform the equivalent procedure on your DNS server
