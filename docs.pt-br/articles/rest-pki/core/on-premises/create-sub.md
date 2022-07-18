# Criação de organização - Rest PKI Core

O [Rest PKI Core](../index.md) suporta múltiplas "organizações", ou "contas", cada uma tendo suas próprias aplicações, chaves de API, contextos de segurança etc.

Para criar uma organização, siga os passos abaixo. Você precisa ter privilégios administraticos globais na instância para realizar esse procedimento
(papel `Proprietário` ou `Contribuidor` no Sys Admin).

1. Autentique-se no painel de controle da sua instância
1. No canto superior direito, clique no retângulo com seu nome e em seguida em **Sys Admin**
1. Na página de organizações, clique em **Adicionar**
1. Preencha o **nome** da nova organização e opcionalmente um apelido, em seguida clique em **Criar**
1. Aceite a recomendação para recarregar a página clicando em **OK**

> [!NOTE]
> Organizações são armazenadas em cache em cada servidor web, por isso essa mudança pode demorar até 1 minuto para ser propagada.

Em seguida, você provavelmente desejará **adicionar um usuário com privilégios administrativos** à organização:

1. Espere um minuto inteiro para a criação da organização ser propagada
1. Recarregue a página manualmente clicando no botão ↻ do seu navegador ou pressionando a tecla F5
1. Clique no retângulo com seu nome no canto superior direito, em seguida em **Sair do Sys Admin**
1. No menu esquerdo, clique em **Usuários**, em seguida em **Adicionar**
1. Pesquise por um usuário digitando seu nome ou endereço de email. Se o usuário ainda não tiver se registrado, você não o encontrará. Nesse caso, preencha
   o endereço de email completo dele.
1. Em *Organização*, selecione a organização recém-criada
1. Escolha um ou mais papéis para o usuário. Para conceder privilégios administrativos máximos ao usuário sobre a organização, marque o papel `Administrador`
1. Clique em **Adicionar usuário**

> [!NOTE]
> Se a organização não aparecer na lista de organizações, provavelmente a propagação ainda está em curso. Aguarde mais alguns segundos e recarregue a página.

Se você selecionou um usuário existente no passo 5, o usuário já está com acesso e pode imediatamente acessar o painel de controle. Nenhuma notificação será enviada,
você mesmo precisa notificar o usuário.

Caso o usuário ainda não tenha se registrado, ele receberá um email de convite com instruções o guiando pelo processo de cadastro e, ao final do processo, o acesso
à organização será concedido.

Uma vez que o usuário consiga acessar o painel de controle da organização, ele mesmo pode criar uma chave de API para integração seguindo os passos no artigo
[Primeiros passos](../integration/get-started.md).
