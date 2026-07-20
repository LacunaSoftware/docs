# Atualização do Rest PKI Core em Azure App Services

Antes de atualizar, verifique se a nova versão exige passos adicionais de migração:

* [Atualização da versão 2.x para 3.0](../update-30.md)
* [Atualização da versão 3.x para 4.0](../update-40.md)

Em seguida, replique a nova imagem de Docker do sistema para o seu *container registry* (substitua `MY_ACR_NAME` pelo nome escolhido durante a instalação
e `4.2.5` pela versão desejada):

```sh
az login
az acr login --name MY_ACR_NAME
az acr import --name MY_ACR_NAME --source docker.io/lacunasoftware/restpkicore:4.2.5 --image restpkicore:4.2.5
```

Por fim, no App Service do sistema, vá em **Deployment Center** e, no campo **Tag**, selecione a nova versão e clique em **Save**.

## Veja também

* [Instalação do Rest PKI Core em Azure App Services](install.md)
