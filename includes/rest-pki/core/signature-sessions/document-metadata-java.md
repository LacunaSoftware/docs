```java
CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
...
List<String> firstElement = new ArrayList<>();
firstElement.add("Patorum Inc.");
request.putDocumentMetadataItem("organization", firstElement);

List<String> secondElement = new ArrayList<>();
secondElement.add("10");
request.putDocumentMetadataItem("priority", secondElement);

// Multi-valued metadata also supported
List<String> listOfElements = new ArrayList<>();
listOfElements.add("Document");
listOfElements.add("Forms");
request.putDocumentMetadataItem("categories", listOfElements);

```