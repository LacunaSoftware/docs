# Login com certificado digital

É possível realizar autenticação de usuários (login) baseada em certificado digital. Esse processo, em linhas gerais, ocorre da seguinte
maneira:

1. Gera-se um [nonce criptográfico](https://pt.wikipedia.org/wiki/Nonce)
1. Solicita-se ao usuário que realize um algoritmo de assinatura sobre o *nonce* utilizando sua chave privada
1. Verifica-se o resultado do algoritmo de assinatura utilizando a chave pública do certificado do usuário
1. Valida-se o certificado do usuário
1. Se todas as validações forem bem sucedidas, a aplicação pode assumir que o usuário é realmente o titular do certificado apresentado.
   Em seguida, utiliza-se um campo chave do certificado (ex: CPF ou email) para localizar o usuário na base de dados e completa-se o
   processo de autenticação.

> [!NOTE]
> Isso é apenas uma visão geral. Existem passos adicionais, como validar que o *nonce* nunca foi utilizado anteriormente, para
> evitar ataques de replay.

Para implementar esse processo, é preciso realizar operações no frontend e no backend.

O algoritmo de assinatura sobre o *nonce* necessariamente precisa ser feito no **frontend** pois a chave privada do certificado
do usuário pode estar em um dispositivo criptográfico (certificado A3) que nunca permite a sua exportação. Além disso, mesmo que a
chave seja baseada em software (certificado A1), solicitá-la ao usuário é uma má prática.

Já a geração do *nonce* e todas as validações precisam ser realizadas no **backend** por motivos óbvios de segurança.

**A forma recomendada de implementar login com certificado digital é utilizando o [Rest PKI](../../rest-pki/index.md)** em conjunto
com o [Web PKI](../../web-pki/index.md).

## Passo-a-passo

1. Acesse a [documentação do Rest PKI](../../rest-pki/index.md)
1. Escolha uma linguagem de programação
1. Escolha um dos projetos de exemplos disponíveis
1. Siga os passos para executar o projeto
1. Uma vez executando o projeto, clique em *Authentication with digital certificate*

> [!TIP]
> Embora a solução envolva o Rest PKI em conjunto com o Web PKI (para as operações no backend e frontend respectivamente),
> **concentre-se na documentação do Rest PKI** que já mostra o uso dos dois produtos integrados.

## Implementações alternativas

Se a sua aplicação web for em .NET (C#, VB.NET, C++.NET), você pode também utilizar o [PKI SDK](../../pki-sdk/index.md) no backend
em conjunto com o Web PKI no frontend. Para mais informações, veja o artigo
[Autenticação com certificado](../../pki-sdk/signatures/web-remote.md) na documentação do SDK.

Se você já possui uma biblioteca de terceiros para certificação digital ou deseja implementar o código do backend você mesmo,
você pode também utilizar o [Web PKI](../../web-pki/index.md) apenas para realizar as operações necessárias no frontend.
