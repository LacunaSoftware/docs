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

<a name="access-identity-types" />
## 2. Tipos de identificação

A subárvore `1.3.6.1.4.1.46332.2` é reservada para identificar estruturas `OtherName`s utilizadas em atributos de Identificação de Acesso (conforme descrito no
[DOC-ICP 16.01](https://www.iti.gov.br/images/repositorio/legislacao/documentos-principais/16.1/DOC-ICP-16.01_Versao_1.1.pdf) item 3.7.1.2 e na
[RFC 5755 item 4.4.2](https://tools.ietf.org/html/rfc5755#section-4.4.2))

```
id-lacuna-access-identity-types OBJECT IDENTIFIER ::= { id-lacuna 2 }
```

Estruturas `OtherName` identificadas com OIDs dessa subárvore possuem valor codificado como `PrintableString` exceto se explicitamente especificado no OID.

<a name="crc-number" />
### 2.1. Número de registro no CRC

O OID `1.3.6.1.4.1.46332.2.1` identifica o número de registro no CRC (Conselho Regional de Contabilidade) do titular do certificado:

```
id-crc-number OBJECT IDENTIFIER ::= { id-lacuna-access-identity-types 1 }
```

<a name="certificate-policies" />
## 3. Políticas de Certificado

A subárvore `1.3.6.1.4.1.46332.3` é reservada para **Políticas de Certificado**.

```
id-lacuna-certificate-policies OBJECT IDENTIFIER ::= { id-lacuna 3 }
```

### 3.1. Política de Certificado ANOREG/DF

O OID `1.3.6.1.4.1.46332.3.1` identifica a política de certificados adotada pela Associação dos Notários e Registradores do Distrito Federal - ANOREG/DF.

### 3.2. Políticas de Certificado do 8º Ofício de Notas do Rio de Janeiro

A subárvore `1.3.6.1.4.1.46332.3.2` identifica as políticas de certificados adotadas pelo 8º Ofício de Notas do Rio de Janeiro:

* `1.3.6.1.4.1.46332.3.2.1`: certificados cuja chave privada é gerada no computador pessoal do titular
* `1.3.6.1.4.1.46332.3.2.2`: certificados cuja chave privada é gerada em dispositivo móvel do titular
* `1.3.6.1.4.1.46332.3.2.3`: certificados cuja chave privada é gerada em dispositivo criptográfico (token USB ou *smartcard*) do titular

### 3.3. Política de Certificado de autenticação de dispositivos

O OID `1.3.6.1.4.1.46332.3.3` identifica a política de certificados conferida a certificados destinados a autenticação de dispositivos confiáveis.

### 3.4. Políticas de Certificado da ICP Lacuna Software

A subárvore `1.3.6.1.4.1.46332.3.4` identifica as políticas de certificados adotadas pela **ICP Lacuna Software**:

* `1.3.6.1.4.1.46332.3.4.1`: certificados cuja chave privada é gerada no computador pessoal do titular
* `1.3.6.1.4.1.46332.3.4.2`: certificados cuja chave privada é gerada em dispositivo móvel do titular
* `1.3.6.1.4.1.46332.3.4.3`: certificados cuja chave privada é gerada em dispositivo criptográfico (token USB ou *smartcard*) do titular