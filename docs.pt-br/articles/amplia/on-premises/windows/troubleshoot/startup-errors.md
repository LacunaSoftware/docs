# Diagnosticando problemas na inicialização (Windows Server)

Alguns erros que ocorrem durante a inicialização do sistema impedem que o framework de log do Amplia funcione. Nesses casos, tente uma das solução abaixo para diagnosticar o problema.

## 1. Logs do Windows

1. Abra o menu iniciar, pesquise por **Event Viewer**, selecione então o aplicativo **Event Viewer**.
1. Em **Event Viewer**, abra o nó **Windows Logs**.
1. Selecione **Application** para abrir os logs de aplicação.
1. Procure por erros associados com falha no sistema, por exemplo erros contendo *IIS AspNetCore Module* ou *IIS Express AspNetCore Module* na coluna *Source*.

## 2. Habilitar o log de stdout do ASP.NET Core

> [!IMPORTANT]
> Desative o log de stdout quando a solução de problemas for concluída.

Para habilitar o log de stdout ASP.NET Core:

1. Navegue até a pasta de instalação do site no servidor.
1. Se a pasta *logs* não estiver presente, crie a pasta.
1. Edite o arquivo *web.config*. Configure **stdoutLogEnabled** para `true` e mude o **stdoutLogFile** com caminho para o ponto da pasta com *logs* (por exemplo,`.\logs\stdout`). `stdout` no caminho é o prefixo do nome do arquivo de log. Um timestamp, id processo e extensão de arquivo são adicionadas automaticamente quando o log é criado. Usando `stdout` como o prefixo do nome do arquivo, um nome de arquivo típico seria *stdout_20180205184032_5412.log*.
1. Certifique-se de que o usuário do *application pool* tenha permissões de gravação na pasta de logs.
1. Salve o arquivo *web.config*.
1. Tente acessar o sistema.
1. Navegue pela pasta de *logs*. Encontre e abra o arquivo mais recente.
1. Estude o erro dos logs.

Para desabilitar após a solução de problemas estar completa:

1. Edite o arquivo *web.config*.
1. Configure **stdoutLogEnabled** para `false`.
1. Salve o arquivo.

>[!WARNING]
> A falha em desativar o log de stdout pode levar a falhas no sistema ou no servidor. Não há limite no tamanho do arquivo de log ou no número de arquivos de log criados.

## Veja também

* [Troubleshoot ASP.NET Core on IIS](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/troubleshoot?view=aspnetcore-2.2)
