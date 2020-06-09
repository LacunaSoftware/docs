# Signer Settings

###  *General* Settings

In **General** section:

* **SiteUrl**: URL publicamente acessível do site (ex.: `https://ca.patorum.com/`). Este endereço é usado para compor emails com links de volta ao site.
* **EncryptionKey**: chave 256 bits usada para criptografar segredos temporiários emitidos pelo site e chaves [armazenamento de chaves em banco de dados](../key-stores/database.md). Veja abaixo como gerar essa chave.
* **AutoUpdateDatabase**: Por padrão, o aplicativo tenta realizar alterações de modelo no banco de dados após uma atualização (quando necessário). Defina como `false` se o aplicativo não tiver
permissões de proprietário sobre o banco de dados.
* **SupportEmailAdress**: o endereço de e-mail de suporte (usado no rodapé dos e-mails enviados)