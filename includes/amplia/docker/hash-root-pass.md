```sh
docker run -i lacunasoftware/amplia:3.15 -- hash-root-pass -q | docker secret create amplia_root_password_hash -
```
