```java
CreateSignatureSessionRequest request = new CreateSignatureSessionRequest();
request.setReturnUrl("http://localhost:60695/signature-session-rest-core/complete");

CreateSignatureSessionResponse response = restPkiService.CreateSignatureSession(request);

return "redirect:" + response.getRedirectUrl();
```