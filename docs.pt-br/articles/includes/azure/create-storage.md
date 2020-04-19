## Criação de uma *storage account*

Precisamos de uma *storage account* para armazenar arquivos (o sistema armazena arquivos fora do banco de dados para mantê-lo organizado) e também os
logs de sistema. Siga os passos abaixo para criar uma *storage account* (caso queira utilizar uma conta existente, pule essa parte):

1. Em **Storage accounts**, clique em **+ Add**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
   * Em *Performance*, escolha **Standard**
   * Em *Account kind*, escolha **StorageV2**
   * Em *Replication*, escolha a opção que preferir (<a href="https://azure.microsoft.com/documentation/articles/storage-redundancy/" target="_blank">clique aqui</a>
     para detalhes sobre as diferentes opções de replicação).

     > [!TIP]
     > Sugerimos a opção **Geo-redundant storage (GRS)** por ser um meio-termo entre alta resiliência mas com preço relativamente acessível

   * Em *Access tier*, escolha **Hot**
1. Clique em **Review + create** (caso queira restringir o acesso de rede à *storage account*, clique em *Next: Networking* e faça as configurações necessárias)
1. Clique em **Create**

Uma vez concluída a criação da *storage account*, clique em **Go to resource**. Em seguida, obtenha uma *connection string*:

1. Nas configurações da *storage acount*, clique em **Access keys**
1. Na seção **key1**, tome nota do valor do campo **Connection string**
