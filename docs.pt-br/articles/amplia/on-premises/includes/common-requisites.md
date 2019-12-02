* SQL Server 2016 ou mais recente (edião recomendada Padrão ou melhor)
* Licença PKI SDK (no formato Base64)
* Licença Web PKI (formato Base64/binário) -- necessário apenas se os usuários irão emitir certificados em seus computadores (procedimento de emissão da web)
* Entradas de DNS criadas anteriormente para:
    * Acesso *dashboard*
    * Publicação LCR (domínios de acesso)
* (recomendado) Certificado SSL válido para o domínio *dashboard*

Você vai precisar também de uma *connection string* para o **banco de dados** previamente criado tendo:

* Collation: `Latin1_General_100_CI_AI`
* Credentials corresponding to a user with the following database roles:
    * If the application should be owner of the database: `db_owner`
    * If the application should only have read and write permissions: `db_datareader` and `db_datawriter`

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, [clique aqui](../prepare-database.md).
