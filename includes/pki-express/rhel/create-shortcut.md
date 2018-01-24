```sh
echo -e '#!/bin/bash\nscl enable rh-dotnet20 -- dotnet /usr/share/pkie/pkie.dll "$@"' | sudo tee /usr/bin/pkie
sudo chmod +x /usr/bin/pkie
```
