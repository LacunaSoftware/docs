# Configure NTP synchronization - Lacuna TSA

By default, the system clock is used to fetch the date/time that is included in each timestamp. You may optionally configure one or more NTP servers to be used as time sources. The application synchronizes periodically with the configured NTP servers and uses the first available server as time source.

This feature is configured through the **Ntp** section, having the following settings:
* **SyncPeriodSeconds**: delay between successful synchronizations in seconds.Defaults to `3600` i.e. 1 hour
* **RetryDelaySeconds**: delay before retrying to sync with an NTP server. Defaults to `60` i.e. 1 minute
* **Servers**: you can have multiple registered servers, the important thing is to have the Servers section filled in for each server
	* **ServerName**: your server name
		* **Host**: hostname or IP address of NTP server
		* **Port**:  port of NTP server. Defaults to `123`
		* **Priority**:  if more than one NTP server is configure, specify the priority of each server. Smaller numbers mean higher priority. Defaults to `0` i.e. highest priority
		* **TimeoutMS**: timeout in milliseconds when querying this NTP server.Defaults to `1000` i.e. 1 second
* **FallbackToSystemClock**: by default, if no servers can be contacted, the system clock is used. set to False to disable using the system clock if no NTP servers can be reached. Defaults to `True`
* **RequireSync**: by default, if all servers are currently down or out-of-sync, the offset from the latest server that was successfully synchronized is used.
* **MaxDriftRateSecondsPerHour**: by default, the drift between the system clock and the NTP server is monitored on each synchronization.  If the drift since the last synchronization is larger than the maximum acceptable drift, a warning is logged. Maximum acceptable drift rate in seconds per hour. Defaults to `5`
* **EnforceMaxDrift**: set to True to consider a NTP server as out-of-sync due to an unacceptable drift. Defaults to `False`
* **MaxOffsetSeconds**:  maximum acceptable offset between system clock and the NTP server. If set, drift monitoring settings are ignored. Defaults to `none`, which means drift monitoring is used instead
* **EnforceMaxOffset**: set to True to consider a NTP server as out-of-sync due to an unacceptable offset. Defaults to `False`
* **Disabled**: set to True to disable NTP synchronization. Defaults to `False`

* **Logging__LogLevel__Lacuna.Commons.NtpSync**: To monitor NTP synchronization, set as `Information`

> [!NOTE]
> **Logging__LogLevel__Lacuna.Commons.NtpSync** is part of the logging section, so it is not necessary to use the Ntp prefix

Example (.ini or .conf configuration file):
```ini
[Ntp]
SyncPeriodSeconds=3600
RetryDelaySeconds=60
FallbackToSystemClock=True
RequireSync=True
MaxDriftRateSecondsPerHour=5
EnforceMaxDrift=False
MaxOffsetSeconds=
EnforceMaxOffset=False
Disabled=False

[Ntp:Servers:<ServerName>]
Host=127.0.0.1
Port=123
Priority=0
TimeoutMS=1000

Logging__LogLevel__Lacuna.Commons.NtpSync=Information
```

Example (environment variables):

```sh
Ntp__SyncPeriodSeconds=3600
Ntp__RetryDelaySeconds=60
Ntp__FallbackToSystemClock=True
Ntp__RequireSync=True
Ntp__MaxDriftRateSecondsPerHour=5
Ntp__EnforceMaxDrift=False
Ntp__MaxOffsetSeconds=
Ntp__EnforceMaxOffset=False
Ntp__Disabled=False

Ntp__Servers__ServerName__Host=127.0.0.1
Ntp__Servers__ServerName__Port=123
Ntp__Servers__ServerName__Priority=0
Ntp__Servers__ServerName__TimeoutMS=1000

Logging__LogLevel__Lacuna.Commons.NtpSync=Information
```