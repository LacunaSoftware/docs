# ARISP - Estruturas ASN.1 - DRAFT

> [!WARNING]
> **Este documento é um draft**, portanto estas definições ainda não estão sujeitas a mudanças!

O OID 1.3.6.1.4.1 representa o [registro de empresas privadas](https://www.iana.org/assignments/enterprise-numbers) no Internet Assigned Numbers Authority (IANA):

```
id-pen-iana OBJECT IDENTIFIER ::= { 1 3 6 1 4 1 }
```

A **Associação dos Registradores Imobiliários de São Paulo - ARISP** está registrada sob o número **43373**, sendo portanto dona do OID `1.3.6.1.4.1.43373` e arco de OID correspondente:

```
id-arisp OBJECT IDENTIFIER ::= { id-pen-iana 43373 }
```

<a name="cert-atts" />
## 1. Estruturas de nome (*other names*)

O subarco `1.3.6.1.4.1.43373.1` é reservado para estruturas a serem utilizados na opção `OtherName` de `GeneralName`s:

```
id-arisp-names OBJECT IDENTIFIER ::= { id-arisp 1 }
```

<a name="holder-photo-att" />
### 1.1. Estrutura *CartorioInfo*

O OID `1.3.6.1.4.1.43373.1.1` identifica a estrutura de nome `CartorioInfo` a ser utilizada na opção `OtherName` de `GeneralName`s:

```
id-arisp-cartorio-info OBJECT IDENTIFIER ::= { id-arisp-names 1 }
 
CartorioInfo ::= SEQUENCE {
	cns      IA5String,
	numero   IA5String,
	nome     UTF8String,
	oficial  UTF8String,
	endereco Endereco,
	telefone IA5String,
	site     IA5String,
	email    IA5String
}

Endereco ::= SEQUENCE {
	logradouro  UTF8String,
	numero      UTF8String,
	complemento UTF8String,
	distrito    UTF8String,
	comarca     UTF8String,
	municipio   UTF8String,
	estado      IA5String,
	cep	        IA5String
}

```
