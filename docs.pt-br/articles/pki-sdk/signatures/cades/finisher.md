# Finalização assíncrona de assinaturas

A finalização assíncrona de assinaturas é uma abordagem oferecida pelo PKI SDK para um processo de assinatura mais confiável
e otimizado. O uso da finalização assíncrona visa as seguintes vantagens:

* Resistência a falhas na distribuição de CRLs/OCSPs e carimbos de tempo.
* Ganho de desempenho na parte síncrona do processo, pois não é mais necessário aguardar resposta de requisições de CRL,
  OCSP ou carimbo de tempo.
* Uso de políticas de assiantura com grace period.

Deste modo, a assinatura do cliente é solicitada apenas uma vez e é salva, encerrando-se o processo com o usuário. Em um
outro momento, através de um *background worker* por exemplo, as requisições e verificações online ou em cache são realizadas
e a assinatura é finalizada. Caso haja problemas neste segundo passo, não é necessário solicitar novamente a assiantura do
cliente.

## Finalizador de assiantura

A finalização de assinatura é gerenciada pela classe @Lacuna.Pki.Cades.CadesSignatureFinisher. Abaixo temos um exemplo de
uso do finalizador e em seguida um detalhamento dos métodos utilizados.

Em um primeiro momento, criamos uma assinatura não finalizada:

```cs
// Assinatura CAdES básica
var signer = new CadesSigner();
signer.SetSigningCertificate(signingCert);
signer.SetDataToSign(toSign);
signer.SetPolicy(policy);

// Antes de executar o ComputeSignature(),
// defina que a assinatura não será finalizada
signer.SetFinishSignature(false);

signer.ComputeSignature();
var cadesSig = signer.GetSignature();       // retorna pacote de assinatura não finalizado

// Salvar a assinatura não finalizada e encerrar o processo
```

Em um segundo momento, através de um *background worker* (serviço do Windows ou task agendada), finalizamos a assinatura:

```cs
// Carregando assinatura não finalizada
byte[] cadesSig = ...

// Instanciando o finilizador com a assinatura não finalizada
var finisher = new CadesSignatureFinisher(CadesSignature.Open(cadesSig)));
finisher.SetPolicy(policy);
finisher.SetTimestampRequester(tsRequester);          // requester do carimbo de tempo (se a política exigir carimbo)
finisher.UseOnlyCRLsIssuedAfterGracePeriod = true;    // usar apenas valores de revogação emitidos após o fim do grace period

finisher.PerformStep();
if (finisher.IsSignatureFinished) {
    // Assinatura finalizada
    // Retorna os bytes da assinatura finalizada com encoding BER
    var finishedCadesSig = finisher.GetSignatureEncoded();
} else {
    // Retorna o delay sugerido até a chamda novamente do serviço de finalização com PerformStep()
    var delay = finisher.NextStepDelay.Value;

    // ou

    // Retorna a hora sugerida para a próxima chamada ao serviço de finalização com PeformStep()
    var time = finisher.NextStepTime.Value;
}
```

* @Lacuna.Pki.Cades.CadesSignatureFinisher.SetPolicy(Lacuna.Pki.Cades.CadesPolicySpec) /
  @Lacuna.Pki.Cades.CadesSignatureFinisher.SetPolicyMapper(Lacuna.Pki.Cades.ICadesPolicyMapper) /
  @Lacuna.Pki.Cades.CadesSignatureFinisher.SetPolicyMapper(Lacuna.Pki.Cades.ICadesPolicyMapperBySignerInfo) -
  Usados para definir a política de assinatura para finalização. Ideal que seja a mesma política utilizada no assinador,
  mas neste segundo momento apenas as propriedades de carimbos de tempo, valores e referências de revogação e certificados
  serão utilizadas.

* @Lacuna.Pki.Cades.CadesSignatureFinisher.SetTimestampRequester(Lacuna.Pki.ITimestampRequester) -
  Usado se a política de assinatura exigir carimbo de tempo.

* @Lacuna.Pki.Cades.CadesSignatureFinisher.UseOnlyCrlsIssuedAfterGracePeriod -
  Exige que os valores de revogação a serem verificados tenham sido emitidos após o grace period. Para mais informações
  sobre grace period veja o artigo [Políticas com grace period](../policies/grace-period.md).

* @Lacuna.Pki.Cades.CadesSignatureFinisher.PerformStep -
  Este método é o motor do finalizador de assinatura, é responsável por buscar os elementos necessários para finalizar
  a assinatura e, se houver política de grace period, informa novo momento para sua execução caso o grace period não
  tenha encerrado.

## Veja também

* @Lacuna.Pki.Cades.CadesSignatureFinisher
