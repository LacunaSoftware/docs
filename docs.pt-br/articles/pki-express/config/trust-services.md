# Serviços de Certificado Digital em Nuvem - PKI Express

O PKI Express tem suporte a assinaturas com certificados digitais em nuvem, providos por prestadores de serviços em nuvem que seguem as especificações do ITI.

## Serviços pré-configurados

Por padrão, alguns serviços já são pré-configurados:

* BirdID (SOLUTI)
* NeoID (SERPRO)
* RemoteID (CERTISIGN)
* SafeID (SAFEWEB)
* VIDaaS (VALID)

Para utilizar esses serviços pré-configurados basta configurar o `clientId` e `clientSecret`:

```sh
pkie config --set trustServices:<service>:clientId=<value>
pkie config --set trustServices:<service>:clientSecret=<value>
```

Exemplo:

```sh
pkie config --set trustServices:BirdID:clientId="00000000000000"
pkie config --set trustServices:BirdID:clientSecret="xxx00xxXXXXxx0x"
```

## Serviços não pré-configurados

Para utilizar serviços não pré-configurados é necessário configurar também o `endpoint` do serviço:

```sh
pkie config --set trustServices:<service>:endpoint=<value>
pkie config --set trustServices:<service>:clientId=<value>
pkie config --set trustServices:<service>:clientSecret=<value>
```

Exemplo:

```sh
pkie config --set trustServices:birdIdHml:endpoint="https://apihom.birdid.com.br/"
pkie config --set trustServices:birdIdHml:clientId="00000000000000"
pkie config --set trustServices:birdIdHml:clientSecret="xxx00xxXXXXxx0x"
```

Serviços não pré-configurados podem também ter outros parâmetros configurados opicionalmente:

* Provedor do serviço:
    ```sh
    pkie config --set trustServices:<service>:provider=<value>
    ```

* URL da logo do serviço:
    ```sh
    pkie config --set trustServices:<service>:badgeUrl=<URL>
    ```

* Estratégia de tratamento em caso de erro, baseado nos serviços pré-configurados:
    ```sh
    pkie config --set trustServices:<service>:protocolVariant=<service>
    ```

## Timeout

Para configurar o timeout da busca por certificados nos provedores, utilize o comando abaixo:

```sh
pkie config --set trustServicesDiscoveryTimeout=<value>
```
