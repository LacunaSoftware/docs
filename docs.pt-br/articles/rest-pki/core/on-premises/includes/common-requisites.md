* Licença de uso da biblioteca **PKI SDK** (em formato binário/Base64)
* Licença de uso do componente **Web PKI** (em formato binário/Base64)
* **Connection string** para um banco de dados SQL Server (versão 2016 ou mais recente) criado previamente com:
  * Collation: `Latin1_General_100_CI_AI` ou `Latin1_General_CI_AI`
  * Credenciais correspondentes a um usuário com papel `db_owner`

> [!NOTE]
> Se preferir operar o Rest PKI Core sem conceder `db_owner` ao usuário da aplicação, siga as instruções [neste artigo](../unprivileged-db-user.md)

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, [clique aqui](../prepare-database.md).
