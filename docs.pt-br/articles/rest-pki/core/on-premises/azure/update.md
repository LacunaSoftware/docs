# Atualização do Rest PKI Core em Azure App Services

Replique a última imagem de Docker do sistema para seu *container registry* (substitua `MY_ACR_NAME` pelo nome escolhido no passo anterior):

```sh
az acr import --name MY_ACR_NAME --source docker.io/lacunasoftware/restpkicore:4.6.1 --image restpkicore:4.6.1
```

Em seguida, no App Service do sistema, vá em **Deployment Center** e, no campo **Tag**, selecione a nova versão e clique em **Save**.

## Veja também

* [Instalação do Rest PKI Core em Azure App Services](install.md)
* [Resolução de problemas](troubleshoot/index.md)
