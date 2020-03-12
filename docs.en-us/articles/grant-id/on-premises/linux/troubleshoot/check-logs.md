# GrantID - Checking the system logs (Linux)

When installed on Linux, [GrantID](../../../index.md) sends its logs to the systemd journal, a centralized management solution for logging
all kernel and userland processes. To view the logs, use the `journalctl` utility.

To check the Identity Service logs:

[!include[Check Identity Service logs](../../../../../../includes/grant-id/linux/check-logs-identity-service.md)]

To check the Auth Server logs:

[!include[Check Auth Server logs](../../../../../../includes/grant-id/linux/check-logs-auth-server.md)]

To check the Console logs:

[!include[Check Console logs](../../../../../../includes/grant-id/linux/check-logs-console.md)]

## Useful parameters

The `journalctl` command has many parameters that can help you to find the information you seek on the logs.

Use the `-f` flag to view logs in "follow" mode (like `tail -f`):

[!include[Check log in follow mode](../../../../../../includes/grant-id/linux/check-logs-identity-service-follow.md)]

Use the `--since` parameter to view only recent logs:

[!include[Check recent logs](../../../../../../includes/grant-id/linux/check-logs-identity-service-since.md)]

## See also

* [How To Use Journalctl to View and Manipulate Systemd Logs](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs) (DigitalOcean post)
* [Troubleshooting issues on your GrantID instance (Linux)](index.md)
