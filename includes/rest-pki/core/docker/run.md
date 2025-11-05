```sh
docker run --name restpkicore --env-file restpkicore.env -v restpkicore_data:/var/app -p 8080:80 -d lacunasoftware/restpkicore:3.4
```
