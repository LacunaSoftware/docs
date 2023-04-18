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

`OtherName`s identified with OIDs from this subtree have their value encoded as `PrintableString` unless explicitly noted on the OID.

<a name="crc-number" />
### 2.1. Professional Identification for Conselho Regional de Contabilidade (CRC)

The OID `1.3.6.1.4.1.46332.2.1` identifies an `OtherName` whose value corresponds to the subject's professional identification issued by
the Conselho Regional de Contabilidade (CRC):

```
id-crc-number OBJECT IDENTIFIER ::= { id-lacuna-access-identity-types 1 }
```

<a name="certificate-policies" />
## 3. Certificate Policies

The subtree `1.3.6.1.4.1.46332.3` is reserved for **Certificate Policies**.

```
id-lacuna-certificate-policies OBJECT IDENTIFIER ::= { id-lacuna 3 }
```

### 3.1. ANOREG/DF certificate policy

The OID `1.3.6.1.4.1.46332.3.1` identifies the certificate policy adopted by Associação dos Notários e Registradores do Distrito Federal - ANOREG/DF.

### 3.2. 8º Ofício de Notas do Rio de Janeiro certificate policies

The subtree `1.3.6.1.4.1.46332.3.2` identifies the certificate policies adopted by 8º Ofício de Notas do Rio de Janeiro:

* `1.3.6.1.4.1.46332.3.2.1`: certificates with a private key generated on the subject's personal computer
* `1.3.6.1.4.1.46332.3.2.2`: certificates with a private key generated on the subject's mobile device
* `1.3.6.1.4.1.46332.3.2.3`: certificates with a private key generated on the subject's cryptographic device

### 3.3. Device authentication certificate policy

The OID `1.3.6.1.4.1.46332.3.3` identifies the certificate policy added to certificates meant to be used in trusted devices authentication.

### 3.4. Lacuna Software PKI certificate policies

The subtree `1.3.6.1.4.1.46332.3.4` identifies the certificate policies adopted by **Lacuna Software PKI**:

* `1.3.6.1.4.1.46332.3.4.1`: certificates with a private key generated on the subject's personal computer
* `1.3.6.1.4.1.46332.3.4.2`: certificates with a private key generated on the subject's mobile device
* `1.3.6.1.4.1.46332.3.4.3`: certificates with a private key generated on the subject's cryptographic device

<a name="tsa-policies" />
## 4. TSA (Time Stamping Authority) Policies

The subtree `1.3.6.1.4.1.46332.4` is reserved for **TSA (Time Stamping Authority) Policies**.

```
id-lacuna-tsa-policies OBJECT IDENTIFIER ::= { id-lacuna 4 }
```

### 4.1. Standard Lacuna Software TSA policy

The OID `1.3.6.1.4.1.46332.4.1` identifies the standard Lacuna Software TSA policy adopted by the Lacuna Software TSA, available at [tsa2.lacunasoftware.com](https://tsa2.lacunasoftware.com/)

