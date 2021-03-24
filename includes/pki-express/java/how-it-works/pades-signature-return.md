```java
// Generate path for output file and add to signature finisher.
String filename = UUID.randomUUID() + ".pdf";
signatureFinisher.setOutputFilePath(Application.getTempFolderPath().resolve(filename));
```