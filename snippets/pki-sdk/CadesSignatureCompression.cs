using Lacuna.Pki.Cades;
using Lacuna.Pki.Stores;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace snippets.pki_sdk {

	class CadesSignatureCompressionSnippet {

		static void Main(string[] args) {

			#region snippet1
			var signature = File.ReadAllBytes("existing-signature.p7s");
			var store = new FileSystemSimpleStore(@"C:\Temp");
			var compressedSignature = CadesSignatureCompression.Compress(signature, store);
			var decompressedSignature = CadesSignatureCompression.Decompress(compressedSignature, store);
			if (decompressedSignature.SequenceEqual(signature)) {
				Console.WriteLine("OK!");
			} else {
				Console.WriteLine("NOT OK!");
			}
			#endregion


		}
	}
}
