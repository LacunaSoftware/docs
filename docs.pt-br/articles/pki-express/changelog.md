# Histórico de versões do PKI Express

<a name="v1-12-3" />
### 1.12.3 (2019-05-20)

- Mudanças na compilação

<a name="v1-12-2" />
### 1.12.2 (2019-04-01)

- Adiciona suporte a configuração de timeout no download de CRLs e certificados emissores de AC
- Adiciona suporte a configuração de timeout na requisição de um timestamp
- Atualiza PKI SDK para a versão [2.3.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog.md#v2-3-0)

<a name="v1-12-0" />
### 1.12.0 (2019-02-05)

- Adiciona suporte as políticas ICP-Brasil em assinaturas PAdES (políticas `adrb`, `adrb-ltv`, e `adrt`)
- Atualiza PKI SDK para a versão [2.2.7](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog.md#v2-2-7)

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
- Atualiza PKI SDK para a versão [2.1.3](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog.md#v2-1-3)

<a name="v1-7-0" />
### 1.7.0 (2018-09-20)

- Adiciona suporte a carimbo de tempo (comando `stamp-pdf`) em PDFs.

<a name="v1-6-2" />
### 1.6.2 (2018-07-20)

- Corrige bug na ativação manualmente com nova licença
- Atualiza PKI SDK para a versão [2.1.0](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog.md#v2-1-0)

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
- Atualiza PKI SDK para a versão [1.20.16](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog.md#v1-20-16), corrigindo bug no preenchimento da cadeia de certificados na assinatura PAdES

<a name="v1-4-1" />
### 1.4.1 (2018-05-14)

- Atualiza o PKI SDK para versão [1.20.15](https://docs.lacunasoftware.com/en-us/articles/pki-sdk/changelog.md#v1-20-15)

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
