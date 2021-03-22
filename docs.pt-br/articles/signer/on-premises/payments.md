# Pagamentos no Signer

Esta página descreve as opções para obtenção de pagamentos relativos às faturas geradas pelo Sistema de Cobranças.

## Sistema de Cobranças

O Signer possui um Sistema de Cobranças flexível que permite ao administrador da instância escolher quais serviços 
serão tarifados: documento, assinatura, aprovação etc. Caso não esteja visualizando na sua instância as opções 
descritas aqui verifique se o módulo de cobrança foi habilitado.

O Sistema de Cobranças trabalha com a geração de faturas mensais sem data de duração, isto é, após a virada do mês
a fatura é fechada e fica disponível para consulta/pagamento de um usuário ou organização.

O administrador da instância pode escolher se o não pagamento das faturas irá bloquear ou não os usuários/organizações.

As opções disponíveis para processamento de pagamentos estão descritas abaixo:

### Operação Simplificada

Para instâncias com número pequeno de usuários/organizações, a gerência de pagamentos pode ser feita externalmente ao 
sistema.

Nesse modelo, fica a cargo do administrador da instância verificar as faturas fechadas, notificar o cliente responsável
e processar o pagamento de cada fatura.

Uma vez identificado que o pagamento foi realizado, a fatura pode ser consultada e seu status alterado na tela de 
detalhes da fatura pelo administrador:

![Update invoice status](../images/invoice-status.png)

### Operação via Integração

Para instâncias com um grande número de usuários/organizações, recomenda-se que a gerência de pagamentos seja feito de maneira
automatizada.

O primeiro passo para automatizar o processo é configurar o webhook de cobrança da instância. Isso deve ser feito em 
Administração > Cobrança > Integração:

![Billing webhook](../images/billing-webhook.png)

Uma vez configurado o Webhook, o endereço especificado receberá uma requisição POST após o fechamento de cada fatura.

Segue abaixo um exemplo desta requisição:

<pre>
{
	"type": "InvoiceClosed",
	"data":
	{
		"id": 126,
		"month": 9,
		"year": 2020,
		"value": 5,
		"invoiceTotals": [
			{
				"transactionType": "Document",
				"price":
				{
					"transactionType": "Document",
					"pricingType": "Simple",
					"price": 0.5,
					"priceRanges": null
				},
				"total": 10,
				"value": 5
			},
			{
				"transactionType": "ElectronicSignature",
				"price":
				{
					"transactionType": "ElectronicSignature",
					"pricingType": "NoCharge",
					"price": null,
					"priceRanges": null
				},
				"total": 1,
				"value": 0
			},
			{
				"transactionType": "Signature",
				"price":
				{
					"transactionType": "Signature",
					"pricingType": "Range",
					"price": null,
					"priceRanges": [
						{
							"limit": 10,
							"price": 0
						},
						{
							"limit": 20,
							"price": 0.5
						},
						{
							"limit": null,
							"price": 0.25
						}
					]
				},
				"total": 8,
				"value": 0
			}
		],
		"organization":
		{
			"id": "6a49d03c-5f3f-428c-8221-8474366f98d0",
			"name": null,
			"identifier": null,
			"owner":
			{
				"id": "12c1d41a-77b2-404e-a155-84cc7d0f93e8",
				"name": null
			}
		},
		"billingInformation":
		{
			"type": "Individual",
			"individual":
			{
				"name": "Danilo Igor das Neves",
				"identifier": "57972418624"
			},
			"company": null,
			"contactName": "",
			"email": "daniloneves@mailinator.com",
			"phone": "+55 (84) 3619-9479",
			"streetAddress": "Rua Principal, s/n",
			"addressNumber": "696",
			"additionalAddressInfo": "Apto 110",
			"neighborhood": "Bom Descanso",
			"address": "",
			"address2": "",
			"zipCode": "59430972",
			"city": "Lagoa de Velhos",
			"state": "RN"
		}
	}
}
</pre>

Para a referência completa da requisição veja [o schema Webhooks.InvoiceClosedModel no Swagger](https://www.dropsigner.com/swagger/index.html#model-Webhooks.InvoiceClosedModel).

Para exemplos de código, veja os links abaixo:

* [C#](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/InvoiceWebhookHandlingScenario.cs)

* [Java]() em construção.

> [!NOTE]
> O Webhook pode ser utilizado também na Operação Simplificada.

O sistema que receber o Webhook deve processar o evento da fatura e gerar a cobrança correspondente notificando o email especificado
nos dados de cobrança.

Ao detectar o pagamento da fatura, ele deve enviar uma requisição ao Signer para informar que a fatura foi paga, conforme definido
abaixo:

```javascript
PUT /api/invoices/{id}/payment

{
	"isPaid": true
}
```

Para exemplos de código, veja os links abaixo:

* [C#](https://github.com/LacunaSoftware/SignerSamples/blob/master/dotnet/console/Console/Scenarios/InvoiceWebhookHandlingScenario.cs)

* [Java]() em construção.

> [!WARNING]
> Para esta requisição será necessária uma chave de API com privilégios de administração de cobrança no sistema.

#### Criação de chave de API de administração de cobrança

Para gerá-la crie uma aplicação selecionado a organização Sys Admin: 

![Applications](../images/applications.png)

![Create application](../images/create-application.png)

Em seguida gere a chave na opção "Chaves":

![Application keys](../images/application-keys.png)

![Application create key](../images/application-keys-add.png)

![Create key submit](../images/create-key.png)

### Operação via Gateway de pagamentos iugu

Oferece meios de pagamentos automatizados diretamente no Signer com uma integração à [iugu](https://www.iugu.com/). Desta forma, depois que uma fatura é fechada os próprios usuários/organizações podem realizar o pagamento com cartão de crédito, boleto bancário ou Pix.

#### Integração do Signer com a iugu

A iugu possui [planos de assinatura](https://www.iugu.com/planos/) e cada plano traz funcionalidades, mudanças nas tarifas e custos por transação que devem ser avaliados pelo administrador da instância, mas o Signer é capaz de funcionar plenamente com o plano mais básico "Conheça a iugu".

Para que a integração entre a instância do Signer e a iugu possam ser feitas, são necessários algumas etapas. O primeiro passo é realizar o [cadastro na iugu](https://auth.iugu.com/new_user?service=https%3A%2F%2Falia.iugu.com%2F).

O próximo passo, após o cadastro, é acessar o [painel de controle](https://alia.iugu.com/) da iugu e gerar um API Token. Acesse as configurações, depois Integração via API e clicar no botão Novo.

![iugu config API](../images/iugu_config_api.png)

Depois escolha o tipo "Produção" e escreva na descrição: "API Signer Prod".

![iugu new API](../images/iugu_new_api.png)

Em seguida será preciso obter o ID da conta na iugu. Acesse as configurações, depois Informações gerais. Logo abaixo de "Conta" será exibido o ID da sua conta na iugu.

![iugu account id](../images/iugu_get_accountId.png)

O próximo passo é configurar o Webhook para notificar o Signer sobre os pagamentos, também na tela de configurações, acesse "Comunicação via Gatilhos" e depois clique no botão Novo.

![iugu config Webhook](../images/iugu_config_webhook.png)

O campo url deve ser preenchido com o domínio e ter a seguinte rota:

```
https://seu-signer.com.br/api/webhooks/iugu/invoice/changed
```

O campo autorização deve ser preenchido da seguinte forma:

```javascript
Bearer WebhooksAuthKey
```
`WebhooksAuthKey` deve ser substituído por uma chave de sua escolha, mas é recomendado a escolha de uma combinação de caracteres de pelo menos 10 dígitos.

> [!WARNING]
> * O webhook deve ser gerado no ambiente de produção, como mostra no topo da imagem acima.
> * O campo de autorização deve obrigatoriamente iniciar com `Bearer ` como mostrado no exemplo.

![iugu new API](../images/iugu_new_webhook.png)

O último passo é desabilitar a cobrança automática diretamente pela iugu, pois o Signer já possui um sistema de cobrança automática implementado com regras mais adequadas. Acesse a opção Recebimento, depois Régua de Cobrança e clique em Alterar fluxo de cobrança.

![iugu config Charge](../images/iugu_config_charge.png)

Deixe somente o fluxo "Expira a fatura" 5 dias após o vencimento.

![iugu change Charge](../images/iugu_change_charge.png)

> [!NOTE]
> A opção de expira a fatura é um mecanismo da iugu para marcar uma fatura como expirada após alguns dias depois do vencimento. É recomendado pelo menos 5 dias, pois pagamentos com boleto que tenham sido feito até o vencimento possam ter 5 dias para compensação.

#### Fazer pagamentos diretamente no Signer

Para a realização de pagamentos os dados de faturamento necessitam de uma nova validação, portanto todos os usuários e organizações que tenham os dados de faturamento já preenchido precisarão preencher novamente o endereço. Uma mensagem na tela de Cobranças para usuários e Faturas para organizações será exibida, informando que o endereço precisa ser preenchido novamente.

![Billing address error message](../images/invoices-billing-address-error-message.png)

Após os dados de faturamento serem submetidos novamente, será exibido um card logo abaixo para que o usuário ou a organização possa definir um método de pagamento padrão. 
> [!NOTE]
> O método de pagamento padrão também pode ser escolhido no momento de pagamento de uma fatura.

![Select payment method](../images/select-payment-method.png)

Os meios de pagamentos disponíveis para o usuário/organização são Pix, boleto bancário e cartão de crédito. Para cartões de crédito é possível selecionar um que já tenha sido cadastrado ou cadastrar um novo.

![Payment methods](../images/payment-methods.png)

> [!NOTE]
> As bandeiras aceitas para pagamentos com cartão de crédito são:
> * American Express
> * Diners
> * Elo
> * MasterCard
> * Visa

Quando uma fatura é fechada e o usuário/organização já regularizou as pendências nos dados de faturamento, o botão de pagar é exibido.

![Invoice details pay](../images/invoice-details-pay.png)

![Pay invoice](../images/pay-invoice.png)

Após o pagamento, o status da fatura é atualizada com o método de pagamento utilizado, dia e horário.

![Paid invoice](../images/paid-invoice.png)

#### Falhas de pagamento com cartão de crédito

O pagamento de uma fatura com cartão de crédito pode ser negado por diversas causas. Um código de erro será exibido no momento do pagamento e pode ser consultado nessa [lista de erros](https://support.iugu.com/hc/pt-br/articles/206858953-Como-identificar-o-erro-da-tentativa-de-pagamento-).

![Payment with creditcard failed](../images/payment-with-creditcard-failed.png)

> [!WARNING]
> Em alguns casos, é possível que o proprietário do cartão receba via SMS ou no APP do cartão, a informação de cobrança realizada com sucesso, porém, caso a fatura do usuário/organização não conste como PAGA, com retorno de código de erro, este lançamento de cobrança é automaticamente corrigido na fatura do cartão, dentro do prazo de 7 a 10 dias úteis.

#### Cobrança automática

O Signer possui um sistema de cobrança automática para cartão de crédito que é feito quando o usuário/organização salva um cartão de crédito como método de pagamento padrão.

A cobrança automática é agendada para a data de vencimento da fatura, mas quando há muitos cartões na instância para ser feita a cobrança e caso uma parte não consiga ser feita em um único dia, no dia seguinte será feito a cobrança automática para os cartões restantes.

Existem alguns casos que a cobrança automática não será feita:
* O método de pagamento padrão do usuário/organização no momento de fechamento da fatura não ser cartão de crédito.
* Caso uma fatura seja paga antes do dia de vencimento.
* Caso o usuário/organização clique no botão para pagar fatura e escolha boleto bancário, será exibido uma mensagem de confirmação. Caso o boleto seja gerado, a cobrança automática será cancelada somente para essa fatura. Mecanismo para evitar duplo pagamento.

Uma forma de verificar se a cobrança automática está agendada é consultar nos detalhes da fatura se existe o card com as informações de cobrança automática como na imagem abaixo.

![Invoice auto charge](../images/invoice-auto-charge.png)

## Sistema de Nota Fiscal de Serviços Eletrônica (NFS-e)

Permite a emissão e cancelamento de NFS-e para faturas pagas diretamente no Signer com uma integração ao [NFE.io](https://nfe.io/)

### Integração do Signer com o NFE.io

Atualmente as principais capitais do Brasil já possuem integração, porém a lista completa de prefeituras já integradas precisa ser solicitada à equipe comercial do NFE.io, juntamente com os preços. 

#### Primeiros passos

1. Faça o credenciamento na prefeitura para emissão de NFS-e, utilize o [documento da NFE.io](https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/credenciamento-prefeitura/).
2. Criar uma conta - https://nfe.io/docs/nossa-plataforma/criar-conta/
3. Criar uma empresa - https://nfe.io/docs/nossa-plataforma/criar-empresa/ 
4. Insira os dados fiscais - https://nfe.io/docs/nossa-plataforma/alterar-empresa/ 
5. Upload do certificado digital - https://nfe.io/docs/nossa-plataforma/upload-certificado/ 
6. [Entrar em contato com o NFE.io](https://nfe.io/contato/) para negociação de preços e ativação da conta para produção.
7. Ainda em contato com o NFE.io, consulte se a prefeitura utilizada para emitir a nota exige o CNAE (Classificação Nacional de Atividades Econômicas). Caso seja necessário utilize a [busca online CNAE](https://concla.ibge.gov.br/busca-online-cnae.html) do IBGE.
8. Caso existam dúvidas específicas sobre NFS-e, a NFE.io disponibiliza um [documento](https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/conceitos/) que resume explicações sobre a Nota Fiscal de Serviço.

#### ApiKey e CompanyId

Depois dos primeiros passos e a conta pronta para produção, é preciso obter a chave de acesso e o id da empresa. Acesse o menu Empresas, depois clique no nome da empresa que deseja emitir a NFS-e.

![Select company](../images/nfeio-companies.png)

Depois, deslize pela página até encontrar o card Chaves de Acesso. Nesse card estão a chave de acesso (Api Key) e a empresa ID (CompanyId).

![Api key and Company ID](../images/nfeio-company-and-api.png)

#### Criação do Webhook

O próximo passo é a criação do webhook, serviço responsável por notificar o Signer quando NFS-e forem emitidas ou canceladas. Acesse a opção Conta, deslize a página e clique no card Webhooks.

![Webhooks card](../images/nfeio-webhook-option.png)

Depois clique no botão Criar Webhook

![Create webhook](../images/nfeio-create-webhook.png)

Selecione o tipo de webhook sendo NFS-e e configure os campos conforme a imagem abaixo:

![Config webhook](../images/nfeio-config-webhook.png)

O campo endereço (URL) deve ser preenchido com o domínio e ter a seguinte rota:
```
https://seu-signer.com.br/api/webhooks/nfeio/nfse/changed
```

Por fim, o campo senha para autenticação da mensagem (HMAC) pode ser uma senha qualquer, mas é recomendado que tenha pelo menos 8 dígitos.

#### Código de serviço

O Código de Serviço é um número que define o tipo de serviço prestado para ser utilizado na NFS-e. Esse código é fornecido pela prefeitura que será emitido a nota, assim como a aliquota de imposto municipal.

O NFE.io disponibiliza uma lista de serviços cadastrados para a cidade que será emitida a NFS-e. Acesse o menu Empresas, selecione a empresa que será emitida a NFS-e e clique no card Lista de serviços cadastrados.

![Companies](../images/nfeio-companies.png)

![Service codes](../images/nfeio-list-service-codes.png)

Como mencionado anteriormente, cada prefeitura possui sua própria lista de códigos e sua descrição. Usando Brasília como exemplo, o Signer se enquadra no código ``0103`` , mas caso haja dúvidas sugerimos que consulte o contador de sua empresa.

![Brasília service codes](../images/nfeio-brasilia-service-codes.png)

### Emissão e cancelamento de NFS-e diretamente no Signer

#### Emitir notas

Depois que todos os parâmetros tenham sido configurados com o NFE.io e o Signer, será possível emitir notas diretamente pela página de Detalhes da fatura, para faturas pagas. 

![Issue NFS-e](../images/issue-nfse.png)

> [!NOTE]
> * Para emitir ou cancelar notas é preciso de permissões de administrador da instância
> * O sistema de notas fiscais não depende de integração com a iugu para funcionar 
> * Caso a instância do Signer também possua integração com a iugu, ao realizar o pagamento da fatura, automaticamente será feito o pedido de emissão da NFS-e.

> [!WARNING]
> A emissão e o cancelamento de NFS-e depende do sistema da prefeitura. Se o sistema da prefeitura estiver instável, algumas notas podem demorar horas ou até dias para serem emitidas/canceladas.

Também é possível emitir uma NFS-e para uma fatura com a requisição abaixo:

```javascript
POST /api/invoices/{id}/receipts
```

Quando a nota fiscal é emitida, um e-mail do próprio NFE.io é enviado ao usuário/organização responsável pela fatura com o PDF e o XML da NFS-e. Além disso é possível baixar ou visualizar a nota na página de Detalhes da fatura.

![View or Download NFS-e](../images/view-or-download-nfse.png)

#### Cancelar notas

Depois que uma NFS-e é emitida, seu cancelamento pode ser feito na tela de Detalhes da fatura.

![Cancel NFS-e](../images/cancel-nfse.png)

Também é possível cancelar uma NFS-e para uma fatura com a requisição abaixo:

```javascript
DELETE /api/invoices/{id}/receipts
```

> [!WARNING]
> O cancelamento de uma nota só pode ser feito depois de emitida, caso ainda esteja em processo de emissão deverá aguardar até que seja emitida. A mesma lógica se aplica para emitir uma nova nota que só pode ser feito após o cancelamento ser completado.