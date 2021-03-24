```java
/**
* POST /pades-signature-express/start?
*
* This action receives the form submission from the signature page. It will 
* perform a PAdES signature in three steps using PKI Express and Web PKI.
*/
@PostMapping("/start")
public String postStart(/* ... */) throws IOException {
	// ...
```