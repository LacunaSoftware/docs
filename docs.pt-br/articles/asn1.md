# Estruturas ASN.1 proprietárias

O OID 1.3.6.1.4.1 representa o [registro de empresas privadas](https://www.iana.org/assignments/enterprise-numbers) no Internet Assigned Numbers Authority (IANA):

```
id-pen-iana OBJECT IDENTIFIER ::= { 1 3 6 1 4 1 }
```

A Lacuna Software está registrada sob o número 46332, sendo portanto dona do OID `1.3.6.1.4.1.46332` e subárvore correspondente:

```
id-lacuna OBJECT IDENTIFIER ::= { id-pen-iana 46332 }
```

<a name="cert-atts" />
## 1. Atributos de certificados de atributo

A subárvore `1.3.6.1.4.1.46332.1` é reservada para atributos a serem utilizados em certificados de atributo:

```
id-lacuna-cert-atts OBJECT IDENTIFIER ::= { id-lacuna 1 }
```

<a name="holder-photo-att" />
### 1.1. Atributo *Holder Photo*

O OID `1.3.6.1.4.1.46332.1.1` identifica o atributo `LacunaHolderPhotoAttribute`:

```
id-lacuna-holder-photo-att OBJECT IDENTIFIER ::= { id-lacuna-cert-atts 1 }
 
LacunaHolderPhotoAttribute ::= SEQUENCE {
    version    LacunaHolderPhotoAttVersion,
    mimeType   IA5String,
    content    OCTET STRING
}
 
LacunaHolderPhotoAttVersion ::= INTEGER { v1(0) }
```
