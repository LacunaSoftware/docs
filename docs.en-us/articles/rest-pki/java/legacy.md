# Using Rest PKI on Java 6

We are still migrating the documentation to the new unified portal. For now, please[see this article on GitHub](https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Java#java-6-sample)
## Client lib

The client lib for Java 6 consists of the package [com.lacunasoftware.restpki:restpki-client-java6](https://bintray.com/lacunasoftware/maven/restpki-client-java6).

> [!NOTE]
> The package is not currently on Maven Central but on the private Maven repository at http://dl.bintray.com/lacunasoftware/maven, which needs
> to be added to the list of repositories of your build file.

If your project uses **Maven**, add this to your `pom.xml`:

```xml
<dependencies>
	...
	<dependency>
		<groupId>com.lacunasoftware.restpki</groupId>
		<artifactId>restpki-client-java6</artifactId>
		<version>1.8.1</version>
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
	compile("com.lacunasoftware.restpki:restpki-client-java6:1.8.1")
}
```

### API Reference

<!-- Direct link to avoid DocFX warning -->
See the [javadoc](https://docs.lacunasoftware.com/en-us/content/javadocs/restpki-client/).

> [!NOTE]
> The javadoc is actually for the Java 7+ version of the library, but the API is almost identical.

### Source code

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/RestPkiJava6Client)
