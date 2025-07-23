```sh
docker run -i lacunasoftware/amplia:4.13 -- hash-root-pass -q | docker secret create amplia_root_password_hash -
```
