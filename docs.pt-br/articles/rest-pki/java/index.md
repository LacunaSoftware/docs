# Usando o Rest PKI em Java

Rest PKI pode ser usado em aplicações Java usando uma ampla gama de estruturas e plataformas. Para começar, escolha um dos projetos de amostras disponíveis:

* [Spring MVC (Java 7+)](mvc.md)
* [Spring MVC (Java 6)](mvc-java6.md)

## Biblioteca de clientes 

O uso de Rest PKI em aplicações Java deve ser feito usando um dos seguintes pacotes:

* Para Java 7+: [com.lacunasoftware.restpki:restpki-client](https://bintray.com/lacunasoftware/maven/restpki-client)
* Para Java 6: [com.lacunasoftware.restpki:restpki-client-java6](https://bintray.com/lacunasoftware/maven/restpki-client-java6)

> [!NOTE]
> Os pacotes não estão atualmente no Maven Central, mas em um repositório privado do Maven no Bintray, que precisa ser adicionado à lista de repósitorios do seu arquivo de construção. Veja 
as instruções abaixo.

### Referenciando o pacote (Java 7+)

Se seu projeto usa **Maven**, adicione isso ao seu `pom.xml`:

[!include[pom.xml](../../../../includes/rest-pki/java/maven.md)] 

Se seu projeto usa **Gradle**, adicione isso ao seu `build.gradle`:

[!include[build.gradle](../../../../includes/rest-pki/java/gradle.md)] 

### Referenciando o pacote (Java 6)

Se seu projeto usa **Maven**, adicione isso ao seu `pom.xml`:

[!include[pom.xml](../../../../includes/rest-pki/java/maven-java6.md)] 

Se seu projeto usa **Gradle**, adicione isso ao seu `build.gradle`:

[!include[build.gradle](../../../../includes/rest-pki/java/gradle-java6.md)] 

## Referência API

Veja este pacote [javadoc](https://docs.lacunasoftware.com/en-us/content/javadocs/restpki-client/)

> [!NOTE]
> O javadoc é, na verdade, para a versão Java 7+ da biblioteca, mas as APIs de ambos os pacotes são quase idênticas.

## Código fonte

Os pacotes são de código aberto, hospedados em:

* Versão Java 7+: [BitBucket](https://bitbucket.org/Lacunas/restpki-java-client)
* Versão Java 6: [GitHub](https://github.com/LacunaSoftware/RestPkiJava6Client)

Sinta-se à vontade para distribuir os pacotes se precisar fazer alguma personalização.