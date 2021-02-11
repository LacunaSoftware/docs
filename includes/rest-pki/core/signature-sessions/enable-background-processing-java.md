```java
CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
request.setEnableBackgroundProcessing(true);

CreateSignatureSessionResponse response = restPkiService.createSignatureSession(request);

return "redirect:" + response.getRedirectUrl();
```
