# Rest PKI client lib for Java

The client lib for Java consists of	the package [com.lacunasoftware.restpki:restpki-client](https://bintray.com/lacunasoftware/maven/restpki-client),
which is compatible with Java 7+ (for Java 6, see section below).

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

## API Reference

<!-- Direct link to avoid DocFX warning -->
See the [javadoc](https://docs.lacunasoftware.com/en-us/content/javadocs/restpki-client/).

## Java 6

If your project uses Java 6, use the package [com.lacunasoftware.restpki:restpki-client-java6](https://bintray.com/lacunasoftware/maven/restpki-client-java6) instead.

## Source code

Both packages are open-source and can be viewed on:

* restpki-client (for Java 7+): https://bitbucket.org/Lacunas/restpki-java-client
* restpki-client-java6 (for Java 6): https://github.com/LacunaSoftware/RestPkiJava6Client
