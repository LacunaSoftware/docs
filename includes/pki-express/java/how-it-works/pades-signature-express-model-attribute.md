```java
// Render the signature page (templates/pades-signature.html)
model.addAttribute("state", state);
model.addAttribute("fileToSign", fileToSign);
model.addAttribute("userfile", userfile);
return "pades-signature";
```