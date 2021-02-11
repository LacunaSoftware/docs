```java
CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
request.setReturnUrl("http://localhost:60695/signature-session-rest-core/complete");
request.setDisableDownloads(true);

CreateSignatureSessionResponse response = restPkiService.createSignatureSession(request);

return "redirect:" + response.getRedirectUrl();
```