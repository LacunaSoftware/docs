# Fluxo com webhook - Sessões de assinatura

Você pode configurar sua conta no Rest PKI Core de modo que sua aplicação seja informada quando documentos forem assinados em sessões de assinatura criadas por ela.
Dessa forma, você não precisa depender dos usuários retornarem à sua aplicação para tomar ciência dos documentos assinados.

## Abrindo a página de assinatura em outra aba

O comportamento padrão é a sua aplicação fornecer um `returnUrl`, redirecionar o usuário para o `redirectUrl` retornado pelo Rest PKI Core com uma resposta de
redirecionamento de HTTP (por exemplo *303 See Other*) ou com uma chamada de Javascript `location.href = ...`. Ao final do processo, o usuário é redirecionado
de volta à sua aplicação, tudo em uma mesma aba do navegador.

Uma alternativa a esse fluxo é exibir a página de assinatura em uma nova aba. Para isso, omita o parâmetro `returnUrl` ao criar a sessão. Além disso, é preciso
que a aba seja aberta com uma tag `<a>` de HTML com `target="_blank"`, ou com uma chamada ao `window.open()` em Javascript. Nesse caso, a aba será fechada pelo
Rest PKI Core ao final do processo.
