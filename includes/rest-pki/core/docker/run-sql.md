```sh
docker run --name restpkicore_sql -v restpkicore_sql:/var/lib/postgresql/data -p 5432:5432 -e "POSTGRES_PASSWORD=SOME_PASS" -d postgres
```
