# Integração com Whatsapp

Na versão 1.56.0 foi adicionada a possibilidade de integração para enviar notificações via Whatsapp. 

Para isso, o sistema utiliza a [Whatsapp Business API](https://developers.facebook.com/docs/whatsapp) disponibilizada pela própria Meta.

Abaixo são listados os pré-requisitos desse tipo de integração:

* Ter uma [Meta Business Account](https://business.facebook.com/) verificada.

* Ter uma Whatsapp Business Account associada à Meta Business Account.

* Ter um business app, associada à Meta Business Account.

* Ter um número de telefone (celular ou fixo) verificado associado à sua Whatsapp Business Account.

## Criação do aplicativo

* Acesse o [Dashboard de Desenvolvedores](https://developers.facebook.com/apps/).

* Crie um aplicativo e selecione o tipo `Business`. 

* Associe o aplicativo à sua Business Account.

* Após a criação do aplicativo, selecione a opção Whatsapp.

* Será gerado um número de teste do Whatsapp. Nesse momento sua business account já estará configurada para adicionar e verificar um número real.


## Configuração da conta de Whatsapp

* Acesse a página de [Configurações de Negócio](https://business.facebook.com/settings) da sua Meta Business Account.

* Selecione o item `Contas` e em seguida `Contas do Whatsapp`. Clique no botão `Adicionar` para cadastrar o número que será utilizado para enviar
mensagens de Whatsapp. 

* Caso sua Business Account não esteja verificada ainda, inicie o procedimento de verificação  (pode demorar cerca de dois dias úteis).

* Após verificar sua conta e o número que será utilizado, acesse o [Gerenciador do Whatsapp](https://business.facebook.com/wa/manage/home) da conta 
de Whatsapp criada.

## Configuração de modelos de mensagens

Por exigência da Meta, todas mensagens iniciadas pela aplicação devem ser registradas previamente por meio de modelos. Caso contrário, só poderão ser
enviadas caso o usuário entre em contato previamente com seu número de whatsapp (iniciando assim uma [Conversa](https://developers.facebook.com/docs/whatsapp/conversation-types)).

Uma vez verificado seu número de Whatsapp, acesse a [Gestão de Modelos](https://business.facebook.com/wa/manage/message-templates/) para registrar os modelos
de mensagens que serão enviados pela aplicação.

Como a aplicação suporta 3 idiomas (Português, Inglês e Espanhol), cada modelo deve ter três versões: Portuguese (BR), English e Spanish.

Os modelos possuem parâmetros e, por isso, na criação, deve ser enviado um exemplo dos valores de cada um desses parâmetros. É importante que os valores sejam os mesmos
entre as versões de idiomas do mesmo modelo. 

Além disso, quaisquer URLs que forem adicionadas como exemplos de parâmetros precisam ser funcionais e coerentes com os demais parâmetros.

Os modelos serão revisados pela equipe Meta. Esse processo demora em média dois dias úteis.

Entre em contato com nosso suporte para obter a lista de modelos que devem ser cadastrados, bem como o nome e conteúdo dos templates. Você terá liberdade para mudar o
conteúdo dos modelos desde que não altere a quantidade nem a ordem dos parâmetros.

## Obtenção de credenciais

* Após configurada a conta e os modelos, é preciso gerar um token permanente que será utilizado para acessar API.

* Para gerá-lo, é preciso criar um usuário do tipo `System User`, conforme descrito na página de [Primeiros passos da Business Management API](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started).

* Durante a geração do token, verifique que os escopos `whatsapp_business_messaging` e `whatsapp_business_management` estão selecionados.

* Por fim, garanta que o usuário criado, possui acesso à conta de Whatsapp desejada. Isso deve ser feito em [Configurações de Negócio](https://business.facebook.com/settings) na seção 
Contas do Whatsapp. Selecione a conta desejada e verifique se o usuário consta na aba `Pessoas`.


## Habilitando a Integração

Para habilitar a integração, você deverá fornecer à nossa equipe de suporte os itens abaixo:

1- Identificação do número de telefone (obtido nas configurações de Whatsapp do aplicativo criado).

1- Token de acesso à API.

Se você tem uma instância On-Premises, veja a seção de [Configurações de Whatsapp](../settings.md#whatsapp-settings).