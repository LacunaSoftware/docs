# Verificar suporte mínimo ao .NET Framework

A partir do Rest PKI v1.33.3, é necessário ter o **.NET Framework v4.6.2** instalado.
Para verificar se o Windows Server possui esta versão do .NET instalada, execute a seguinte linha de código em um terminal do PowerShell:

```ps
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full' | Get-ItemPropertyValue -Name Release
```

Se o resultado exibir um número maior ou igual a `394806` significa que seu sistema suporta a versão exigida. ✅

Caso contrário, certifique-se que o Windows Server esteja atualizado ou faça a instalação direta do .NET Framework: [https://dotnet.microsoft.com/download/dotnet-framework](https://dotnet.microsoft.com/download/dotnet-framework)