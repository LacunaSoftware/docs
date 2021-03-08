```java
HashMap<String, List<String>> mapMetaData = new HashMap<String, List<String>>();
List<String> firstElement = new ArrayList<>();
firstElement.add("Patorum Inc.");		
mapMetaData.put("organization", firstElement);

List<String> secondElement = new ArrayList<>();
secondElement.add("10");
mapMetaData.put("priority", secondElement);

// Multi-valued metadata also supported
List<String> listOfElements = new ArrayList<>();
listOfElements.add("Document");
listOfElements.add("Forms");
mapMetaData.put("categories", listOfElements);

CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
request.setDocumentMetadata(mapMetaData);
	
CreateSignatureSessionResponse sessionResponse = service.createSignatureSession(request);
```