# Projeto de Exemplos PHP Plain

O projeto de exemplos demonstra o uso do [PKI Express](../index.md) junto com o componente [Web PKI](../../web-pki/index.md) em um projeto utilizando **PHP 5.5+ plain** (incluindo 7.x). Ele encontra-se hospedado no GitHub:

<https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/PHP>

> [!NOTE]
> Se você utiliza uma versão anterior do PHP, por favor [fale conosco](https://www.lacunasoftware.com/pt/home/purchase).

## Executando o Projeto

1. [Instale o PKI Express](../setup/index.md)
1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou faça um *clone* do repositório: <https://github.com/LacunaSoftware/PkiSuiteSamples.git>
1. Entre na pasta `/php/plain`
1. Em um terminal, execute o comando `composer install` para baixar as dependências (se você não possuir o Composer instalado, baixe-o [aqui](https://getcomposer.org/))
1. Execute o project ao executar o comando `composer start`
1. Acesse a URL <http://localhost:8000>

## Mapa do Projeto

Essa seção lista onde encontrar as partes relevante de cada exemplo de *feature* no projeto:

### Autenticação com Certificados Digitais

[!include[authentication-sample.md](../../../../includes/pki-express/php/authentication-sample.md)]

### Assinatura PAdES com Arquivo do Servidor

Depois de escolher um dos arquivos do servidor disponíveis (que é implementado simplificadamente para propósito de demonstração em [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) e [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), o fluxo é feito pelos seguintes arquivos:

[!include[pades-sample.md](../../../../includes/pki-express/php/pades-sample.md)]

### Assinatura PAdES com Arquivo Enviado Pelo Usuário Por Upload

Depois que o upload do arquivo (que é implementado simplificadamente para propósito de demonstração em [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito, o fluxo é feito pelos seguintes arquivos:

[!include[pades-sample.md](../../../../includes/pki-express/php/pades-sample.md)]

### Co-Assinatura PAdES

Depois de escolher um dos arquivos **já assinados** do servidor disponíveis (que é implementado simplificadamente para propósito de demonstração em [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) e [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), o fluxo é feito pelos seguintes arquivos:

[!include[pades-sample.md](../../../../includes/pki-express/php/pades-sample.md)]

### Assinatura PAdES com Chave no Servidor

Depois que o upload do arquivo (que é implementado simplificadamente para propósito de demonstração em [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito, o fluxo é feito pelos seguintes arquivos:

[!include[pades-server-key-sample.md](../../../../includes/pki-express/php/pades-server-key-sample.md)]

### Lote de Assinaturas PAdES

[!include[batch-pades-sample.md](../../../../includes/pki-express/php/batch-pades-sample.md)]

### Abrir/Validar uma Assinatura PAdES Existente

Depois que o upload do arquivo (que é implementado simplificadamente para propósito de demonstração em [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito, o fluxo é feito pelos seguintes arquivos:

[!include[open-pades-sample.md](../../../../includes/pki-express/php/open-pades-sample.md)]

### Versão para Impressão de uma Assinatura PAdES

Não está disponível nesse projeto ainda.

### Assinatura CAdES com Arquivo do Servidor

Depois de escolher um dos arquivos do servidor disponíveis (que é implementado simplificadamente para propósito de demonstração em [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) e [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), o fluxo é feito pelos seguintes arquivos:

[!include[cades-sample.md](../../../../includes/pki-express/php/cades-sample.md)]

### Assinatura CAdES com Arquivo Enviado Pelo Usuário Por Upload

Depois que o upload do arquivo (que é implementado simplificadamente para propósito de demonstração em [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito, o fluxo é feito pelos seguintes arquivos:

[!include[cades-sample.md](../../../../includes/pki-express/php/cades-sample.md)]

### Co-Assinatura CAdES

Depois de escolher um dos arquivos **já assinados** do servidor disponíveis (que é implementado simplificadamente para propósito de demonstração em [index.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/index.php) e [action.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/server-files/action.php)), o fluxo é feito pelos seguintes arquivos:

[!include[cades-sample.md](../../../../includes/pki-express/php/cades-sample.md)]

### Assinatura CAdES com Chave no Servidor

Depois que o upload do arquivo (que é implementado simplificadamente para propósito de demonstração em [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito, o fluxo é feito pelos seguintes arquivos:

[!include[cades-server-key-sample.md](../../../../includes/pki-express/php/cades-server-key-sample.md)]

### Lote de Assinaturas CAdES

Não está disponível nesse projeto ainda.

### Abrir/Validar uma Assinatura CAdES Existente

Depois que o upload do arquivo (que é implementado simplificadamente para propósito de demonstração em [upload.php](https://github.com/LacunaSoftware/PkiSuiteSamples/blob/master/php/plain/public/upload.php)) é feito, o fluxo é feito pelos seguintes arquivos:

[!include[open-cades-sample.md](../../../../includes/pki-express/php/open-cades-sample.md)]

### Versão para Impressão de uma Assinatura CAdES

Não está disponível nesse projeto ainda.

### Pacote de Assinatura de uma Assinatura PAdES

Não está disponível nesse projeto ainda.

### Assinatura XML do Documento Inteiro

Não está disponível nesse projeto ainda.

### Assinatura de NFe

[!include[xml-nfe-sample.md](../../../../includes/pki-express/php/xml-nfe-sample.md)]

### Assinatura de Documento COD

Não está disponível nesse projeto ainda.

### Abrir/Validar Assinaturas em Documento XML Existente

Não está disponível nesse projeto ainda.
