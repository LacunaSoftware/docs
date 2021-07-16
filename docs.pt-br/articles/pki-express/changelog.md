# Histórico de versões do PKI Express

<a name="v1-24-1" />
### 1.24.1 (2021-07-16)

- Corrige bug na configuração do trustServicesDiscoveryTimeout
- Adiciona opção `--guess-certificate` que quando múltiplos certificados são encontrados escolhe o mais recente

<a name="v1-24-0" />
### 1.24.0 (2021-07-07)

- Adiciona opção `--session-lifetime` nos comandos `discover-services` e `pwd-auth`, para configurar a duração em segundos da sessão de assinaturas
- Melhora as configurações de cultura

<a name="v1-23-2" />
### 1.23.2 (2021-06-04)

- Corrige bug na validação de assinaturas PAdES quando não há algumas das informações requeridas 

<a name="v1-23-1" />
### 1.23.1 (2021-05-14)

- Corrige bug na abertura de assinaturas PAdES quando não há algumas das informações requeridas 

<a name="v1-23-0" />
### 1.23.0 (2021-02-22)

- Adiciona suporte para o retorno do conteúdo do certificado nos comandos `open-pades` e `open-cades`, com a opção `--fill-cert-content`
- Adiciona opção `--trust-uncertified-signing-time` nos comandos `open-pades` e `open-cades`, para confiar em signing-time não certificado

<a name="v1-22-0" />
### 1.22.0 (2021-01-21)

- Adiciona suporte para o retorno do *commitment type* de assinaturas CAdES (comando `open-cades`)
- Adiciona suporte para o retorno do conteúdo do certificado no comando `open-cert` com a opção `--fill-content`
- Adiciona suporte para o retorno dos certificados emissores no comando `open-cert` com a opção `--fill-issuer`

<a name="v1-21-0" />
### 1.21.0 (2020-11-05)

- Corrige conversão do ValidationItemType
- Melhora o model do certificado para returnar o valor de KeyUsage
- Adiciona suporte para o retorno da versão atual do programa (comando `version`)

<a name="v1-20-0" />
### 1.20.0 (2020-10-05)

- Adiciona suporte a validação PAdES segundo diferentes políticas com a opção `--policy`
- Adiciona suporte a configuração do *commitment type* nos comandos `sign-cades` and `start-cades` com a opção`--commitment-type`
- Adiciona suporte a decodificação e validação de certificados (comando `open-cert`)

<a name="v1-19-0" />
### 1.19.0 (2020-09-14)

- Adiciona suporte a geração de chave de proteção de dados (comando `generate-data-protection-key`)
- Adiciona suporte a configuração de chave de proteção de dados
- Atualiza PKI SDK para a versão [2.7.8](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-7-8)

<a name="v1-18-0" />
### 1.18.0 (2020-08-20)

- Adiciona suporte a usar hashes do documento em assinaturas CAdES *detached*
- Adiciona suporte a representação visual com `visual-rep` em carimbos de tempo
- Melhora retorno do comando quando finaliza a autenticação com PSCs brasileiras
- Corrigi parse do campo sessionType do comando `discover-services`
- Atualiza PKI SDK para a versão [2.7.5](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-7-5)

<a name="v1-17-0" />
### 1.17.0 (2020-07-30)

- Adiciona suporte a assinatura usando certificados em nuvem (integração com PSCs brasileiras)
- Melhora merge de assinaturas CAdEs para aceitar um arquivo de assinatura

<a name="v1-16-0" />
### 1.16.0 (2020-06-26)

- Adiciona campo "certificationLevel" na assinatura PAdES

<a name="v1-15-0" />
### 1.15.0 (2020-06-17)

- Adiciona campo "customSignatureFieldName" na assinatura PAdES
- Atualiza PKI SDK para a versão [2.7.2](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-7-2)

<a name="v1-14-0" />
### 1.14.0 (2020-06-09)

- Adiciona suporte a assinatura (CAdES, PAdES e XAdES) utilizando chave armazenada no Azure Key Vault
- Atualiza PKI SDK para a versão [2.7.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-7-0)

<a name="v1-13-2" />
### 1.13.2 (2019-08-21)

- Atualiza PKI SDK para a versão [2.5.3](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-5-3)

<a name="v1-13-1" />
### 1.13.1 (2019-07-31)

- Adiciona a opção de não mostrar a representação visual padrão em uma assinatura PAdES com `--suppress-default-visual-rep` habilitado

<a name="v1-13-0" />
### 1.13.0 (2019-07-19)

- Adiciona integração com o serviço LAPP
- Adiciona suporte a razão do assinante para uma assinatura PAdES com `--reason` habilitado
- Atualiza PKI SDK para a versão [2.5.1](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-5-1)

<a name="v1-12-3" />
### 1.12.3 (2019-05-20)

- Mudanças na compilação

<a name="v1-12-2" />
### 1.12.2 (2019-04-01)

- Adiciona suporte a configuração de timeout no download de CRLs e certificados emissores de AC
- Adiciona suporte a configuração de timeout na requisição de um timestamp
- Atualiza PKI SDK para a versão [2.3.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-3-0)

<a name="v1-12-0" />
### 1.12.0 (2019-02-05)

- Adiciona suporte as políticas ICP-Brasil em assinaturas PAdES (políticas `adrb`, `adrb-ltv`, e `adrt`)
- Atualiza PKI SDK para a versão [2.2.7](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-2-7)

<a name="v1-11-0" />
### 1.11.0 (2018-12-04)

- Adiciona suporte a geração de chave (comando `gen-key`)
- Adiciona suporte a geração de certificado PKCS #12 (comando `create-pfx`)

<a name="v1-10-0" />
### 1.10.0 (2018-10-31)

- Adiciona suporte a configuração da cultura e do fuso horário com `--culture` e `--timezone` habilitado nas assinaturas
- Adiciona suporte a configuração do formato de data e hora na representação visual da assinatura PAdES
- Adiciona suporte a listar todos os timezones disponíveis no sistema (comando `list-timezones`)

<a name="v1-9.0" />
### 1.9.0 (2018-10-05)

- Adiciona suporte a fusão de assinaturas CMS/CAdES (comando `merge-cms`).
- Melhora validação de assinaturas PAdES e CAdES para suportar políticas com carimbo de tempo.

<a name="v1-8-0" />
### 1.8.0 (2018-09-25)

- Adiciona suporte ao retorno do certificado do assinante depois de uma assinatura.
- Atualiza PKI SDK para a versão [2.1.3](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-1-3)

<a name="v1-7-0" />
### 1.7.0 (2018-09-20)

- Adiciona suporte a carimbo de tempo (comando `stamp-pdf`) em PDFs.

<a name="v1-6-2" />
### 1.6.2 (2018-07-20)

- Corrige bug na ativação manualmente com nova licença
- Atualiza PKI SDK para a versão [2.1.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v2-1-0)

<a name="v1-6-1" />
### 1.6.1 (2018-07-11)

- Corrige bug na ativação que afetava instalação em containers Docker

<a name="v1-6-0" />
### 1.6.0 (2018-06-18)

- Adiciona suporte para a política de assinatura *Certificación de Origen Digital* (COD) nas assinaturas XML.

<a name="v1-5-0" />
### 1.5.0 (2018-05-18)

- Adiciona escolha da política de assinatura com `--policy` habilitado nas assinaturas
- Adiciona assinatura com carimbo de tempo (suporte para CAdES, PAdES e XAdES)
- Atualiza PKI SDK para a versão [1.20.16](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v1-20-16), corrigindo bug no preenchimento da cadeia de certificados na assinatura PAdES

<a name="v1-4-1" />
### 1.4.1 (2018-05-14)

- Atualiza o PKI SDK para versão [1.20.15](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog#v1-20-15)

<a name="v1-4-0" />
### 1.4.0 (2018-04-10)

- Adiciona autenticação com certificado (comandos `start-auth` e `complete-auth`)

<a name="v1-3-0" />
### 1.3.0 (2018-03-02)

- Adiciona abertura e validação de assinaturas PAdES e CAdES (comandos `open-pades` e `open-cades`)
- Adiciona edição de PDF (comando `edit-pdf`), possibilitando elaboração de "versão para impressão"
- Adiciona assinatura de servidor utilizando arquivo PKCS #12 (.pfx)
- Adiciona suporte à [utilização de web proxy](config/proxy.md)
- Atualiza o PKI SDK para versão 2.0.13


<a name="v1-2-1" />
### 1.2.1 (2018-01-18)

- Atualiza o PKI SDK para versão 2.0.11, corrigindo bug que causava atrasos devido à falta de conectividade mesmo com `--offline` habilitado


<a name="v1-2-0" />
### 1.2.0 (2018-01-17)

- Adiciona flag global `--offline` para realizar assinaturas sem conexão de rede
- Corrige bug que fazia com que o comando `help` não pudesse ser utilizado antes da ativação
- Atualiza o PKI PKI SDK para versão 2.0.10


<a name="v1-1-0" />
### 1.1.0 (2017-12-06)

- Adiciona mecanismo de ativação, evitando que as aplicações precisem passar o arquivo de licença em cada chamada
- Melhora o registro de logs
- Adiciona comando `config`
- Atualiza o PKI SDK para versão 2.0.7, corrigindo bug no *cache* de LCRs em ambientes Linux


<a name="v1-0-3" />
### 1.0.3 (2017-11-15)

- Atualiza o PKI SDK para versão 2.0.3, corrigindo bug *PlatformNotSupportedException bug* em algumas distribuições de Linux


<a name="v1-0-2" />
### 1.0.2 (2017-11-07)

- Primeira versão disponível tanto para Linux quanto para Windows
- Atualiza o PKI SDK para versão 2.0.2
- Adiciona informação da versão do programa no comando `help`


<a name="v1-0-1" />
### 1.0.1 (2017-10-27)

- Corrige bug na compilação que fazia com que arquivos desnecessários fossem incluidos no pacote

*Versão disponível apenas para Linux*


<a name="v1-0-0" />
### 1.0.0 (2017-10-26)

- Primeira versão disponível publicamente
- Comandos disponíveis nessa versão:
  - `list-certs`
  - `read-cert`
  - `import-pfx`
  - `sign-data`
  - `sign-hash`
  - `sign-cades`
  - `sign-pades`
  - `sign-xml`
  - `start-cades`
  - `start-pades`
  - `start-xml`
  - `complete-sig`
  - `help`

*Versão disponível apenas para Linux*
