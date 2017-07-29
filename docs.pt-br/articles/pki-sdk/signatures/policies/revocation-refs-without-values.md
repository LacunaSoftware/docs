# Políticas com referências, mas sem valores

Existem políticas de assinaturas que definem uso de carimbo de tempo sobre as referências de revogação, mas não incluem
os valores completos de revogação. Em outras palavras, a política diz que na assinatura deve haver um carimbo de tempo
sobre o digest dos dados de revogação utilizados para validar o certificado do signatário, mas não é obrigatório que
também seja guardado esses dados no pacote da assinatura, como pode ser observado nas políticas CAdES-C, CAdES-X
Type 1 ou ICP-Brasil AD-RV.

Para uma aplicação poder validar uma assinatura neste cenário, é preciso ter recursos para recuperar os dados exatos de
revogação referentes ao digest carimbado na assinatura. A solução no SDK deve utilizar um
@Lacuna.Pki.Stores.IReferencedCrlStore no momento da assiantura, assim, guardando os dados de revogação utilizados na
validação dos certificados idexados pelo seu digest, o que tornará a validação da assinatura eficiente e consistente.

O exemplo abaixo demonstra o uso desta solução.

```cs
// IReferencedCrlStore implementado
IReferencedCrlStore refStore = ...

// Criando assinatura
var signer = new CadesSigner();
signer.SetSigningCertificate(signingCert);
signer.SetDataToSign(toSign);
signer.SetPolicy(policy);                   // Política com referências mas sem valores 
signer.SetCrlStore(refStore);               // Definindo store para guardar valores referenciados na validação
signer.SetTimestampRequester(tsRequester);
signer.ComputeSignature();
byte[] sig = signer.GetSignature();

// Validando assinatura
var cadesSig = CadesSignature.Open(sig);
var vrs = cadesSig.ValidateAllSignatures(policy, crlStore: refStore);
```

Caso utilize uma implementação de um a partir de um @Lacuna.Pki.Stores.ISimpleStore, por exemplo na
[compressão de assinaturas](../cades/compression.md), é possivel instanciar um @Lacuna.Pki.Stores.IReferencedCrlStore
facilmente como demonstrado no exemplo abaixo através da implementação
@Lacuna.Pki.Stores.ReferencedCrlStoreFromSimpleStore.

```cs
// ISimpleStore já implementado
ISimpleStore simpleStore = ...

// Instanciando IReferencedCrlStore
IReferencedCrlStore refStore = new ReferencedCrlStoreFromSimpleStore(simpleStore);
```

> [!NOTE]
> Esta estratégia pode ser favorável caso os dados de revogação verificados sejam CRLs, que podem ser arquivos extensos
> chegando a alguns mega bytes de tamanho. Mas caso os dados de revogação sejam pequenos, como exemplo dos OCSPs, é
> mais indicado que seus valores completos sejam também incluídos no pacote de assinatura, o que tornará a validação um
> processo mais eficiente e menos complexo.

## Veja também

* [Compressão de assinaturas](../cades/compression.md)
* @Lacuna.Pki.Stores.IReferencedCrlStore
* @Lacuna.Pki.Stores.ISimpleStore
* @Lacuna.Pki.Stores.ReferencedCrlStoreFromSimpleStore
