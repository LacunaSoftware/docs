# Instalação do Amplia em Ubuntu Server

<!-- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2 -->

## Instale o APS.NET Core Runtime

Clique no link abaixo, então **selecione sua versão Ubuntu** e siga as instruções:

<br />
<center>
<a href="https://dotnet.microsoft.com/download/linux-package-manager/ubuntu18-04/runtime-2.2.5" target="_blank">Install .NET Core 2.2 Runtime on Linux Ubuntu</a>
</center>
<br />

> [!TIP]
> Ignore a nota de rodapé das instruções sobre instalar somente o *.NET Core runtime*. Você precisa do "runtime bundle" completo. Em outras palavras, tenha certeza que você pegou o pacote
`aspnetcore-runtime-2.2`, não ~~dotnet-runtime-2.2~~

## Instalar o Amplia

Crie um usuário local para execeutar o servidor Amplia:

```sh
sudo adduser --home /var/amplia --disabled-password amplia
sudo usermod -aG syslog amplia
sudo chmod -R a=,g=rX,u=rwX /var/amplia
```

> [!NOTE]
> Se você pretende usar um armazenamento de chaves no store nativo, as chaves poderão ser armazenadas no diretório */var/amplia/.dotnet*. O comando `chmod` acima é importante para
restringir o acesso as chaves.

Crie a pasta no site, baixe e extraia os binários:

```sh
sudo mkdir /usr/share/amplia
wget https://cdn.lacunasoftware.com/amplia/amplia-2.15.0.tar.gz
sudo tar xzf amplia-2.15.0.tar.gz -C /usr/share/amplia
sudo chmod -R a=rX,u+w /usr/share/amplia
```

> [!NOTE]
> Os comandos acima fazem com que o usuário do aplicativo (amplia) possa ler os arquivos do site, mas não os modifica. Isso é pretendido. 

## Configure o Amplia

Renomeie o arquivo *appsettings.iis-linux.json* para *appsettings.linux.json*, então edite o arquivo para configurar sua instância do Amplia:

```sh
sudo mv /usr/share/amplia/appsettings.linux-template.json /usr/share/amplia/appsettings.linux.json
sudo nano /usr/share/amplia/appsettings.linux.json
```

[!include[Database config](../includes/general-config.md)]

### Logging

Na seção **Serilog**, configure a applicação logging:

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

Se preferir, mude a configuração **path** para outra pasta.

> [!NOTE]
> Se você mudar o padrão do arquivo *path*, lembre-se de conceder permissões de gravação para o usuário do aplicativo (*amplia*) do diretório.

[!include[General config](../includes/general-config.md)]

Para gerar a *EncryptionKey*, execeute o comando seguinte:

```sh
openssl rand -base64 32
```

[!include[Common config](../includes/common-config.md)]

## Configurar um *daemon*

Crie o arquivo de definição de serviço:

```sh
sudo touch /etc/systemd/system/amplia.service
sudo nano /etc/systemd/system/amplia.service
```
Digite o seguinte:

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

> [!NOTE]
> Se você pretende usar chaves *Elliptic Curve* (EC), descomente a linha marcada acima. Neste caso, você também precisa ter certeza do seu servido ter o OpenSSL 1.1 instalado.

Salve o arquivo e ativar o serviço:

```sh
sudo systemctl enable amplia
sudo systemctl status amplia
```

A saída esperada é semelhante a:

```
* amplia.service - Amplia
   Loaded: loaded (/etc/systemd/system/amplia.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2019-07-07 05:50:04 UTC; 4min 22s ago
 Main PID: 10960 (dotnet)
    Tasks: 31 (limit: 2319)
   CGroup: /system.slice/amplia.service
           └─10960 /usr/bin/dotnet Lacuna.Amplia.Site.dll
```

Se necessário, reinicie o serviço: `sudo systemctl restart amplia`

Para testar se o servidor do Amplia executando, execute:

```sh
curl http://localhost:5000/api/system/info
```

A saída esperada é algo como:

```json
{"productName":"Lacuna Amplia","productVersion":"2.15.0"}
```

## Configurar um servidor proxy reverso

> [!NOTE]
> Se você preferir usar Apache ao invés do Nginx,  [veja este artigo](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-2.2#configure-apache).

Instale Nginx (se ainda não estiver instalado)

```sh
sudo apt-get install nginx
```

Geralmente, é uma boa ideia desabilitar o site Nginx padrão:

```sh
sudo rm /etc/nginx/sites-enabled/default
```

Crie a pasta de configuração para o Amplia:

```sh
sudo touch /etc/nginx/sites-available/amplia
sudo nano /etc/nginx/sites-available/amplia
```

Digite o seguinte, substituindo o domínio do painel na entrada `server_name`:

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
> Idealmente, a configuração do site deve conter as entradas `ssl_certificate` e `ssl_certificate_key` com o certificado SSL válido. Esta configuração é fora do escopo destas
instruções.

Ative o site, teste a configuração do Nginx e recarregue-a:

```sh
sudo ln -sf /etc/nginx/sites-available/amplia /etc/nginx/sites-enabled/amplia
sudo nginx -t
sudo nginx -s reload
```

Teste o site:

```
curl http://localhost/api/system/info
```

## Veja também

* [Atualização do Amplia em Linux](update.md)
* [Resolução de problemas](troubleshoot/index.md)
