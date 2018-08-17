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
## 1. Atributos de certificados de atributo

O subarco `1.3.6.1.4.1.43373.1` é reservado para atributos a serem utilizados em certificados de atributo:

```
id-arisp-cert-atts OBJECT IDENTIFIER ::= { id-arisp 1 }
```

<a name="holder-photo-att" />
### 1.1. Atributo *FuncionarioCartorio*

O OID `1.3.6.1.4.1.43373.1.1` identifica o atributo `FuncionarioCartorioInfo`:

```
id-arisp-funcionario-cartorio-att OBJECT IDENTIFIER ::= { id-arisp-cert-atts 1 }
 
FuncionarioCartorioInfo ::= SEQUENCE {
    version    FuncionarioCartorioInfoVersion,
    nome       UTF8String,
    cpf        IA5String,
    cargo      UTF8String,
    cartorio   CartorioInfo
}

FuncionarioCartorioInfoVersion ::= INTEGER { v1(0) }

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
