```java
// Set a file reference for the stamp file. Note that this file can be referenced later by
// "fref://stamp" at the "url" field on the visual representation (see content/vr.json file or
// getVisualRepresentation(case) method).
signatureStarter.addFileReference("stamp", Util.getPdfStampPath());

// Set visual representation. We provide a Java class that represents the visual representation
// model.
signatureStarter.setVisualRepresentation(PadesVisualElements.getVisualRepresentation(1));
// Alternatively, we can provide a javascript file that represents json-encoded the model
// (see resources/static/vr.json).
//signatureStarter.setVisualRepresentationFromFile(Util.getVisualRepresentationPath());
```