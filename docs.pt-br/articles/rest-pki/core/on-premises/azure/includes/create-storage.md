## Criação de uma *storage account*

Precisamos de uma *storage account* para armazenar arquivos (o sistema armazena arquivos fora do banco de dados para mantê-lo organizado) e também os
logs de sistema. Siga os passos abaixo para criar uma *storage account* (caso queira utilizar uma conta existente, pule essa parte):

1. Em **Storage accounts**, clique em **+ Create**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
   * Em *Performance*, escolha **Standard**
   * Em *Redundancy*, escolha a opção que preferir (sugerimos a opção **Zone-redundant storage (ZRS)** -- <a href="https://azure.microsoft.com/documentation/articles/storage-redundancy/" target="_blank">clique aqui</a>
     para detalhes sobre as diferentes opções de replicação)
1. Clique em **Review**
1. Clique em **Create**

Uma vez concluída a criação da *storage account*, clique em **Go to resource**. Em seguida, obtenha uma *connection string*:

1. Nas configurações da *storage acount*, clique em **Access keys**
1. Na seção **key1**, tome nota do valor do campo **Connection string**
