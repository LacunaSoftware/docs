# Verificando os logs de sistema (Azure App Services)

Por padrão, os logs de sistema ficam localizados na tabela `AppLogs` da conta de **Azure Storage** criada para o sistema no momento
da instalação.

Para conferir qual conta e tabela estão sendo utilizadas, vá em **App Services** &gt; (selecione o app service) &gt; **Configuration** e verifique o valor
das configurações `Serilog:WriteTo:0:Args:connectionString` e `Serilog:WriteTo:0:Args:storageTableName`.

> [!NOTE]
> Alguns erros, geralmente os que ocorrem durante a inicialização do sistema, podem não ser registrados no arquivo de log do sistema.
> Para diagnosticar tais erros, veja [Diagnosticando problemas na inicialização](startup-errors.md).
