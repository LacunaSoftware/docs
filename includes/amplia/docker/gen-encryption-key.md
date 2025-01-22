```sh
docker run lacunasoftware/amplia:4.11 -- gen-enc-key -q | docker secret create amplia_encryption_key -
```
