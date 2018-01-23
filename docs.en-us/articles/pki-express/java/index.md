# Using PKI Express on Java

This articles describes how to use [PKI Express](../index.md) on Java

## Samples project

The samples project shows the usage of PKI Express together with the [Web PKI](../../web-pki/index.md) browser component
on a **Java 7+** web application (including 8 and 9) using the [Spring MVC](http://spring.io/) framework. It is hosted on GitHub:

https://github.com/LacunaSoftware/PkiExpressSamples/tree/master/Java

> [!NOTE]
> If you are using a previous version of Java, please [contact us](https://www.lacunasoftware.com/en/home/purchase).

### Running with Gradle

1. [Install PKI Express](../setup/index.md)

1. [Download the project](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiExpressSamples.git)

1. In a command prompt, navigate to the folder `Java` and run the command `gradlew bootRun` (on Linux `./gradlew bootRun`).
   If you are using Windows, you can alternatively double-click the file `Run-Sample.bat`.

1. Once you see the message "Started Application in x.xxx seconds" (the on-screen percentage
   will *not* reach 100%), open a web browser and go the URL http://localhost:60833/

> [!NOTE]
> If you are using a Spring Boot version lower than 1.3.x, you need to run the task `run` instead of `bootRun`.

### Running with Maven
1. [Install PKI Express](../setup/index.md)

1. [Download the project](https://github.com/LacunaSoftware/PkiExpressSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiExpressSamples.git)

1. In a command prompt, navigate to the folder `Java` and run the command `mvn spring-boot:run`.

1. Once you see the message "Started Application in x.xxx seconds" (the on-screen percentage
   will *not* reach 100%), open a web browser and go the URL http://localhost:60833/

## Maven package

In order to use PKI Express on Java you must include the Maven package [pki-express](https://bintray.com/lacunasoftware/maven/pki-express)

> [!NOTE]
> The package is not currently on Maven Central but on a private Maven repository at Bintray, which needs to be added to the list of repositories of your build file. See instructions below.

If your project uses **Maven**, add this to your `pom.xml`:

```xml
<dependencies>
	...
	<dependency>
		<groupId>com.lacunasoftware.pkiexpress</groupId>
		<artifactId>pki-express</artifactId>
		<version>1.2.1</version>
	</dependency>
	...
</dependencies>
...
<repositories>
	<repository>
		<id>lacuna.repository</id>
		<name>lacuna repository</name>
		<url>http://dl.bintray.com/lacunasoftware/maven</url>
	</repository>
</repositories>
```

If your project uses **Gradle**, add this to your `build.gradle`:

```
repositories {
	mavenCentral()
	maven {
		url  "http://dl.bintray.com/lacunasoftware/maven" 
	}
} 

dependencies {
	compile("com.lacunasoftware.pkiexpress:pki-express:1.2.1")
}
```

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/PkiExpressJava). Feel free to fork it if you need to make any customizations.
