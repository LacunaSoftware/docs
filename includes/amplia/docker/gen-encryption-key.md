```sh
docker run lacunasoftware/amplia:4.20 -- gen-enc-key -q | docker secret create amplia_encryption_key -
```
