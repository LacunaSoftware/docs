# Amplia Reg - Checking the system logs (Linux)

When installed on Linux, [Amplia Reg](../../../index.md) sends its logs to the systemd journal, a centralized management solution for logging
all kernel and userland processes. To view the logs, use the `journalctl` utility.

To check the Amplia Reg logs:

[!include[Check logs](../../../../../../includes/amplia-reg/linux/check-logs.md)]

Use the `-f` flag to view logs in "follow" mode (like `tail -f`):

[!include[Check log in follow mode](../../../../../../includes/amplia-reg/linux/check-logs-follow.md)]

Use the `--since` parameter to view only recent logs:

[!include[Check recent logs](../../../../../../includes/amplia-reg/linux/check-logs-since.md)]

## See also

* [How To Use Journalctl to View and Manipulate Systemd Logs](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs) (DigitalOcean post)
* [Troubleshooting issues on your Amplia Reg instance (Linux)](index.md)
