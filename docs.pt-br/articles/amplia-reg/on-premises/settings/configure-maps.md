# Configuração de mapas - Amplia Reg

> [!IMPORTANT]
> A partir da versão [1.4.0](../changelog.md#v1-4-0), o Amplia Reg **não exige mais uma chave da API Google Maps Embed**. Esta documentação é mantida aqui
> apenas para fins históricos.

O [Amplia Reg](../index.md) ~~usa~~ anteriormente usava a [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) para exibir geolocalizações.

<a name="gen-key" />

## Gerar uma chave da API Google Maps Embed

1. Autentique-se na [Maps Embed API](https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com)
1. Clique no **seletor de projeto** no menu superior e selecione um projeto existente ou crie um novo
1. Clique no botão **Ativar** e aguarde a conclusão do procedimento
1. Você verá uma lista de [APIs ativadas](https://console.cloud.google.com/google/maps-apis/api-list) com a *Maps Embed API* listada
1. Clique em **Credenciais** no menu esquerdo
1. Clique em **Criar credenciais** no menu superior, em seguida em **Chave de API**
1. **Copie** a chave de API gerada
1. Clique no link **Editar chave de API**
1. Na seção *Restrições de API*, clique em **Restringir chave**
1. Pesquise e marque a `Maps Embed API`, em seguida clique em **OK**
1. Clique em **Salvar**

## Configurando o Amplia Reg

Com a chave da API Google Maps Embed em mãos, edite o arquivo de configuração do Amplia Reg e preencha a seção **Maps**, configuração **GoogleApiKey**.

Exemplo (arquivo *.ini* ou *.conf*):

```ini
[Maps]
GoogleApiKey=AIzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

Exemplo (variáveis de ambiente):

```sh
Maps__GoogleApiKey=AIzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

## Veja também

* [Amplia Reg on-premises](index.md)
