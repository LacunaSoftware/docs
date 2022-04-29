```sh
docker run lacunasoftware/amplia:3.14 -- gen-enc-key -q | docker secret create amplia_encryption_key -
```
