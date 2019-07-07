# Installing Amplia on Linux Ubuntu

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

## Install the ASP.NET Core Runtime

Follow these instructions: [Install .NET Core 2.2 Runtime on Linux Ubuntu](https://dotnet.microsoft.com/download/linux-package-manager/ubuntu18-04/runtime-2.2.5)

> [!NOTE]
> Select your Ubuntu version on the combo box at the top of the page

> [!TIP]
> Ignore the footnote on the instructions about installing just the .NET Core runtime. You need the full "runtime bundle" (in other words, make sure you get the package `aspnetcore-runtime-2.2`, not ~~dotnet-runtime-2.2~~)

## Install Amplia

Create a local user to run the Amplia server:

```sh
sudo adduser --home /var/amplia --disabled-password amplia
sudo usermod -aG syslog amplia
sudo chmod -R a=,g=rX,u=rwX /var/amplia
```

> [!NOTE]
> If you intend to use the native key store, keys will be stored on the directory */var/amplia/.dotnet*. The above `chmod` command is important to restrict access to the keys.

Create the site folder, download and extract the binaries:

```sh
sudo mkdir /usr/share/amplia
wget https://cdn.lacunasoftware.com/amplia/amplia-2.15.0.tar.gz
sudo tar xzf amplia-2.15.0.tar.gz -C /usr/share/amplia
sudo chmod -R a=rX,u+w /usr/share/amplia
```

> [!NOTE]
> The commands above cause the application user (amplia) to be able to read the site files, but not modify them. This is intended.

## Configure Amplia

Rename the file *appsettings.iis-linux.json* to *appsettings.linux.json*, then edit the file to configure your Amplia instance:

```sh
sudo mv /usr/share/amplia/appsettings.linux-template.json /usr/share/amplia/appsettings.linux.json
sudo nano /usr/share/amplia/appsettings.linux.json
```

[!include[Database config](../includes/database-config.md)]

### Logging

Under section **Serilog**, configure the application logging:

```json
...
"Serilog": {
	"MinimumLevel": {
		"Default": "Warning",
	},
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "/var/log/amplia.log",
				"outputTemplate": "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}",
			}
		}
	],
}
...
```

If desired, change the **path** setting to the log file path.

> [!NOTE]
> If you change the default log file path, remember to grant full access to the application user (`amplia`) on the log folder

[!include[Common config](../includes/common-config.md)]

## Set up a daemon

Create the service definition file:

```sh
sudo touch /etc/systemd/system/amplia.service
sudo nano /etc/systemd/system/amplia.service
```

Enter the following:

```
[Unit]
Description=Amplia

[Service]
WorkingDirectory=/usr/share/amplia
ExecStart=/usr/bin/dotnet Lacuna.Amplia.Site.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=amplia
User=amplia
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false
# Uncomment the line below if you intend to use Elliptic Curve keys
#Environment=CLR_OPENSSL_VERSION_OVERRIDE=1.1

[Install]
WantedBy=multi-user.target
```

Save the file and enable the service:

```sh
sudo systemctl enable amplia
sudo systemctl status amplia
```

The expected output is similar to:

```
* amplia.service - Amplia
   Loaded: loaded (/etc/systemd/system/amplia.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2019-07-07 05:50:04 UTC; 4min 22s ago
 Main PID: 10960 (dotnet)
    Tasks: 31 (limit: 2319)
   CGroup: /system.slice/amplia.service
           └─10960 /usr/bin/dotnet Lacuna.Amplia.Site.dll
```

If necessary, restart the service: `sudo systemctl restart amplia`

To test that the Amplia server is running, run:

```sh
curl http://localhost:5000/api/system/info
```

The expected output is something like:

```json
{"productName":"Lacuna Amplia","productVersion":"2.15.0"}
```

## Set up a reverse proxy server

> [!NOTE]
> This manual suggests the usage of Nginx to set up a reverse proxy server. If you prefer to use Apache, [see this article](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Install Nginx (if not already installed):

```sh
sudo apt-get install nginx
```

It's usually a good idea to disable the default Nginx site: 

```sh
sudo rm /etc/nginx/sites-enabled/default
```

Create a site configuration file for Amplia:

```sh
sudo touch /etc/nginx/sites-available/amplia
sudo nano /etc/nginx/sites-available/amplia
```

Enter the following, replacing the dashboard domain on the `server_name` entry:

```nginx
server {
    listen        80;
    server_name   ca.patorum.com;
    location / {
        proxy_pass         http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

> [!TIP]
> Ideally, your site configuration should contain the entries `ssl_certificate` and `ssl_certificate_key` with a valid SSL certificate. This configuration is outside of the scope of these instructions.

Enable the site, test the Nginx configuration and reload it:

```sh
sudo ln -sf /etc/nginx/sites-available/amplia /etc/nginx/sites-enabled/amplia
sudo nginx -t
sudo nginx -s reload
```

Test the site:

```
curl http://localhost/api/system/info
```

## See also

* [Updating Amplia on Azure App Services](update.md)
* [Troubleshooting](troubleshoot/index.md)
