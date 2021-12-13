```sh
docker run -v restpkicore_sql:/var/opt/mssql -p 1433:1433 -e "MSSQL_PID=Express" -e "SA_PASSWORD=SOMEPASS" -e "ACCEPT_EULA=Y" -d mcr.microsoft.com/mssql/server:2019-latest
```
