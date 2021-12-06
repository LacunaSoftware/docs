```sh
docker run lacunasoftware/amplia:3.13 -- gen-enc-key -q | docker secret create amplia_encryption_key -
```
