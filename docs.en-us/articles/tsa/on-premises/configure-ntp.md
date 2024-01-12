# Configure NTP synchronization - Lacuna TSA

By default, the system clock is used to fetch the date/time that is included in each timestamp. You may optionally configure one or more NTP servers to be used as time sources. The application synchronizes periodically with the configured NTP servers and uses the first available server as time source.

This feature is configured through the **Ntp** section, having the following settings:
* **Servers**: you can have multiple registered servers, the important thing is to have the Servers section filled in for each server
	* **ServerName**: your server name
		* **Host**: hostname or IP address of NTP server
		* **Port**:  port of NTP server. Defaults to `123`
		* **Priority**:  if more than one NTP server is configure, specify the priority of each server. Smaller numbers mean higher priority. Defaults to `0` i.e. highest priority
		* **TimeoutMS**: timeout in milliseconds when querying this NTP server.Defaults to `1000` i.e. 1 second
* **FallbackToSystemClock**: by default, if no servers can be contacted, the system clock is used. set to False to disable using the system clock if no NTP servers can be reached. Defaults to `True`
* **SyncPeriodSeconds**: delay between successful synchronizations in seconds. Defaults to `3600` i.e. 1 hour
* **RetryDelaySeconds**: delay before retrying to sync with an NTP server. Defaults to `60` i.e. 1 minute
* **RequireSync**: by default, if all servers are currently down or out-of-sync, the offset from the latest server that was successfully synchronized is used. Defaults to `False`
* **MaxDriftRateSecondsPerHour**: by default, the drift between the system clock and the NTP server is monitored on each synchronization.  If the drift since the last synchronization is larger than the maximum acceptable drift, a warning is logged. Maximum acceptable drift rate in seconds per hour. Defaults to `5`
* **EnforceMaxDrift**: set to True to consider a NTP server as out-of-sync due to an unacceptable drift. Defaults to `False`
* **MaxOffsetSeconds**:  maximum acceptable offset between system clock and the NTP server. If set, drift monitoring settings are ignored. Defaults to `none`, which means drift monitoring is used instead
* **EnforceMaxOffset**: set to True to consider a NTP server as out-of-sync due to an unacceptable offset. Defaults to `False`
* **Disabled**: set to True to disable NTP synchronization. Defaults to `False`

To monitor NTP synchronization, add the following to the **Logging** section, subsection **LogLevel**:
* **Lacuna.Commons.NtpSync**: Set to `Information`

Example (.ini or .conf configuration file):
```ini
[Ntp:Servers:FillServerNameHere]
Host=127.0.0.1
Port=123
Priority=0
TimeoutMS=1000

[Logging:LogLevel]
Lacuna.Commons.NtpSync=Information
```

Example (environment variables):

```sh
Ntp__Servers__FillServerNameHere__Host=127.0.0.1
Ntp__Servers__FillServerNameHere__Port=123
Ntp__Servers__FillServerNameHere__Priority=0
Ntp__Servers__FillServerNameHere__TimeoutMS=1000

Logging__LogLevel__Lacuna.Commons.NtpSync=Information
```
