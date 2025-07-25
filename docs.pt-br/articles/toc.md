﻿# [Bem-vindo](welcome/index.md)
## [Contribuindo](welcome/contributing.md)
## [Política de Privacidade](welcome/privacy-policy.md)

<!-- Start of PKI Solutions Guide -->
# [Certificação Digital](pki-guide/index.md)
## [Assinaturas digitais](pki-guide/signatures.md)
## [Assinaturas web](pki-guide/web-signatures/index.md)
### [Assinaturas web remotas](pki-guide/web-signatures/remote.md)
### [Assinaturas web locais](pki-guide/web-signatures/local.md)
## [Assinaturas de servidor](pki-guide/server-signatures.md)
## [Login com certificado](pki-guide/cert-auth.md)
## [Certificados de teste](pki-guide/test-certs.md)
## [Certificados confiados pela Adobe](pki-guide/adobe-trust.md)
<!-- End of PKI Products Guide -->

<!-- Start of Web PKI -->
# [Web PKI](web-pki/index.md)
## [Primeiros passos](web-pki/get-started.md)
## [Propriedades dos certificados](web-pki/cert-properties.md)
## [Personalizando a listagem de certificados](web-pki/cert-select.md)
## [Pré-validação de certificados](web-pki/cert-validation.md)
## [Browsers suportados](web-pki/browser-support.md)
## [Instalação e distribuição de componentes do Web PKI via GPO](web-pki/installation-webpki-gpo.md)
## [Licenciamento](web-pki/licensing.md)
## [Chamadas assíncronas](web-pki/async.md)
## [Callback de erro padrão](web-pki/default-error-callback.md)
## [Customizando o comportamento quando o componente não estiver instalado](web-pki/customizing-not-installed.md)
## [Utilizando uma página de instalação personalizada](web-pki/brand.md)
## [Callbacks, AngularJS and Angular2+](web-pki/angularjs.md)
## [Filtros de certificados](web-pki/filters.md)
## [Configurando RestPKI alternativo](web-pki/customizing-restpki-url.md)
## [Atualizações](web-pki/update.md)
## [Requisição Autenticada](web-pki/auth-request.md)
## [Logs](web-pki/logs.md)
## [Segurança](web-pki/security.md)
## [Substituição do ICPBravoAccess](web-pki/icpbravo-replacement.md)
## [FAQ](web-pki/faq/index.md)
### [signData vs. signHash](web-pki/faq/sign-data-vs-hash.md)
### [Qual é o formato da assinatura retornada pelas funções signData e signHash?](web-pki/faq/sign-data-output.md)
### [Como posso realizar uma assinatura digital utilizando o Web PKI?](web-pki/faq/digital-signature.md)
### [Suporte a SSL com o certificado do usuário?](web-pki/faq/ssl.md)
## [API](web-pki/api-reference/index.md)
### [Versões da API](web-pki/api-reference/versions.md)
## [Política de Privacidade](web-pki/privacy-policy.md)
<!-- End of Web PKI -->

<!-- Start of Rest PKI -->
# [Rest PKI](rest-pki/index.md)
## [Usando em PHP](rest-pki/php/index.md)
### [PHP 5.5+](rest-pki/php/current.md)
### [PHP 5.3/5.4](rest-pki/php/legacy.md)
### [PHP 5.2](rest-pki/php/legacy52.md)
### [Convertendo do PKI Express](rest-pki/php/convert-from-express.md)
## [Usando em Java](rest-pki/java/index.md)
### [Spring MVC (Java 7+)](rest-pki/java/mvc.md)
### [Spring MVC (Java 6)](rest-pki/java/mvc-java6.md)
### [Gerando códigos alfanuméricos](rest-pki/java/alpha-codes.md)
### [Convertendo do PKI Express](rest-pki/java/convert-from-express.md)
## [Usando em .NET](rest-pki/dotnet/index.md)
### [ASP.NET MVC](rest-pki/dotnet/mvc.md)
### [ASP.NET Web Forms](rest-pki/dotnet/web-forms.md)
### [ASP.NET Core](rest-pki/dotnet/netcore.md)
### [Gerando códigos alfanuméricos](rest-pki/dotnet/alpha-codes.md)
## [Usando em Python](rest-pki/python/index.md)
### [Flask](rest-pki/python/flask.md)
### [Convertendo do PKI Express](rest-pki/python/convert-from-express.md)
## [Usando em Node.js](rest-pki/nodejs/index.md)
### [MVC](rest-pki/nodejs/mvc.md)
### [Single Page Application (SPA)](rest-pki/nodejs/spa.md)
### [Convertendo do PKI Express](rest-pki/nodejs/convert-from-express.md)
## [Usando em Ruby](rest-pki/ruby/index.md)
### [Ruby on Rails](rest-pki/ruby/rails.md)
### [Convertendo do PKI Express](rest-pki/ruby/convert-from-express.md)
## [Disponibilidade de exemplos](rest-pki/samples-availability.md)
## [Códigos de retorno](rest-pki/return-codes.md)
## [Tags PAdES](rest-pki/pades-tags.md)
## [On premises](rest-pki/on-premises/index.md)
### [Setup em Windows Server](rest-pki/on-premises/windows-setup/index.md)
#### [Instalação](rest-pki/on-premises/windows-setup/install/index.md)
#### [Atualização](rest-pki/on-premises/windows-setup/update.md)
#### [Resolução de problemas](rest-pki/on-premises/windows-setup/troubleshoot/index.md)
### [Setup em Azure App Service](rest-pki/on-premises/azure-setup.md)
### [Atualização do banco de dados](rest-pki/on-premises/database-update.md)
### [Verificando a versão instalada](rest-pki/on-premises/check-version.md)
### [Dimensionamento](rest-pki/on-premises/sizing.md)
### [Configuração de Carimbos de Tempo](rest-pki/on-premises/configure-timestamping.md)
### [Configuração de Storage](rest-pki/on-premises/configure-storage.md)
### [Configuração de Proxy](rest-pki/on-premises/configure-proxy.md)
### [Alterando a licença](rest-pki/on-premises/change-license.md)
### [Recuperação de senha de admin](rest-pki/on-premises/admin-recover.md)
## [Configuração de Data e Hora](rest-pki/configure-date.md)
## [Solicitando carimbos de tempo](rest-pki/requesting-timestamps.md)
## [Resolução de problemas](rest-pki/troubleshoot/index.md)
### [Erro "Could not get pending signature"](rest-pki/troubleshoot/could-not-get-pending-sig.md)
## [Política de Privacidade](rest-pki/privacy-policy.md)
## [Histórico de versões](rest-pki/changelog.md)
<!-- Start of Rest PKI Core submenu -->
## [Rest PKI Core](rest-pki/core/index.md)
### [Guia de Integração](rest-pki/core/integration/index.md)
#### [Primeiros passos](rest-pki/core/integration/get-started.md)
#### [Sessões de assinatura](rest-pki/core/integration/signature-sessions/index.md)
##### [Requisitos de certificados](rest-pki/core/integration/signature-sessions/certificate-requirements.md)
##### [Validação de arquivos](rest-pki/core/integration/signature-sessions/file-validation.md)
##### [Processamento em background](rest-pki/core/integration/signature-sessions/background-processing.md)
##### [Metadados de documentos](rest-pki/core/integration/signature-sessions/document-metadata.md)
#### [Referenciando arquivos](rest-pki/core/integration/file-referencing.md)
#### [Webhooks](rest-pki/core/integration/webhooks.md)
#### [Códigos de erro](rest-pki/core/integration/error-codes.md)
#### [Utilitário cliente](rest-pki/core/integration/client-tool/index.md)
##### [sign](rest-pki/core/integration/client-tool/sign.md)
##### [list-certs](rest-pki/core/integration/client-tool/list-certs.md)
##### [allocate-keys](rest-pki/core/integration/client-tool/allocate-keys.md)
### [On premises](rest-pki/core/on-premises/index.md)
#### [Setup em Windows Server](rest-pki/core/on-premises/windows-server.md)
#### [Setup em Linux](rest-pki/core/on-premises/linux/index.md)
##### [Instalação em Ubuntu Server](rest-pki/core/on-premises/linux/install-ubuntu.md)
##### [Instalação em Rocky Linux](rest-pki/core/on-premises/linux/install-rocky.md)
##### [Atualização](rest-pki/core/on-premises/linux/update.md)
##### [Resolução de problemas](rest-pki/core/on-premises/linux/troubleshoot/index.md)
###### [Verificando os logs](rest-pki/core/on-premises/linux/troubleshoot/check-logs.md)
#### [Preparando o banco de dados](rest-pki/core/prepare-database.md)
#### [Setup em Docker](rest-pki/core/on-premises/docker.md)
#### [Utilitário de linha de comando](rest-pki/core/on-premises/tool/index.md)
##### [gen-enc-key](rest-pki/core/on-premises/tool/gen-enc-key.md)
##### [hash-root-pass](rest-pki/core/on-premises/tool/hash-root-pass.md)
##### [update-db](rest-pki/core/on-premises/tool/update-db.md)
##### [test-email](rest-pki/core/on-premises/tool/test-email.md)
#### [Configuração de storage](rest-pki/core/on-premises/configure-blob-storage.md)
#### [Configuração de timestamping](rest-pki/core/on-premises/configure-timestamp.md)
#### [Configuração de OIDC](rest-pki/core/on-premises/configure-oidc.md)
#### [Configuração de envio de email](rest-pki/core/on-premises/configure-email.md)
#### [Preparando o banco de dados](rest-pki/core/on-premises/prepare-database.md)
#### [Operando sem db_owner](rest-pki/core/on-premises/unprivileged-db-user.md)
#### [Criando uma organização](rest-pki/core/on-premises/create-sub.md)
#### [Verificando a versão instalada](rest-pki/core/on-premises/check-version.md)
#### [Atualizando para 3.0](rest-pki/core/on-premises/update-30.md)
#### [Logs](rest-pki/core/on-premises/logging.md)
#### [Verificações de vulnerabilidades](rest-pki/core/on-premises/vulnerabilities.md)
### [Guia de Operação](rest-pki/core/operation/index.md)
#### [Monitoramento de timestamping](rest-pki/core/operation/monitor-timestamping.md)
### [Solicitando carimbos de tempo](rest-pki/core/requesting-timestamps.md)
### [Histórico de versões](rest-pki/core/changelog.md)
<!-- End of Rest PKI Core submenu -->
<!-- End of Rest PKI -->

<!-- Start of PKI SDK -->
# [PKI SDK](pki-sdk/index.md)
## [Primeiros Passos](pki-sdk/get-started/index.md)
### [Acessando pacotes nuget](pki-sdk/get-started/nuget.md)
### [Licenciamento](pki-sdk/get-started/licensing.md)
## [Certificados](pki-sdk/certificates/index.md)
### [Carregando certificados](pki-sdk/certificates/decoding.md)
### [Certificados com chave privada associada](pki-sdk/certificates/certs-with-key.md)
### [Validando certificados](pki-sdk/certificates/validation.md)
### [Autenticação com certificado](pki-sdk/certificates/auth.md)
### [Construção assistida de cadeias](pki-sdk/certificates/chain-building.md)
### [Certificados de Atributo](pki-sdk/certificates/attribute-certs.md)
### [Certificados em Nuvem](pki-sdk/cloud-certificates/index.md)
## [Assinaturas](pki-sdk/signatures/index.md)
### [Assinaturas padrão CAdES](pki-sdk/signatures/cades/index.md)
#### [Finalização assíncrona de assinaturas](pki-sdk/signatures/cades/finisher.md)
#### [Compressão de assinaturas](pki-sdk/signatures/cades/compression.md)
#### [Co-assinatura](pki-sdk/signatures/cades/co-sign.md)
### [Assinaturas padrão PAdES](pki-sdk/signatures/pades/index.md)
#### [Representação Visual](pki-sdk/signatures/pades/visual-rep/index.md)
##### [Definindo um container](pki-sdk/signatures/pades/visual-rep/containers.md)
##### [Exemplos completos](pki-sdk/signatures/pades/visual-rep/samples.md)
#### [LTV (Long Term Validation)](pki-sdk/signatures/pades/ltv.md)
#### [Assinaturas em série](pki-sdk/signatures/pades/co-sign.md)
#### [Validação do Adobe Reader](pki-sdk/signatures/pades/adobe-validation.md)
### [Assinaturas padrão XML](pki-sdk/signatures/xml/index.md)
#### [Modos de inclusão](pki-sdk/signatures/xml/insertion.md)
#### [Resolução de IDs](pki-sdk/signatures/xml/id-resolution.md)
#### [Assinatura de conteúdo externo](pki-sdk/signatures/xml/detached-resources.md)
### [Assinaturas web remotas](pki-sdk/signatures/web-remote.md)
### [Políticas de assinatura](pki-sdk/signatures/policies/index.md)
#### [Mapeadores de política](pki-sdk/signatures/policies/mappers.md)
#### [Políticas ICP-Brasil](pki-sdk/signatures/policies/pki-brazil.md)
#### [Customização de políticas](pki-sdk/signatures/policies/customization.md)
#### [Políticas com referências, mas sem valores](pki-sdk/signatures/policies/revocation-refs-without-values.md)
#### [Políticas com grace period](pki-sdk/signatures/policies/grace-period.md)
## [Configurações](pki-sdk/config.md)
## [Pacotes nuget opcionais](pki-sdk/optional-packages/index.md)
### [Azure Connector](pki-sdk/optional-packages/azure-connector/index.md)
#### [Azure Key Vault](pki-sdk/optional-packages/azure-connector/key-vault.md)
### [Amazon Connector](pki-sdk/optional-packages/amazon-connector.md)
### [Entity Framework Connector](pki-sdk/optional-packages/ef-connector.md)
### [NLog Connector](pki-sdk/optional-packages/nlog-connector.md)
## [.NET Standard / .NET Core](pki-sdk/net-standard.md)
## [Gerando códigos alfanuméricos](pki-sdk/alpha-codes.md)
## [Histórico de versões](pki-sdk/changelog.md)
## [Guia da API](xref:Lacuna.Pki)
<!-- End of PKI SDK -->

<!-- Start of PKI Express -->
# [PKI Express](pki-express/index.md)
## [Instalação](pki-express/setup/index.md)
### [Linux Ubuntu/Mint](pki-express/setup/linux-ubuntu.md)
### [Linux Red Hat Enterprise](pki-express/setup/linux-rhel.md)
### [Linux CentOS/Oracle/Fedora](pki-express/setup/linux-centos.md)
### [Windows](pki-express/setup/windows.md)
### [Ativação manual](pki-express/setup/manual-activation.md)
## [Configuração](pki-express/config/index.md)
### [Logs](pki-express/config/log.md)
### [Pasta temporária](pki-express/config/temp-dir.md)
### [Proxy](pki-express/config/proxy.md)
### [LAPP](pki-express/config/lapp.md)
### [Azure](pki-express/config/azure.md)
### [Serviços de Certificado em Nuvem](pki-express/config/trust-services.md)
## [Usando em PHP](pki-express/php/index.md)
### [Plain](pki-express/php/plain.md)
### [Representação Visual](pki-express/php/visual-rep/index.md)
### [Confiando em certificados que não sejam da ICP-Brasil](pki-express/php/trusting-in-custom-certificates.md)
### [Configurando uma autoridade de carimbo de tempo](pki-express/php/configuring-timestamp-authority.md)
### [Convertendo do REST PKI](pki-express/php/convert-from-restpki.md)
## [Usando em Java](pki-express/java/index.md)
### [Como funciona a assinatura](pki-express/java/how-it-works.md)
### [Gerando códigos alfanuméricos](pki-express/java/alpha-codes.md)
### [Representação Visual](pki-express/java/visual-rep/index.md)
### [Confiando em certificados que não sejam da ICP-Brasil](pki-express/java/trusting-in-custom-certificates.md)
### [Convertendo do REST PKI](pki-express/java/convert-from-restpki.md)
## [Usando em Python](pki-express/python/index.md)
### [Representação Visual](pki-express/python/visual-rep/index.md)
### [Confiando em certificados que não sejam da ICP-Brasil](pki-express/python/trusting-in-custom-certificates.md)
### [Convertendo do REST PKI](pki-express/python/convert-from-restpki.md)
## [Usando em Node.js](pki-express/nodejs/index.md)
### [Representação Visual](pki-express/nodejs/visual-rep/index.md)
### [Confiando em certificados que não sejam da ICP-Brasil](pki-express/nodejs/trusting-in-custom-certificates.md)
### [Convertendo do REST PKI](pki-express/nodejs/convert-from-restpki.md)
## [Usando em Ruby](pki-express/ruby/index.md)
### [Representação Visual](pki-express/ruby/visual-rep/index.md)
### [Confiando em certificados que não sejam da ICP-Brasil](pki-express/ruby/trusting-in-custom-certificates.md)
### [Convertendo do REST PKI](pki-express/ruby/convert-from-restpki.md)
## [Códigos de Retorno](pki-express/return-codes.md)
## [Histórico de versões](pki-express/changelog.md)
<!-- End of PKI Express -->

<!-- Start of Signer -->
# [Signer](signer/index.md)
## [On premises](signer/on-premises/index.md)
### [Setup em Windows Server](signer/on-premises/windows/index.md)
### [Setup em Linux](signer/on-premises/linux/index.md)
#### [Instalação em Ubuntu Server](signer/on-premises/linux/install-ubuntu.md)
#### [Atualização](signer/on-premises/linux/update.md)
#### [Resolução de problemas](signer/on-premises/linux/troubleshoot/index.md)
##### [Verificando os logs](signer/on-premises/linux/troubleshoot/check-logs.md)
### [Setup em Docker](signer/on-premises/docker/index.md)
<!--
#### [Docker Swarm](signer/on-premises/docker/docker-swarm/index.md)
##### [Habilitando SSL](signer/on-premises/docker/docker-swarm/enable-ssl.md)
##### [Usando um banco de dados externo](signer/on-premises/docker/docker-swarm/external-db.md)
##### [Verificando os logs](signer/on-premises/docker/docker-swarm/check-logs.md)
##### [Dados persistentes](signer/on-premises/docker/docker-swarm/persistent-data.md)
##### [Usando com GrantID integrado](signer/on-premises/docker/docker-swarm/internal-grantid.md)
-->
### [Setup em Azure App Services](signer/on-premises/azure/index.md)
### [Preparando o banco de dados](signer/on-premises/prepare-database.md)
### [Configuração do Blob Storage](signer/on-premises/blob-storage.md)
### [Configuração do Serilog](signer/on-premises/serilog.md)
### [Configurações](signer/on-premises/settings.md)
### [Controle de acesso](signer/on-premises/access-control.md)
### [Personalização](signer/on-premises/customization.md)
### [Emails Registrados](signer/on-premises/registered-emails.md)
### [Pagamentos](signer/on-premises/payments.md)
### [Autenticação Pix](signer/on-premises/pix-authentication.md)
### [Zoom](signer/on-premises/zoom.md)
### [Integração para administração](signer/on-premises/administration.md)
### [Monitoramento de consumo](signer/on-premises/consumption-monitoring.md)
### [Atualizando para 2.x](signer/on-premises/update-20.md)
## [Guia do usuário](signer/user-guide/index.md)
### [Geração de documentos](signer/user-guide/gen-docs.md)
### [Administração de sistema](signer/user-guide/sys-admin/index.md)
#### [Adicionando usuário](signer/user-guide/sys-admin/add-user.md)
#### [Visualizando os documentos do sistema](signer/user-guide/sys-admin/browse-docs.md)
#### [Excluindo documentos](signer/user-guide/sys-admin/del-docs.md)
## [Guia de Integração](signer/integration-guide.md)
## [Assinatura Embutida](signer/embedded-signature.md)
## [Histórico de versões](signer/changelog.md)
<!-- End of Signer -->

<!-- Start of Amplia -->
# [Amplia](amplia/index.md)
## [On premises](amplia/on-premises/index.md)
### [Setup em Windows Server](amplia/on-premises/windows/index.md)
#### [Instalação](amplia/on-premises/windows/install.md)
<!-- [Configuração do usuário da aplicação](amplia/on-premises/windows/configure-app-user.md) -->
#### [Atualização](amplia/on-premises/windows/update.md)
#### [Resolução de problemas](amplia/on-premises/windows/troubleshoot/index.md)
##### [Verificando os logs](amplia/on-premises/windows/troubleshoot/check-logs.md)
##### [Diagnosticando problemas na inicialização](amplia/on-premises/windows/troubleshoot/startup-errors.md)
##### [HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure](amplia/on-premises/windows/troubleshoot/502-5.md)
### [Setup em Linux](amplia/on-premises/linux/index.md)
#### [Instalação em Ubuntu Server](amplia/on-premises/linux/install-ubuntu.md)
#### [Instalação em Red Hat Enterprise](amplia/on-premises/linux/install-rhel.md)
#### [Instalação em Oracle Linux](amplia/on-premises/linux/install-oracle.md)
#### [Instalação em Rocky Linux](amplia/on-premises/linux/install-rocky.md)
#### [Atualização](amplia/on-premises/linux/update.md)
#### [Resolução de problemas](amplia/on-premises/linux/troubleshoot/index.md)
##### [Verificando os logs](amplia/on-premises/linux/troubleshoot/check-logs.md)
##### [HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure](amplia/on-premises/linux/troubleshoot/502-5.md)
### [Setup em Docker](amplia/on-premises/docker/index.md)
<!--
#### [Docker Swarm](amplia/on-premises/docker/swarm/index.md)
##### [Habilitando SSL](amplia/on-premises/docker/swarm/enable-ssl.md)
##### [Usando um banco de dados externo](amplia/on-premises/docker/swarm/external-db.md)
##### [Verificando os logs](amplia/on-premises/docker/swarm/check-logs.md)
##### [Dados persistentes](amplia/on-premises/docker/swarm/persistent-data.md)
##### [Usando com GrantID integrado](amplia/on-premises/docker/swarm/internal-grantid.md)
-->
### [Setup em Azure App Services](amplia/on-premises/azure/index.md)
#### [Instalação](amplia/on-premises/azure/install.md)
#### [Atualização](amplia/on-premises/azure/update.md)
#### [Resolução de problemas](amplia/on-premises/azure/troubleshoot/index.md)
##### [Verificando os logs](amplia/on-premises/azure/troubleshoot/check-logs.md)
##### [Diagnosticando problemas na inicialização](amplia/on-premises/azure/troubleshoot/startup-errors.md)
### [Utilitário de linha de comando](amplia/on-premises/tool/index.md)
#### [gen-enc-key](amplia/on-premises/tool/gen-enc-key.md)
#### [hash-root-pass](amplia/on-premises/tool/hash-root-pass.md)
#### [update-db](amplia/on-premises/tool/update-db.md)
#### [test-email](amplia/on-premises/tool/test-email.md)
### [Key Stores](amplia/on-premises/key-stores/index.md)
#### [Banco de dados](amplia/on-premises/key-stores/database.md)
<!-- [Nativo](amplia/on-premises/key-stores/native.md) -->
#### [PKCS #11](amplia/on-premises/key-stores/pkcs11.md)
#### [CAPI](amplia/on-premises/key-stores/capi.md)
#### [CNG](amplia/on-premises/key-stores/cng.md)
#### [Azure Key Vault](amplia/on-premises/key-stores/azure.md)
#### [Dinamo](amplia/on-premises/key-stores/dinamo.md)
#### [Kryptus](amplia/on-premises/key-stores/kryptus.md)
### [Preparando o banco de dados](amplia/on-premises/prepare-database.md)
### [Operando sem db_owner](amplia/on-premises/unprivileged-db-user.md)
### [Configuração de storage](amplia/on-premises/configure-blob-storage.md)
### [Configuração de OIDC](amplia/on-premises/configure-oidc.md)
### [Configuração de envio de email](amplia/on-premises/configure-email.md)
### [Configuração de envio de SMS](amplia/on-premises/configure-sms.md)
### [Configuração de OCSP](amplia/on-premises/configure-ocsp.md)
### [Propagação de LCR](amplia/on-premises/crl-propagation.md)
### [Configuração de hospedagem de certificados em nuvem](amplia/on-premises/configure-cert-management.md)
### [Configuração de redirecionamento para HTTPS](amplia/on-premises/configure-https-redirect.md)
### [Verificando a versão instalada](amplia/on-premises/check-version.md)
### [Atualizando para 3.0](amplia/on-premises/update-30.md)
### [Atualizando para 3.5](amplia/on-premises/update-35.md)
### [Atualizando para 4.0](amplia/on-premises/update-40.md)
### [Migrando com chaves em banco](amplia/on-premises/migrate-with-db-keys.md)
## [Guia de Operação](amplia/operation/index.md)
### [Criação de AC raiz](amplia/operation/create-root-ca.md)
### [Criação de AC intermediária](amplia/operation/create-intermediate-ca.md)
### [Criação de AC de dispositivos](amplia/operation/create-device-ca.md)
## [Histórico de versões](amplia/changelog.md)
<!-- End of Amplia -->

<!-- Start of Amplia Reg -->
# [Amplia Reg](amplia-reg/index.md)
## [Guia de Integração](amplia-reg/integration/index.md)
### [Primeiros passos](amplia-reg/integration/get-started.md)
### [Criação de pedido](amplia-reg/integration/create-order.md)
### [Pedidos pré-aprovados](amplia-reg/integration/preapproved-orders.md)
### [Referenciando arquivos](amplia-reg/integration/file-referencing.md)
### [Webhooks](amplia-reg/integration/webhooks.md)
### [Códigos de erro](amplia-reg/integration/error-codes.md)
## [On premises](amplia-reg/on-premises/index.md)
### [Setup em Linux](amplia-reg/on-premises/linux/index.md)
#### [Instalação em Ubuntu Server](amplia-reg/on-premises/linux/install-ubuntu.md)
#### [Atualização](amplia-reg/on-premises/linux/update.md)
#### [Resolução de problemas](amplia-reg/on-premises/linux/troubleshoot/index.md)
##### [Verificando os logs](amplia-reg/on-premises/linux/troubleshoot/check-logs.md)
### [Utilitário de linha de comando](amplia-reg/on-premises/tool/index.md)
#### [gen-enc-key](amplia-reg/on-premises/tool/gen-enc-key.md)
#### [hash-root-pass](amplia-reg/on-premises/tool/hash-root-pass.md)
#### [update-db](amplia-reg/on-premises/tool/update-db.md)
#### [test-email](amplia-reg/on-premises/tool/test-email.md)
#### [test-cert-renewal-alert](amplia-reg/on-premises/tool/test-certificate-renewal-alert.md)
#### [migrate-data](amplia-reg/on-premises/tool/migrate-data.md)
### [Preparando o banco de dados](amplia-reg/on-premises/prepare-database.md)
### [Operando sem db_owner](amplia-reg/on-premises/unprivileged-db-user.md)
### [Configuração de storage](amplia-reg/on-premises/configure-blob-storage.md)
### [Configuração de OIDC](amplia-reg/on-premises/configure-oidc.md)
### [Configuração de envio de email](amplia-reg/on-premises/configure-email.md)
### [Configuração de envio de SMS](amplia-reg/on-premises/configure-sms.md)
### [Configuração de redirecionamento para HTTPS](amplia-reg/on-premises/configure-https-redirect.md)
### [Configuração de reCAPTCHA](amplia-reg/on-premises/configure-recaptcha.md)
### [Configuração de alerta de renovação de certificado](amplia-reg/on-premises/configure-certificate-renewal-alert.md)
### [Adicionando tipos de documento](amplia-reg/on-premises/add-doc-types.md)
### [Pós-instalação](amplia-reg/on-premises/post-install.md)
### [Verificando a versão instalada](amplia-reg/on-premises/check-version.md)
### [Atualizando para 3.0](amplia-reg/on-premises/update-30.md)
### [Atualizando para 4.0](amplia-reg/on-premises/update-40.md)
## [Histórico de versões](amplia-reg/changelog.md)
<!-- End of Amplia Reg -->

<!-- Start of PSC -->
# [PSC](psc/index.md)
## [On premises](psc/on-premises/index.md)
### [Setup em Linux](psc/on-premises/linux/index.md)
#### [Instalação em Ubuntu Server](psc/on-premises/linux/install-ubuntu.md)
#### [Instalação em Rocky Linux](psc/on-premises/linux/install-rocky.md)
#### [Atualização](psc/on-premises/linux/update.md)
#### [Resolução de problemas](psc/on-premises/linux/troubleshoot/index.md)
##### [Verificando os logs](psc/on-premises/linux/troubleshoot/check-logs.md)
### [Utilitário de linha de comando](psc/on-premises/tool/index.md)
#### [gen-cert](psc/on-premises/tool/gen-cert.md)
#### [gen-enc-key](psc/on-premises/tool/gen-enc-key.md)
#### [hash-root-pass](psc/on-premises/tool/hash-root-pass.md)
#### [put-blob](psc/on-premises/tool/put-blob.md)
#### [update-db](psc/on-premises/tool/update-db.md)
#### [test-email](psc/on-premises/tool/test-email.md)
### [Preparando o banco de dados](psc/on-premises/prepare-database.md)
### [Operando sem db_owner](psc/on-premises/unprivileged-db-user.md)
### [Configuração de storage](psc/on-premises/configure-blob-storage.md)
### [Configuração de OIDC](psc/on-premises/configure-oidc.md)
### [Configuração de Firebase](psc/on-premises/configure-firebase.md)
### [Configuração de reCAPTCHA](psc/on-premises/configure-recaptcha.md)
### [Configuração de envio de email](psc/on-premises/configure-email.md)
### [Configuração de redirecionamento para HTTPS](psc/on-premises/configure-https-redirect.md)
### [Verificando a versão instalada](psc/on-premises/check-version.md)
## [Histórico de versões](psc/changelog.md)
## [Histórico de versões do app](psc/app-changelog.md)
<!-- End of PSC -->

<!-- Start of TSA -->
# [TSA](tsa/index.md)
## [On premises](tsa/on-premises/index.md)
### [Setup em Linux](tsa/on-premises/linux/index.md)
#### [Instalação em Ubuntu Server](tsa/on-premises/linux/install-ubuntu.md)
#### [Instalação em Rocky Linux](tsa/on-premises/linux/install-rocky.md)
#### [Atualização](tsa/on-premises/linux/update.md)
#### [Resolução de problemas](tsa/on-premises/linux/troubleshoot/index.md)
##### [Verificando os logs](tsa/on-premises/linux/troubleshoot/check-logs.md)
### [Configuração de NTP](tsa/on-premises/configure-ntp.md)
### [Configuração de autenticação](tsa/on-premises/configure-auth.md)
### [Verificando a versão instalada](tsa/on-premises/check-version.md)
## [Histórico de versões](tsa/changelog.md)
<!-- End of TSA -->

<!-- Start of GrantID -->
# [GrantID](grant-id/index.md)
## [On premises](grant-id/on-premises/index.md)
### [Setup em Windows Server](grant-id/on-premises/windows/index.md)
### [Setup em Linux](grant-id/on-premises/linux/index.md)
#### [Instalação em Ubuntu Server](grant-id/on-premises/linux/install-ubuntu.md)
#### [Instalação em Rocky Linux](grant-id/on-premises/linux/install-rocky.md)
#### [Atualização](grant-id/on-premises/linux/update.md)
#### [Resolução de problemas](grant-id/on-premises/linux/troubleshoot/index.md)
##### [Verificando os logs](grant-id/on-premises/linux/troubleshoot/check-logs.md)
##### [HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure](grant-id/on-premises/linux/troubleshoot/502-5.md)
### [Setup em Docker](grant-id/on-premises/docker/index.md)
#### [Atualização](grant-id/on-premises/docker/update.md)
<!--
#### [Docker Swarm](grant-id/on-premises/docker/docker-swarm/index.md)
##### [Habilitando SSL](grant-id/on-premises/docker/docker-swarm/enable-ssl.md)
##### [Usando um banco de dados externo](grant-id/on-premises/docker/docker-swarm/external-db.md)
##### [Verificando os logs](grant-id/on-premises/docker/docker-swarm/check-logs.md)
##### [Dados persistentes](grant-id/on-premises/docker/docker-swarm/persistent-data.md)
-->
### [Setup em Azure App Services](grant-id/on-premises/azure/index.md)
### [Preparando o banco de dados](grant-id/on-premises/prepare-database.md)
### [Pós-instalação](grant-id/on-premises/post-install.md)
### [Configurar Aplicações SPA](grant-id/on-premises/configure-spa-app.md)
### [Configuração do Blob Storage](grant-id/on-premises/blob-storage.md)
### [Configuração de envio de email](grant-id/on-premises/configure-email.md)
### [Configuração de envio de SMS](grant-id/on-premises/configure-sms.md)
### [Configuração do Serilog](grant-id/on-premises/serilog.md)
### [Uso dentro de iframe](grant-id/on-premises/allow-iframe.md)
### [Configurações](grant-id/on-premises/settings.md)
### [Integração com SAML 2](grant-id/on-premises/saml2.md)
### [Integração com LDAP](grant-id/on-premises/ldap.md)
### [Resolução de problemas](grant-id/on-premises/troubleshoot.md)
## [Histórico de versões](grant-id/changelog.md)
<!-- End of GrantID -->

<!-- Start of Scanner -->
# [Scanner](scanner/index.md)
## [Integração](scanner/integration/index.md)
### [.NET](scanner/integration/dotnet.md)
### [PHP](scanner/integration/php.md)
### [REST API](scanner/integration/other.md)
## [Simulador](scanner/simulator.md)
<!-- End of Scanner -->

<!-- Start of Digiploma -->
# [Digiploma](digiploma/index.md)
## [On premises](digiploma/on-premises/index.md)
### [Configurações](digiploma/on-premises/settings.md)
### [Configurar Integração com o Signer](digiploma/on-premises/signer-setup.md)
## [Histórico de versões](digiploma/changelog.md)
<!-- End of Digiploma -->
