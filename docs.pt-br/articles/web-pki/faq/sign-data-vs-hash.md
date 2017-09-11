# Qual é a diferença entre as funções signData e signHash?

Ambas funções -- `signData` e `signHash` -- realizam um algoritmo de assinatura digital utilizando a chave privada de
um dos certificados presentes na máquina do usuário. Para entender a diferença entre as duas funções, precisamos falar
rapidamente sobre os detalhes de um algoritmo de assinatura.

> [!NOTE]
> O termo ***algoritmo*** *de assinatura digital* não deve ser confundido com *assinatura digital*. Leia mais sobre
> esse assunto no artigo [Assinaturas digitais](../../pki-guide/signatures.md).

O algoritmo RSA, em linhas gerais, tem 4 etapas:

1. Cálculo do hash dos bytes a serem assinados
1. Codificação da estrutura [DigestInfo](https://tools.ietf.org/html/rfc2313#section-10.1.2), que contém o hash e o OID do algoritmo de hash usado para produzi-lo
1. *Padding* do DigestInfo codificado
1. Operação matemática sobre DigestInfo codificado e *padded*

> [!NOTE]
> O cálculo de hash realizado na primeira etapa geralmente **não é sobre o documento sendo assinado**. Nos esquemas de
> assinatura CMS/CAdES, PAdES e XmlDSig/XAdES, os bytes usados como entrada para o algoritmo de assinatura correspondem
> à codificação dos "atributos assinados", uma estrutura que contém diversos dados, entre eles o hash do documento.

A função `signData` recebe como entrada o *to-sign-data* e realiza sobre ele todas as etapas, enquanto que a função
`signHash` recebe como entrada o *to-sign-hash*, isto é, o hash pré-computado do *to-sign-data*, e realiza sobre ele
apenas da segunda etapa em diante.

Ambas funções podem ser usadas na implementação de [Assinaturas web remotas](../../pki-guide/web-signatures/remote.md)
independentemente do esquema de assinatura (CAdES, PAdES, etc) sendo utilizado. A escolha da função a ser utilizada
depende do *output* fornecido pelo código que executa em backend ao final do "preparo" da assinatura remota. Se for
produzido um *to-sign-data*, utilize a função `signData`. Se for produzido um *to-sign-hash*, utilize a função `signHash`.
