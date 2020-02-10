# Verificando os logs de sistema (Linux)

Quanto instalado em Linux, o [Amplia](../../../index.md) escreve seus logs no *systemd journal*, uma solução para gerenciamento de logs centralizada do Linux. Para
visualizar os logs, utiliza-se o utilitário `journalctl`.

Para verificar os logs do Amplia:

[!include[Check logs](../../../../../../includes/amplia/linux/check-logs.md)]

Utilize a flag `-f` para acompanhar o log de maneira contínua (como o comando `tail -f`):

[!include[Check log in follow mode](../../../../../../includes/amplia/linux/check-logs-follow.md)]

Utilize o parâmetro `--since` para visualizar apenas os logs mais recentes:

[!include[Check recent logs](../../../../../../includes/amplia/linux/check-logs-since.md)]

## Veja também

* [*How To Use Journalctl to View and Manipulate Systemd Logs*](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs) (artigo da DigitalOcean)
* [Resolução de problemas em Linux](index.md)
