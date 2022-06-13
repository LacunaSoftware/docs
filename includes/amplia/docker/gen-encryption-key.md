```sh
docker run lacunasoftware/amplia:3.15 -- gen-enc-key -q | docker secret create amplia_encryption_key -
```
