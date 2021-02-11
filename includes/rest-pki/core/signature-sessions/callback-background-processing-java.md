```java
@Controller
public class SessionCallbackController {
	...
	public String index(
		Model model, 
		@RequestParam(value="signatureSessionId") String sessionId
	) throws RestException {
		SignatureSession session = restPkiService.getSignatureSession(UUID.fromString(sessionId));
		if (session.getStatus() != SignatureSessionStatus.Completed &&
			session.getStatus() != SignatureSessionStatus.Processing){
			return "redirect:/";
		}
		model.addAttribute("session", session);
		return "signature-callback/index";
	}
}
```
