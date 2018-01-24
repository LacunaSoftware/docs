# Usando o PKI Express em Java

Este artigo mostra como usar o [PKI Express](../index.md) em Java

## Projeto de exemplos

O projeto de exemplos demonstra o uso do PKI Express junto com o [Web PKI](../../web-pki/index.md)
em um projeto compatível com **Java 7+** (incluindo 8 e 9) utilizando o framework [Spring MVC](http://spring.io/).
Ele encontra-se hospedado no GitHub:

https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/Java

> [!NOTE]
> Se você utiliza uma versão anterior do Java, por favor [fale conosco](https://www.lacunasoftware.com/pt/home/purchase).

### Executando o projeto

Para executar o projeto, é necessário ter o Java Development Kit instalado. Você pode usar as seguintes ferramentas:

**Usando Gradle**

1. [Instale o PKI Express](../setup/index.md)

1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiExpressSamples.git)

1. Em um terminal, navegue até a pasta `Java` e execute o comando `gradlew bootRun` (no Linux, `./gradlew bootRun`). Se você estiver em um ambiente Windows, você pode simplesmente dar um duplo-clique no arquivo `Run-Sample.bat`

1. Quando aparecer a mensagem "Started Application in x.xxx seconds" (a porcentagem exibida não chegará a 100%), abra um navegador e visite a URL http://localhost:60833/

**Usando Maven**

1. [Instale o PKI Express](../setup/index.md)

1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiExpressSamples.git)

1. Em um terminal, navegue até a pasta `Java` e execute o comando `mvn spring-boot:run`. Para executar esse comando, é necessário
ter o Apache Maven instalado.

1. Quando aparecer a mensagem "Started Application in x.xxx seconds" (a porcentagem exibida não chegará a 100%), abra um navegador e visite a URL http://localhost:60833/

## Pacote Maven

O uso do PKI Express em Java deve ser feito com o pacote Maven [pki-express](https://bintray.com/lacunasoftware/maven/pki-express)

> [!NOTE]
> O pacote não encontra-se no repositório *Maven Central* mas sim no repositório de pacotes Maven da Lacuna Software, que precisa
> ser adicionado à lista de repositórios do seu projeto. Veja instruções abaixo.

Se o seu projeto é compilado com o **Maven**, adicione os seguintes trechos ao seu arquivo `pom.xml`:

[!include[pom.xml](../../../../includes/pki-express/java/maven.md)]

Se o seu projeto é compilado com o **Gradle**, adicione os seguintes trechos ao seu arquivo `build.gradle`:

[!include[pom.xml](../../../../includes/pki-express/java/gradle.md)]

O pacote é de código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/PkiExpressJava). Você pode fazer um *fork* para fazer
customizações, e até mesmo submeter um *pull request*.
