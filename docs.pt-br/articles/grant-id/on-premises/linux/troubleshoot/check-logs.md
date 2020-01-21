# Verificando os logs de sistema (Linux)

Por padrão, os logs de sistema ficam localizados no diretório */var/log/grantid*:

* Identity service: */var/log/grantid/identity-service.log*
* Auth server: */var/log/grantid/auth-server.log*
* Console: */var/log/grantid/console.log*

Para acompanhar o log de maneira contínua, você pode usar:

```sh
tail -f /var/log/grantid/COMPONENTE.log
```

Caso o Grant ID não esteja escrevendo os logs nesse arquivo, talvez você tenha configurado um diretório personalizado para logs durante a instalação.
Para conferir qual arquivo está sendo utilizado, verifique o arquivo */etc/grantid/COMPONENTE.json*. Localize a seção `Serilog`, subseção `WriteTo`.

Exemplo:
```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "/some-custom-path/some-custom-filename.log",
			}
		}
	],
},
```

> [!NOTE]
> Alguns erros, geralmente os que ocorrem durante a inicialização do sistema, podem não ser registrados no arquivo de log do sistema.
> Para diagnosticar tais erros, veja [Diagnosticando problemas na inicialização](startup-errors.md).
