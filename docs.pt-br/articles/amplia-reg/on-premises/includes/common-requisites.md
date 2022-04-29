* Instância do [Amplia](../../../amplia/index.md)
* Licença do [PKI SDK](../../../pki-sdk/index.md) (no formato Base64)
* Licença do [Web PKI](../../../web-pki/index.md) (formato Base64/binário)
* **Entrada de DNS** criada anteriormente para o site
* *Connection string* para um banco de dados em **SQL Server** (2016 ou mais recente) previamente criado com:
  * Collation: `Latin1_General_100_CI_AI`
  * Credenciais para um usuário com o papel `db_owner`

> [!NOTE]
> Se você preferir operar o Amplia Reg sem conceder `db_owner` ao usuário da aplicação, siga as instruções [neste artigo](../unprivileged-db-user.md)

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, [clique aqui](../prepare-database.md).
