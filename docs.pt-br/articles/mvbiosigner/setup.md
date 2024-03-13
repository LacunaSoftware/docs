# Manual Operacional Assinador Rede Santa Catarina

O ambiente da Autoridade Certificadora da Rede Santa Catarina é composto por dois sistemas principais:
- **Amplia:** Sistema de gerenciamento das ACs e certificados digitais
-  **MV Bio Signer:** Sistema de assinatura digital e biometria
	- **Agente de Autenticação:** App desktop que executa a captura biométrica para autenticação do profissional

Para o projeto do Assinador ACSC foi acordado o setup dos sistemas utilizando [Docker](https://docs.docker.com/get-started/overview/) para execução e [Docker Swarm](https://docs.docker.com/engine/swarm/) para orquestração e *deploy* dos sistemas.

## Amplia

### Dependências

#### Banco de dados SQL Server
É necessário conexão com banco de dados SQL Server (versão 2016 ou mais recente) tendo:
- Collation:  `Latin1_General_100_CI_AI`
- Credenciais (User ID/Password) de `db_owner`

\* Também é possível utilizar SQL Server Express, pois o Amplia guarda arquivos e certificados e *storage* e realiza pouco acesso ao banco. No entanto ficará restrito a limitações do Express.

> **NOTA:** Caso prefira executar o Amplia sem acesso `db_owner`, veja [este artigo](https://docs.lacunasoftware.com/pt-br/articles/amplia/on-premises/unprivileged-db-user)

#### Blob Storage
É necessário a configuração de um *storage* para armazenamento dos certificados emitidos e artefatos de verificação de estado de revogação gerados ( e.g.: CRLs e OCSPs).
> **NOTA:** Para o projeto ficou acordado o uso de um diretório NFS (*Network File System*) para uso como *Blob Storage*

#### Hostnames
Antes do setup inicial do Amplia é necessário definir e reservar pelo menos um hostname oficial e certificado SSL para acesso ao sistema (e.g.: `ac.acsc.org.br`)

> **IMPORTANTE!** Este *hostname* estará presente nos certificados emitidos em links para acesso a artefatos de validação e cadeia de certificado. Então deve-se escolher domínios e hostnames que sejam duradouros e não sofram modificação.

### Configurações
Junto com este manual é fornecido um arquivo *template* JSON de configuração (AppSettings): `amplia.template.json`.

Este arquivo possui todas as configurações necessárias para executar o Amplia, bem como comentários sobre cada parâmetro, seu objetivo e como preenchê-lo. Dentre eles, os principais são:

`ConnectionStrings__DefaultConnection`:
*String* de conexão com o banco de dados SQL Server. 

---
`General__RootPasswordHash`
Senha do usuário administrador para acessa ao Amplia. Para gerar esta senha (resultado é gerado com *hash* e *salt*) utilize o seguinte comando no terminal e informe a senha desejada e copie a *string* do resultado:
```sh
# docker run -i lacunasoftware/amplia:3.13 -- hash-root-pass
```
Alternativamente, para mais segurança, utilize Docker Secrets para armazenar este valor. Faça o mapeamento no arquivo YML de *deploy* através do arquivo `/run/secrets` e a variável de ambiente: `General__RootPasswordHashFile`

---
`General__EncryptionKey`
Chave para cifrar dados sensíveis do sistema. Para gerar esta chave utilize o camando no terminal e copie a *string* do resultado:
```sh
# docker run lacunasoftware/amplia:3.13 -- gen-enc-key -q
```
Alternativamente, para mais segurança, utilize Docker Secrets para armazenar este valor. Faça o mapeamento no arquivo YML de *deploy* através do arquivo `/run/secrets` e a variável de ambiente: `General__EncryptionKeyFile`

---
`Amplia__DefaultAccessDomains`
Lista de hostnames, se houver mais de um, que serão utilizados para criação dos links de verificação de estado de revogação e cadeia nos certificados emitidos.


## MV Bio Signer

### Dependências

#### Banco de dados SQL Server

É necessário conexão com banco de dados SQL Server (versão 2016 ou mais recente) tendo:
- Collation:  `Latin1_General_100_CI_AI`
- Credenciais (User ID/Password) de `db_owner`

#### Blob Storage
É necessário a configuração de um *storage* para armazenamento dos documentos assinados e dados biométricos.
> **NOTA:** Para o projeto ficou acordado o uso de um diretório NFS (*Network File System*) para uso como *Blob Storage*

#### Hostnames
Antes do setup inicial do Assinador é necessário definir e reservar um hostname e certificado SSL para acesso ao sistema via HTTPS (e.g.: `assinador.acsc.org.br`)

### Configurações
Junto com este manual é fornecido um arquivo *template* JSON de configuração (AppSettings): `signer.template.json`.

Este arquivo possui todas as configurações necessárias para executar o Assinador, bem como comentários sobre cada parâmetro, seu objetivo e como preenchê-lo.

`ConnectionStrings__DefaultConnection`:
*String* de conexão com o banco de dados SQL Server

# Deploy
O *deploy* da solução é realizado com Docker Swarm. Para isso é fornecido junto com este manual um arquivo YML template de *stack*: `stack.template.yml`.

Preencha o arquivo `stack.template.yml` com as configurações necessárias e também os arquivos `amplia.template.json` e `signer.template.json`. Reuna os 3 arquivos em um mesmo diretório e renomei eles para:
- stack.yml
- amplia.json
- signer.json

## Start

Para iniciar a execução da solução utilize o comando no terminal no diretório com os 3 arquivos do passo anterior:
```sh
# docker stack deploy -c stack.yml mvsigner
```
\* O *deploy* da solução com Docker Swarm faz com que seja criado um serviço de modo que ele será auto-iniciado caso haja reboot do servidor, logo após a inicialização do próprio Docker.

## Stop

Para parar a execução da solução  utilize o comando no terminal:
```sh
# docker stack rm mvsigner
```

## Logs

Para acompanhar os logs do Assinador utilize o comando no terminal:
```sh
# docker service logs mvsigner_signer -ft
```

Para mais opções de exibição dos logs veja o [link da documentação](https://docs.docker.com/engine/reference/commandline/service_logs/#options)

# Nginx (proxy reverso)

## Configuração

Para expor os sistemas em execução no *container* Docker é necessário um mecanismo de proxy reverso, como o Nginx sugerido.
No template enviado `stack.template.yml` os sistemas Amplia e Assinador estão configurados com as portas externas 5000 e 5001, respectivamente:

```yml
amplia:
  ports:
    - "5000:80"
#...
signer:
  ports:
    - "5001:80"
```
Para configurar o redirecionamento dessas portas, abra o arquivo fornecido `nginx.add.conf`, verifique ou corrija se os arquivos de #Certificado SSL estão nos caminhos corretos e se os campos `server_name` estão de acordo com os *hostnames* escolhidos para os sistemas Amplia e Assinador nos itens anteriores.

Adicione o conteúdo do arquivo `nginx.add.conf` para o arquivo de configuração do Nginx no caminho:
```sh
/etc/nginx/nginx.conf
```

Após as alterações, reinicie o Nginx com o comando no terminal:
```sh
# systemctl restart nginx
```

## Testando resposta dos sistemas

Ambos os sistemas Amplia e Assinador possuem uma API de *System Info* que retorna um JSON com o nome, versão e *timestamp* (data/hora do servidor) do sistema. Esta API pode ser usada para verificar se os sistemas estão responsivos:
```ts
'[GET] /api/system/info'

Response: application/json
{
  name: string,    // Nome do sistema
  version: string, // Versao do sistema
  timestamp: Date  // Date/hora do servidor
}
```
Por exemplo, para verificar a resposta dos sistemas de dentro do servidor:
```sh
# Amplia porta 5000
$ wget http://127.0.0.1:5000/api/system/info

# Resposta:
Connecting to 127.0.0.1:5000... connected.
HTTP request sent, awaiting response... 200 OK
Length: 109 [application/json]
Saving to: ‘info’

$ cat info
{"productName":"Lacuna Amplia","productVersion":"3.12.0 RTM",
"timestamp":"2022-03-08T13:04:56.0968247+00:00"}

```

Para verificar a resposta dos sistemas externamente:
```sh
$ wget https://<hostname-do-assinador>/api/system/info
```` 
