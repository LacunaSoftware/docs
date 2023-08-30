```sh
docker run lacunasoftware/amplia:4.6 -- gen-enc-key -q | docker secret create amplia_encryption_key -
```
