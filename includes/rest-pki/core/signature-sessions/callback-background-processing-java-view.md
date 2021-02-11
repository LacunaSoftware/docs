```html
<h2>Signed documents</h2>
<ul th:each="document : ${session.getDocuments()}">
	<li>
		<div th:if="${document.getStatus() == T(com.lacunasoftware.restpki.SignatureSessionStatus).Completed}" 
			<a th:href="${document.getSignedFile().getLocation()">
				<span th:text="${document.getSignedFile().getName()}"/>
			</a>
		</div>
		<div th:if="${document.getStatus() != T(com.lacunasoftware.restpki.SignatureSessionStatus).Completed}" 
			<span th:text="${document.getOriginalFile().getName()}"/> (processing)
		</div>
	</li>
</ul>
```
