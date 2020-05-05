# Signer - Checking the system logs (Linux)

When installed on Linux, [Signer] (../../../ index.md) writes its logs to *systemd journal*, a 
centralized Linux log management solution. To view the logs, use the utility `journalctl`.

To check the Signer logs:

[!include[Check logs](../../../../../../includes/signer/linux/check-logs.md)]

Use the `-f` flag to monitor the log continuously (like the` tail -f` command):

[!include[Check log in follow mode](../../../../../../includes/signer/linux/check-logs-follow.md)]

Use the `--since` parameter to view only the most recent logs:

[!include[Check recent logs](../../../../../../includes/signer/linux/check-logs-since.md)]

## See too

* [*How To Use Journalctl to View and Manipulate Systemd Logs*](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs) (article from DigitalOcean)
* [Troubleshooting Linux](index.md)
