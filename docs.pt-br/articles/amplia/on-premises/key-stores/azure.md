# Armazenamento de chaves em Azure Key Vault

> [!NOTE]
> Armazenamento de chaves em Azure Key Vault são compatíveis com todas as plataformas suportadas.

O [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) pode ser pensado como um HSM em nuvem. As chaves são armazenadas no FIPS 140-2 Nível 2 validadas HSMs por um preço
relativamente baixo de aproximadamente 5 doláres por mês por chave de 4096 bits. Este serviço da Microsoft permite o emprego de HSMs em projetos, que de outra forma, não teriam o orçamento necessário.

> [!TIP]
> A nuvem base da Lacuna Software na instância do Amplia (oferencendo SaaS) armazena todas chaves de AC no Azure Key Vault,
> e recomendamos seu uso em instâncias instaladas tanto na nuvem quanto em servidores locais.

## Procedimento

Para configurar um armazenamento em Azure Key Vault no Amplia, autentique-se no <a href="https://portal.azure.com" target="_blank">portal do Azure</a> e siga os passos abaixo.

### Criação de aplicação e segredo de autenticação

 Crie uma aplicação correspondente à sua instância do Amplia:

1. Na opção **Azure Active Directory**, vá em **App registrations** e clique em **New registration**
1. Digite um nome para a aplicação
1. Deixe os demais campos nas opções padrão
1. Uma vez criada a aplicação, tome nota do **Application (client) ID**

Gere um segredo para identificação da aplicação:

1. Nas configurações da aplicação, clique em **Certificates &amp; secrets**
1. Em **Client secrets**, clique em **New client secret**
1. Preencha uma descrição e na validade escolha **Never** (não expira)
1. **Copie o valor exibido** (não será possível recuperar esse valor posteriormente!)

### Criação do Key Vault

Crie o Key Vault (pule essa parte caso queira usar um Key Vault existente):

1. Na opção **Key Vaults**, clique em **Add**
1. Preencha os dados conforme a sua infraestrutura
1. Na opção *Pricing tier*, escolha **Premium** para poder gerar chaves armazenadas em HSM
1. Uma vez criado o Key Vault, tome nota do **DNS Name**

Conceda permissões à aplicação:

1. Nas configurações do Key Vault, clique em **Access policies**, depois em **Add Access Policy**
1. Em *Configure from template*, não preencha nada
1. Em *Key permissions*, selecione **Get**, **List**, **Create**, **Verify** e **Sign**
1. Em *Select principal*, selecione a aplicação criada no passo 2 e clique em **Select**
1. Deixe os campos *Secret permissions*, *Certificate permissions* e *Authorized application* inalterados
1. Clique em **Add**
1. De volta à tela de *policies*, clique em **Save** (atenção: )

> [!WARNING]
> Esse último passo (clicar no botão **Save** após clicar em **Add**) é necessário, caso contrário as permissões não são salvas!

### Configuração do Amplia

Edite o seu arquivo de configuração JSON ou os settings do seu App Service e adicione à seção **KeyStores** uma seção com um nome
que identifique o Key Vault (veja exemplo abaixo), e coloque as seguintes configurações nesta:

* **Type**: `AzureKeyVault`
* **Endpoint**: *DNS Name* do Key Vault (anotado acima), ex: `https://my-pki.vault.azure.net/`
* **AppId**: campo **Application ID** (anotado acima)
* **AppKey**: chave gerada acima
* **UseHsm**: por padrão, [chaves armazenadas em HSM](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-hsm-protected-keys) são criadas. Para usar chaves de "software", defina este valor para `false`

Exemplo de configuração em arquivo JSON:

```json
"KeyStores": {
	...,
	"MyKeyVault": {
		"Type": "AzureKeyVault",
		"Endpoint": "https://xxx.vault.azure.net/",
		"AppId": "00000000-0000-0000-0000-000000000000",
		"AppKey": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
	},
	...
}
```

Ou, no caso das configurações de um App Service:

Nome da configuração            | Valor
------------------------------- | -------------
`KeyStores:MyKeyVault:Type`     | `AzureKeyVault`
`KeyStores:MyKeyVault:Endpoint` | `https://xxx.vault.azure.net/`
`KeyStores:MyKeyVault:AppId`    | `00000000-0000-0000-0000-000000000000`
`KeyStores:MyKeyVault:AppKey`   | `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=`

## Veja também

* [Amplia - Armazenamento de chaves](index.md)
* [Amplia - Armazenamento de chaves do banco de dados](database.md)
* [Amplia - Armazenamento de chaves via CAPI](capi.md)
* [Amplia - Armazenamento de chaves via CNG](cng.md)
* [Amplia - Armazenamento de chaves via PKCS #11](pkcs11.md)
* [Amplia on premises](../index.md)
