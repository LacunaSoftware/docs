```sh
echo -e '#!/bin/bash\ndotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/local/bin/pkie
sudo chmod +x /usr/local/bin/pkie
```
