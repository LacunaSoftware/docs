[!include[If you prefer Apache](../apache-instead.md)]

Instale o Nginx (se ainda não estiver instalado):

[!include[Install nginx](../../../../../includes/linux/rhel/install-nginx.md)]

[!include[Test nginx](../test-nginx.md)]

Edite o arquivo de configuração do Nginx:

[!include[Edit nginx config](../../../../../includes/linux/rhel/edit-nginx-config.md)]

Apague ou comente (prefixando cada linha com `#`) a seção `server` inteira, mostrada abaixo:

[!include[Section of nginx config to delete](../../../../../includes/linux/rhel/nginx-config-to-delete.md)]
