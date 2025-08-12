```sh
docker run -i lacunasoftware/amplia:4.14 -- hash-root-pass -q | docker secret create amplia_root_password_hash -
```
