# Colégio Notarial do Brasil - Atribuição de OIDs

O OID 1.3.6.1.4.1 representa o [registro de empresas privadas](https://www.iana.org/assignments/enterprise-numbers) no Internet Assigned Numbers Authority (IANA):

```
id-pen-iana OBJECT IDENTIFIER ::= { 1 3 6 1 4 1 }
```

O **Colégio Notarial do Brasil - CNB** está registrado sob o número **51928**, sendo portanto dono do OID `1.3.6.1.4.1.51928` e arco de OID correspondente:

```
id-cnb OBJECT IDENTIFIER ::= { id-pen-iana 51928 }
```

<a name="cert-policies" />
## 1. Políticas de certificado (*certificate policies*)

O subarco `1.3.6.1.4.1.51928.1` é reservado para identificadores de políticas de certificado:

```
id-cnb-cert-policies OBJECT IDENTIFIER ::= { id-cnb 1 }
```

<a name="notary-cert-policy" />
### 1.1. Política de certificados de tabeliães titulares

O OID `1.3.6.1.4.1.51928.1.1` identifica a **política de certificados de tabeliães titulares**, exclusiva dos certificados **emitidos para titulares de cartórios**.

```
id-cnb-notary-cert-policy OBJECT IDENTIFIER ::= { id-cnb-cert-policies 1 }
```

<a name="mobile-cert-policy" />
### 1.2. Política de certificados em aplicativo móvel

O OID `1.3.6.1.4.1.51928.1.2` identifica a **política de certificados em aplicativo móvel**:

```
id-cnb-mobile-cert-policy OBJECT IDENTIFIER ::= { id-cnb-cert-policies 2 }
```

<a name="notary-substitute-cert-policy" />
### 1.3. Política de certificados de tabeliães substitutos

O OID `1.3.6.1.4.1.51928.1.3` identifica a **política de certificados de tabeliães substitutos**, exclusiva dos certificados **emitidos para substitutos de tabeliães**.

```
id-cnb-notary-substitute-cert-policy OBJECT IDENTIFIER ::= { id-cnb-cert-policies 3 }
```
