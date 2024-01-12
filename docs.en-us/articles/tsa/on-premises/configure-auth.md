# Configure authentication - Lacuna TSA

Authentication configuration is optional. By default, no authentication is enforced. To authenticate requests, fill the users configuration. 

This feature is configured through the **Authentication** section, having the following settings:

* **Users**: you can have multiple registered users, the important thing is to have the Users section filled in for each user
	* **Username**: your username
		* **Type**: `Basic` or `BearerToken`
		* **Password**: password to be required for the user
		* **BearerToken**: bearer token to be required for the user
		* **Disabled**: set to True to disable user. Defaults to `False`
* **Disabled**: set to True to disable authentication. Defaults to `False`

Example (.ini or .conf configuration file):
```ini
[Authentication:Users:FillUsernameHere]
Type=Basic
Password=YOUR_PASSWORD

[Authentication:Users:FillUsernameHere]
Type=BearerToken
BearerToken=YOUR_BEARERTOKEN
```

Example (environment variables):
```sh
Authentication__Users__FillUsernameHere__Type=Basic
Authentication__Users__FillUsernameHere__Password=YOUR_PASSWORD

Authentication__Users__FillUsernameHere__Type=BearerToken
Authentication__Users__FillUsernameHere__BearerToken=YOUR_BEARERTOKEN
```