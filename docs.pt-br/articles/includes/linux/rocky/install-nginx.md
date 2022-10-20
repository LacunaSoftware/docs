[!include[If you prefer Apache](../apache-instead.md)]

Instale o Nginx (se ainda não estiver instalado):

[!include[Install nginx](../../../../../includes/linux/rocky/install-nginx.md)]

[!include[Test nginx](../test-nginx.md)]

Edite o arquivo de configuração do Nginx:

[!include[Edit nginx config](../../../../../includes/linux/rocky/edit-nginx-config.md)]

Remova ou comente (com `#`s) toda a seção `server` localizada logo abaixo da cláusula `include /etc/nginx/conf.d/*.conf;`. Após fazer isso,
o arquivo de configuração deve ficar semelhante ao exibido abaixo:

[!include[Section of nginx config to delete](../../../../../includes/linux/rocky/nginx-config-after.md)]
