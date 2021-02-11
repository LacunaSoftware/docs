```html
<h2>Signed documents</h2>
<ul th:each="document : ${session.getDocuments()}">
	<li>
		<a th:href="${document.getSignedFile().getLocation()">
			<span th:text="${document.getSignedFile().getName()}"/>
		</a>
	</li>
</ul>
```
