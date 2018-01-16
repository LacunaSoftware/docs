```sh
echo -e '#!/bin/bash\ndotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/bin/pkie
sudo chmod +x /usr/bin/pkie
```
