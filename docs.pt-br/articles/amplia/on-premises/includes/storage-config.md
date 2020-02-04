### File storage

Para manter o banco de dados organizado, o Amplia armazena arquivos fora do banco de dados. Os arquivos podem ser armazenados em provedores diferentes.

Na seção **Storage** configura o armazenamento de arquivos. A configuração **Type** define qual provedor deve ser usado e as configurações restantes dependem do provedor escolhido:

* File system
  * **Type**: definir esta configuração como `FileSystem` para armazenar arquivos no sistema de arquivos locais
  * **Path**: defina o caminho da pasta na qual armazenar arquivos. Certifique-se de que o aplicativo tenha acesso à pasta
* [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
  * **Type**: definir esta configuração como `Azure`para armazenar arquivos em uma conta Azure Storage
  * **ConnectionString**: fornecer uma string de conexão para a outra
  * **ContainerName**: o nome do contêiner de blob no qual armazenar arquivos
* Amazon S3 (em breve, entre em contato conosco se você precisar)
