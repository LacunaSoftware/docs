# Compressão de assinaturas

Métodos usuais de compressão de dados utilizados em assinaturas individualmente não oferecem um resultado satisfatório no
cenário de se armazenar grande quantidade de assinaturas. No entanto, é neste cenário que o método do PKI SDK tem
melhor resultado.

Ao usar compressão convencional de dados em cada assinatura individualmente, pouca redundância é encontrada. Ao considerar
as assinaturas armazenadas como um conjunto e tratá-las coletivamente, é possivel observar grande redundância de CRLs,
certificados e outras estruturas que se repetem por várias assinaturas realizadas em um período semelhante.

Utilizando a compressão de assinaturas do SDK é possível atingir níveis de compressão superiores a 90%.

## Comprimindo assinatura

A compressão de assinatura é realizada através da classe @Lacuna.Pki.Cades.CadesSignatureCompression. Seus métodos de
compressão e descompressão utilizam uma implementação de um @Lacuna.Pki.Stores.ISimpleStore, que é responsável por
armazenar os dados que tendem a ser comuns entre as assinaturas. O código abaixo exemplifica a compressão de uma
assinatura com desanexação do encapsulated content:

```cs
// bytes de um assinatura CAdES a ser comprimida
byte[] sigContent = ...

// Simple store baseado em um filesystem no diretório temporário
var store = new FileSystemSimpleStore(Path.GetTempPath());

byte[] eContent;

// Comprimindo assinatura com eContent detached
byte[] compressed = CadesSignatureCompression.Compress(sigContent, store, out eContent);

// Descomprimindo assinatura
byte[] decompressed = CadesSignatureCompression.Decompress(compressed, store, eContent);

if (sigContent.SequenceEqual(decompressed)) {
    Console.WriteLine("OK!");
} else {
    Console.WriteLine("NOT OK!");
}
```

Um elemento fundamental para a compressão de assinatura é o objeto @Lacuna.Pki.Stores.ISimpleStore. No exemplo acima, foi
utilizado um @Lacuna.Pki.Stores.FileSystemSimpleStore, que irá armazenar os dados da compressão no diretório passado na sua
instanciação. Caso deseje utilizar outras estruturas como banco de dados ou servidores na nuvem, basta implementar a
interface @Lacuna.Pki.Stores.ISimpleStore.

## Veja também

* @Lacuna.Pki.Cades.CadesSignatureCompression
* @Lacuna.Pki.Stores.ISimpleStore
* @Lacuna.PKi.Stores.FileSystemSimpleStore
* [Pacotes nuget opcionais](../../optional-packages/index.md)
