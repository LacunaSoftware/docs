```plaintext
POST {endpoint}/api/signature-sessions
{
	...
	"documents": [
		{
			"file": {
				"content": "Base64EncodedBytes==",
				"name": "doc1.pdf"
			}
		},
		{
			"file": {
				"url": "https://yourapp.com/doc2.pdf"
			}
		},
		...
	]
}
```
