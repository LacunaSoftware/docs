## Criação do banco de dados

Siga os procedimentos abaixo para criar um banco de dados para o sistema (você precisa ter um *SQL Server* previamente criado):

1. Na opção **SQL databases**, clique em **+ Create**
1. Na primeira aba (*Basics*), preencha os dados conforme a sua infraestrutura (seguindo a região escolhida para o sistema)
1. Clique na aba **Additional settings**
1. Em **Collation** preencha `Latin1_General_100_CI_AI`
1. Clique em **Review + create**
1. Clique em **Create**

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Uma vez concluida a criação do banco de dados, clique em **Go to resource**. Em seguida, obtenha a *connection string*:

1. Clique em **Connection strings**
1. Tome nota da connection string exibida na seção **ADO.NET (SQL authentication)**

> [!NOTE]
> Substitua na connection string copiada o trecho `{your_password}` pela senha do banco de dados
