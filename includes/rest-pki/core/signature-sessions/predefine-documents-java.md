```java
CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
String pdfPath = ...;
Stream xmlStream = ...;

List<SignatureSessionDocumentToSign> documents = new ArrayList<>();

SignatureSessionDocumentToSign document = new SignatureSessionDocumentToSign();
document.setFile(FileReference.fromFile(pdfPath, null, "application/pdf"));
documents.add(document);

document = new SignatureSessionDocumentToSign();
document.setFile(FileReference.FromStream(pdfPath, "doc.xml", null));
documents.add(document);

CreateSignatureSessionResponse response = restPkiService.createSignatureSession(request, null, null, documents);

return "redirect:" + response.getRedirectUrl();
```
