```sh
docker run -v amplia_sql:/var/opt/mssql -p 1433:1433 -e "MSSQL_PID=Express" -e "SA_PASSWORD=SOME_PASS" -e "ACCEPT_EULA=Y" mcr.microsoft.com/mssql/server:2019-latest
```
