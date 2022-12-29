* SQL Server 2016 ou mais recente (recomendada edição *Standard* ou superior)
* Licença PKI SDK (no formato Base64)
* Licença Web PKI (formato Base64/binário) -- necessário apenas se os usuários forem emitir certificados em seus computadores (procedimento de emissão na web)
* Entradas de DNS criadas anteriormente para:
    * Acesso ao painel de controle (veja [Domínio de acesso ao painel de controle](../index.md#dashboard-domain))
    * Publicação de LCRs (veja [Domínios de acesso](../index.md#access-domains))
* (recomendado) Certificado SSL válido para o domínio de acesso ao painel de controle

Você vai precisar também de uma *connection string* para o **banco de dados** previamente criado tendo:

* Collation: `Latin1_General_100_CI_AI`
* Credenciais para um usuário com o papel `db_owner`

> [!NOTE]
> Se você preferir operar o Amplia sem conceder `db_owner` ao usuário da aplicação, siga as instruções [neste artigo](../unprivileged-db-user.md)

> [!WARNING]
> A *collation* do banco de dados **PRECISA SER** `Latin1_General_100_CI_AI`. Criar o banco de dados com uma *collation* diferente provavelmente fará com que a instalação falhe!

Se você precisar de ajuda para preparar o banco de dados, [clique aqui](../prepare-database.md).
