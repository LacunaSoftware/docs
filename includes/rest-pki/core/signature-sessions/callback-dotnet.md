```cs
public class SessionCallbackController : Controller {
		...	
		public async Task<IActionResult> Index(Guid signatureSessionId) {
			var session = await restPkiService.GetSignatureSessionAsync(signatureSessionId.Value);
			if (session.Status != SessionStatus.Completed) {
				return Redirect("/");
			}
			return View(session);
		}
	}
```
