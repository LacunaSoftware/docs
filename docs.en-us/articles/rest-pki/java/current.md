# Using Rest PKI on Java 7+

> [!NOTE]
> This article refers to usage on **Java 7+**. For Java 6, see article [Using Rest PKI on Java 6](legacy.md).

We are still migrating the documentation to the new unified portal. For now, please
[see this article on GitHub](https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Java)

## Client lib

The client lib for Java consists of	the package [com.lacunasoftware.restpki:restpki-client](https://bintray.com/lacunasoftware/maven/restpki-client),
which is compatible with Java 7+.

> [!NOTE]
> The package is not currently on Maven Central but on the private Maven repository at http://dl.bintray.com/lacunasoftware/maven, which needs
> to be added to the list of repositories of your build file.

If your project uses **Maven**, add this to your `pom.xml`:

```xml
<dependencies>
	...
	<dependency>
		<groupId>com.lacunasoftware.restpki</groupId>
		<artifactId>restpki-client</artifactId>
		<version>1.8.2</version>
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
	compile("com.lacunasoftware.restpki:restpki-client:1.8.2")
}
```

### API Reference

<!-- Direct link to avoid DocFX warning -->
See the [javadoc](https://docs.lacunasoftware.com/en-us/content/javadocs/restpki-client/).

### Source code

The package is open-source, hosted on [BitBucket](https://bitbucket.org/Lacunas/restpki-java-client)
