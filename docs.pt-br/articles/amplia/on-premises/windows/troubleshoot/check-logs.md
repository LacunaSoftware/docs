# Amplia - Verificando os logs de sistema no Windows Server

Por padrão, os logs de sistema ficam localizados no arquivo `C:\Logs\Amplia.log`.

Para conferir qual arquivo está sendo utilizado, verifique o arquivo `appsettings.iis.json` na pasta do site. Localize a seção `Serilog`, subseção `WriteTo`.

Exemplo:

```json
"Serilog": {
	"WriteTo": [
		{
			"Name": "File",
			"Args": {
				"path": "C:\\Logs\\Amplia.log",
			}
		}
	],
},
```

Para acompanhar o log de maneira contínua, você pode abrir um Powershell e digitar o seguinte comando:

```ps
gc C:\Logs\Amplia.log -Tail 100 -Wait
```

> [!NOTE]
> Alguns erros, geralmente os que ocorrem durante a inicialização do sistema, podem não ser registrados no arquivo de log do sistema.
> Para diagnosticar tais erros, veja [Diagnosticando problemas na inicialização](startup-errors.md).
