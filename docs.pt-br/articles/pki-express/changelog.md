# Histórico de versões do PKI Express

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
