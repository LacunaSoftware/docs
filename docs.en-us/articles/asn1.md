# Proprietary ASN.1 types

The OID 1.3.6.1.4.1 represents the [private enterprise numbers (PEN) registry](https://www.iana.org/assignments/enterprise-numbers) on the Internet Assigned Numbers Authority (IANA):

```
id-pen-iana OBJECT IDENTIFIER ::= { 1 3 6 1 4 1 }
```

Lacuna Software is registered under number 46332, hence it is the owner of the OID `1.3.6.1.4.1.46332` and is responsible for the definition of all OIDs under that subtree:

```
id-lacuna OBJECT IDENTIFIER ::= { id-pen-iana 46332 }
```

<a name="cert-atts" />
## 1. Certificate attributes

The subtree `1.3.6.1.4.1.46332.1` is reserved for attributes to be used on X.509 attribute certificates:

```
id-lacuna-cert-atts OBJECT IDENTIFIER ::= { id-lacuna 1 }
```

<a name="holder-photo-att" />
### 1.1. Holder Photo attribute

The OID `1.3.6.1.4.1.46332.1.1` identifies the attribute `LacunaHolderPhotoAttribute`:

```
id-lacuna-holder-photo-att OBJECT IDENTIFIER ::= { id-lacuna-cert-atts 1 }
 
LacunaHolderPhotoAttribute ::= SEQUENCE {
    version    LacunaHolderPhotoAttVersion,
    mimeType   IA5String,
    content    OCTET STRING
}
 
LacunaHolderPhotoAttVersion ::= INTEGER { v1(0) }
```

<a name="access-identity-types" />
## 2. Access Identity Types

The subtree `1.3.6.1.4.1.46332.2` is reserved for usage on `OtherName`s present in [Access Identity attributes](https://tools.ietf.org/html/rfc5755#section-4.4.2):

```
id-lacuna-access-identity-types OBJECT IDENTIFIER ::= { id-lacuna 2 }
```

`OtherName`s identified with OIDs from this subtree have their value encoded as `IA5String` unless explicitly noted on the OID.

<a name="crc" />
### 2.1. Professional Identification for Conselho Regional de Contabilidade (CRC)

The OID `1.3.6.1.4.1.46332.2.1` identifies an `OtherName` whose value corresponds to the subject's professional identification issued by
the Conselho Regional de Contabilidade (CRC):

```
id-crc OBJECT IDENTIFIER ::= { id-lacuna-access-identity-types 1 }
```
