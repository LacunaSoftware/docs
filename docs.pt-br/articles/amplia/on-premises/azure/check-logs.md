# Amplia - Verificando os logs de sistema no Azure App Services

Por padrão, os logs de sistema ficam localizados na tabela `AppLogs` da conta de **Azure Storage** criada para o sistema no momento
da instalação.

Caso não saiba qual conta e tabela estão sendo utilizadas, vá em **App Services** &gt; (selecione o app service) &gt; **Configuration** e verifique o valor
das configurações `Serilog:WriteTo:0:Args:connectionString` e `Serilog:WriteTo:0:Args:storageTableName`.
