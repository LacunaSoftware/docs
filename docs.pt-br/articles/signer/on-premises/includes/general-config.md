Preencha, então, na seção **General**:

* **SiteUrl**: URL publicamente acessível do site (ex: `https://assinador.patorum.com/`). Este endereço é usado para compor emails com links de volta ao site.
* **SiteName**: nome do site, usado como título das páginas web (ex: *Assinador Patorum*)
* **EncryptionKey**: chave gerada acima
* **SupportEmailAdress**: o endereço de e-mail de suporte (usado no rodapé dos e-mails enviados)
* **Theme** (opcional): esquema de cores do site -- esquemas disponíveis:
  * `acr`: amazon + cornell-red
  * `alg`: azure-lime + green
  * `clg`: cerulean-lime + green
  * `cam`: charcoal + amazonite
  * `clc`: cobalt-lemon + curry
  * `dcg`: dark-cerulean + green
  * `dgy`: dark-grey + yellow
  * `dir`: dark-indigo + red
  * `eva`: english-vermillion + arsenic
  * `gdc`: green + dark-coral
  * `idg`: independence-green
  * `osg`: onyx + satin-gold
  * `qbm`: queen-blue + mint
  * `tbg`: teal-blue + gold
* **PersonalAccountsEnabled**:
  * Atribua o valor `true` para deixar o sistema "aberto", ou seja, permitir que usuários se registrem e utilizem livremente o sistema (sem aprovação de um administrador)
  * Atribua o valor `false` para deixar o sistema "fechado", ou seja, exigir que usuários sejam previamente cadastrados em uma organização para poderem utilizar o sistema
* **EnableDocumentTypes**: controla se a seleção de tipo de documento será exibida ao criar documentos
* **EnableElectronicSignature**: controla se assinaturas eletrônicas (sem certificado digital) estarão habilitadas
