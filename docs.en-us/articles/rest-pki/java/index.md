# Using Rest PKI on Java

Rest PKI can be used on Java applications using a wide range of frameworks and platforms.
To get started, choose one of the available samples projects:

* [Spring MVC (Java 7+)](mvc.md)
* [Spring MVC (Java 6)](mvc-java6.md)

## Client libraries

The usage of Rest PKI on Java applications should be done using one of the following packages:

* For Java 7+: [com.lacunasoftware.restpki:restpki-client](https://search.maven.org/artifact/com.lacunasoftware.restpki/restpki-client)
* For Java 6: [com.lacunasoftware.restpki:restpki-client-java6](https://search.maven.org/artifact/com.lacunasoftware.restpki/restpki-client-java6)

### Referencing the package (Java 7+)

If your project uses **Maven**, add this to your `pom.xml`:

[!include[pom.xml](../../../../includes/rest-pki/java/maven.md)]

If your project uses **Gradle**, add this to your `build.gradle`:

[!include[build.gradle](../../../../includes/rest-pki/java/gradle.md)]

### Referencing the package (Java 6)

If your project uses **Maven**, add this to your `pom.xml`:

[!include[pom.xml](../../../../includes/rest-pki/java/maven-java6.md)]

If your project uses **Gradle**, add this to your `build.gradle`:

[!include[build.gradle](../../../../includes/rest-pki/java/gradle-java6.md)]

### API Reference

<!-- Direct link to avoid DocFX warning -->
See the package [javadoc](https://docs.lacunasoftware.com/en-us/content/javadocs/restpki-client/).

> [!NOTE]
> The javadoc is actually for the Java 7+ version of the library, but the APIs of both packages are almost identical.

### Source code

The packages are open-source, hosted on:

* Java 7+ version: [BitBucket](https://bitbucket.org/Lacunas/restpki-java-client)
* Java 6 version: [GitHub](https://github.com/LacunaSoftware/RestPkiJava6Client)

Feel free to fork the packages if you need to make any customizations.
