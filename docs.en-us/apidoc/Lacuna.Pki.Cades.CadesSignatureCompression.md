---
uid: Lacuna.Pki.Cades.CadesSignatureCompression
summary: *content
---

TODO: traduzir

Class with methods for compressing and decompressing CAdES signatures storing objects likely to be repeated across different
signatures such as certificates and CRLs on an external store, avoiding redundant storage of such objects.

---
uid: Lacuna.Pki.Cades.CadesSignatureCompression
remarks: *content
---

TODO: traduzir

A CAdES signature may contain, somewhere in its encoding, several certificates, CRLs and other objects that may account to as 
much as 99% of the length of the signature. Such objects tend to repeat themselves across different signatures performed close
together in time. Therefore, if one stores several CAdES signatures, it will be needlessly storing such objects redundantly.

The methods of this class use an external store (an implementation of the @Lacuna.Pki.Stores.ISimpleStore for instance a database,
filesystem or cloud service) to implement a strategy that takes into account collectively all signatures stored by a system, instead
of treating them as separate files. Given a signature and a store, the
@Lacuna.Pki.Cades.CadesSignatureCompression.Compress(System.Byte[],Lacuna.Pki.Stores.ISimpleStore) method will locate the objects
likely to be repeated on other signatures, store the ones that are not already in the store, and return a proprietary data object
that can be used to do the inverse process (decompress the signature, see
<xref:Lacuna.Pki.Cades.CadesSignatureCompression.Decompress(System.Byte[],Lacuna.Pki.Stores.ISimpleStore)>).

For more information see article [Signature Compression](../articles/pki-sdk/signatures/cades/compression.md).

---
uid: Lacuna.Pki.Cades.CadesSignatureCompression
example: [*content]
---

TODO: traduzir

In the following example, we take a signature previously performed (maybe with the @Lacuna.Pki.Cades.CadesSigner class, maybe imported
from a 3rd party system, it doesn't really matter) and compress it using as store the @Lacuna.Pki.Stores.FileSystemSimpleStore.

```csharp
using System;
using Lacuna.Pki;
using Lacuna.Pki.Cades;
using Lacuna.Pki.Stores;
 
class Test {
	public static void Main() {
		var signature = new byte[0];
		var store = new FilesystemSimpleStore(@"C:\Temp");
		var compressedSignature = CadesSignatureCompression.Compress(signature, store);
		var decompressedSignature = CadesSignatureCompression.Decompress(compressedSignature, store);
		if (decompressedSignature.SequenceEqual(signature)) {
			Console.WriteLine("OK!");
		} else {
			Console.WriteLine("NOT OK!");
		}
	}
}
```
