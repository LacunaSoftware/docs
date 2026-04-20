# ReturnUrl X TrustedOrigin - Rest PKI Core

O Rest PKI Core oferece duas formas de interação:

## 1. Fluxo de Redirecionamento (Sem Widget)

Use o parâmetro **`ReturnUrl`**. Neste modelo, sua aplicação "perde o foco". O usuário é enviado para uma URL hospedada pela Lacuna para capturar a face.

- **Quando usar:** Se você quer uma implementação rápida, sem precisar manipular componentes no seu código.
    
- **O que acontece após o fim:** O usuário é redirecionado para a URL que você informou no `ReturnUrl`, trazendo na _Query String_ o `completeTicket` (necessário para você consultar o resultado depois).

## 2. Fluxo Incorporado (Com Widget)

Use o parâmetro **`TrustedOrigin`**. Aqui, a biometria acontece dentro do seu próprio site através de um componente (Widget).

- **Quando usar:** Se você quer manter o usuário dentro do seu ambiente para uma experiência mais fluida.
    
- **Segurança:** O `TrustedOrigin` deve ser a URL exata do seu site (ex: `https://meusite.com`). Isso funciona como uma proteção, garantindo que o seu widget só funcione no seu domínio.

### Veja mais exemplos
<!-- TODO 598 ESCREVER MAIS EXEMPLOS DE USO COM WIDGET E SEM WIDGET-->
* [Sessões de biometria sem widget]()
* [Sessões de biometria com widget]()