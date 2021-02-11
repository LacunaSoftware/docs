```groovy
repositories {
	mavenCentral()
	maven {
		url  "http://dl.bintray.com/lacunasoftware/maven"
	}
}

dependencies {
    compile("com.lacunasoftware.restpki:restpki-core-client:1.0.0")
    ...
}
```