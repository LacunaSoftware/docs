# Verificando os logs de sistema (Linux)

Por padrão, os logs de sistema ficam localizados no arquivo `/var/log/amplia.log`.

Para acompanhar o log de maneira contínua, você pode usar:

```sh
tail -f /var/log/amplia.log
```

Caso o Amplia não esteja escrevendo os logs nesse arquivo, talvez você tenha configurado um diretório personalizado para logs durante a instalação.
Para conferir qual arquivo está sendo utilizado, verifique o arquivo `/etc/amplia/appsettings.linux.json`. Localize a seção `Serilog`, subseção `WriteTo`.

Exemplo:
```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "/some-custom-path/amplia.log",
			}
		}
	],
},
```

> [!NOTE]
> Alguns erros, geralmente os que ocorrem durante a inicialização do sistema, podem não ser registrados no arquivo de log do sistema.
> Para diagnosticar tais erros, veja [Diagnosticando problemas na inicialização](startup-errors.md).

