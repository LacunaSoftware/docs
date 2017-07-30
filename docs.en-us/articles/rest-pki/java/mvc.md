# Java 7+ Spring MVC samples project

The **Java 7+ Spring MVC samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Java 7+ web application using the [Spring MVC](http://spring.io/) framework. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Java/sample-spring-mvc

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the file [Java/sample-spring-mvc/src/main/java/sample/util/Util.java](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Java/sample-spring-mvc/src/main/java/sample/util/Util.java#L24-L28)
1. In a command prompt, navigate to the folder `Java/sample-spring-mvc` and run the command
   `gradlew run` (on Linux `./gradlew run`). If you are using Windows, you can alternatively
   double-click the file `Run-Sample.bat`.
1. Once you see the message "Started Application in x.xxx seconds" (the on-screen percentage
   will *not* reach 100%), open a web browser and go the URL [http://localhost:8080/](http://localhost:8080/)
