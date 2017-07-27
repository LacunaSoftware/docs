# Construção assistida de cadeias

Ao carregar um certificado utilizando os métodos @Lacuna.Pki.PKCertificate.Decode(System.Byte[]) ou
@Lacuna.Pki.PKCertificate.Decode(System.String), o PKI SDK automaticamente tentará montar a cadeia do certificado
através de recursos online como AuthorityInformationAccess, OCSP requests, Certificate Store de ACs interno da SDK,
entre outros. É fundamental que se tenha uma cadeia completa para a validação de um certificado, pois esta validação
também é realizada em seus emissores de forma recursiva. Os certificados das ACs encontrados online são guardados
no Certificate Store interno do SDK, oferecendo ótimo desempenho para próximas operações.

Ao utilizar certificados que possuem informação online de emissores ou certificados que seguem padrões conhecidos,
dificilmente haverá necessidade de auxiliar o processo de completar cadia de certificados.

Caso o usuário deseje utilizar certificados com características distintas ou padrões privados que impossibilitem
completar as cadeias de maneira automática, o SDK oferece algumas soluções para assistir esta ação, detalhadas
nas seções seguintes.

## Incluindo ACs no Windows Store

Caso o conjunto de ACs intermediárias aos certificados tenha uma cardinalidade limitada, é possivel incluí-las no
diretório **Autoridades de Certificação Intermediárias > Certificados** no Certificate Manager do usuário corrente
ou Computador Local. O SDK utilizará esse store local como fonte para completar a cadeia dos certificados.

Para mais detalhes de como importar certificados no Microsoft Management Console (MMC) veja o tópico **Como configurar
certificados intermediários** no artigo da Microsoft
[Como configurar certificados intermediários em um computador que está executando o IIS para autenticação de servidor](https://support.microsoft.com/pt-br/help/954755)

## Parâmetro ICertificateStore

A biblioteca oferece o uso de um store de certificados em memória (<xref:Lacuna.Pki.Stores.MemoryCertificateStore>) e
também a possibilidade do usuário criar sua própria implementação da interface @Lacuna.Pki.Stores.ICertificateStore caso
deseje utilizar uma estrutura mais complexa e comunicável com outros sistemas como banco de dados, cache, entre outros.

O parâmetro pode ser passado tanto no momento de carga do certificado (métodos
<xref:Lacuna.Pki.PKCertificate.Decode(System.Byte[],Lacuna.Pki.Stores.ICertificateStore)>
ou
<xref:Lacuna.Pki.PKCertificate.Decode(System.String,Lacuna.Pki.Stores.ICertificateStore)>)
quanto na propriedade @Lacuna.Pki.CertificateValidationOptions.CertificateStore das opções de validação
(<xref:Lacuna.Pki.CertificateValidationOptions>).

Exemplo de uso na carga:

```cs
// Bytes do certificado a ser carregado
byte[] certContent;

// Lista de certificados ou ACs privadas
List<PKCertificate> certList;

// Certificate store
var certStore = new MemoryCertificateStore(certList);

// Carregando certificado e completando cadeia
var cert = PKCertificate.Decode(certContent, certStore);
```

Exemplo de uso nas opções de validação:

```cs
// Certificado carregado
var cert = ...

// Lista de certificados ou ACs privadas
List<PKCertificate> certList;

// Certificate store
var certStore = new MemoryCertificateStore(certList);

// Opções de validação com raízes do Windows confiáveis e certStore do usuário
var options = new CertificateValidationOptions(TrustArbitrors.Windows);
options.CertificateStore = certStore;

// A cadeia será completada durante a validação
cert.Validate(options);
```

## Veja também

* @Lacuna.Pki.Stores.ICertificateStore
* @Lacuna.Pki.Stores.MemoryCertificateStore
* @Lacuna.Pki.PKCertificateWithKey
* [Como configurar certificados intermediários em um computador que está executando o IIS para autenticação de servidor](https://support.microsoft.com/pt-br/help/954755)
