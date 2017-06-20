---
uid: Lacuna.Pki.Cades.CadesSignatureCompression
summary: *content
---

Classe com métodos para comprimir e descomprimir assinaturas CAdES armazenando objetos que provavelmente se repetem entre assinaturas,
como certificados e LCRs, em um *store* externo, evitando a redundância no armazenamento desses objetos quando se armazenam diversas
assinaturas em um mesmo sistema.

---
uid: Lacuna.Pki.Cades.CadesSignatureCompression
remarks: *content
---

Uma assinatura CAdES pode conter, espalhados dentro de sua codificação binária, diversos certificados, LCRs e outros objetos que
correspondem por até 99% do tamanho do pacote de assinatura. Tais objetos tendem a se repetir em diferentes assinaturas,
especialmente se realizadas em um curto espaço de tempo. Portanto, ao se armazenar diversas assinaturas CAdES, ocorre redundância
desnecessária no armazenamento de tais objetos.

Os métodos dessa classe utilizam um *store* externo (uma implementação da interface @Lacuna.Pki.Stores.ISimpleStore por exemplo um
banco de dados, sistema de arquivos ou sistema de armazenamento em nuvem) para implementar uma estratégia de compressão que leva em consideração
coletivamente os pacotes de assinatura armazenados em um sistema, ao invés de tratá-los como arquivos separados. Dado um pacote de
assinatura e um *store*, o método @Lacuna.Pki.Cades.CadesSignatureCompression.Compress(System.Byte[],Lacuna.Pki.Stores.ISimpleStore)
localiza os objetos passíveis de repetição em outras assinaturas, armazena os que ainda não se encontram no *store*, e retorna uma
estrutura de dados proprietária que pode ser utilizada para realizar o procedimento inverso (veja
<xref:Lacuna.Pki.Cades.CadesSignatureCompression.Decompress(System.Byte[],Lacuna.Pki.Stores.ISimpleStore)>).

Para mais informações, veja o artigo [Compressão de assinaturas](../articles/pki-sdk/signatures/cades/compression.md).

---
uid: Lacuna.Pki.Cades.CadesSignatureCompression
example: [*content]
---

No exemplo a seguir, partimos de um pacote de assinatura previamente produzido (seja com classe @Lacuna.Pki.Cades.CadesSigner ou mesmo
por sistema de terceiros, não importa) e o comprimimos usando como *store* um @Lacuna.Pki.Stores.FileSystemSimpleStore.

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

<!-- TODO: extract sample to .cs file and use it as a code snipped in the apidoc files for all languages, avoiding its repetition -->
