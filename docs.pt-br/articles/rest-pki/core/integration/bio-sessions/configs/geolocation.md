# Configuração de geolocalização (Geolocation) - Rest PKI Core

Durante uma sessão de biometria, o Rest PKI Core pode capturar a localização geográfica do dispositivo do usuário (latitude e longitude). O recurso vem **desligado por padrão** e pode ser ligado pelo painel, passando a valer para todas as sessões da sua aplicação.

Existem duas configurações:

- **Tipo de captura de geolocalização** — define se a localização é capturada e se ela é obrigatória:
    - **Desabilitado** (padrão): a localização não é capturada.
    - **Opcional**: o sistema tenta capturar a localização, mas a sessão continua normalmente caso o usuário não dê permissão ou a captura falhe.
    - **Obrigatório**: a sessão só prossegue se a localização for capturada com sucesso.
- **Política de captura de geolocalização** — define em quais aparelhos a localização é coletada (importante nos fluxos com QR code, em que a biometria é feita no celular):
    - **Coletar no dispositivo de captura** (padrão): coleta apenas no aparelho que faz a biometria (ex.: o celular).
    - **Coletar em todos os dispositivos**: coleta tanto no computador que iniciou a sessão quanto no celular que fez a biometria.

## Como configurar pelo painel

1. Autentique-se no painel de controle da sua instância.
1. No menu lateral, clique em **Configurações**.
1. Localize a seção **"Configurações de biometria"** e clique em **Editar**.
![image](../../../../../../../images/rest-pki/core/geolocation-bio-settings.png)
1. No campo **Tipo de captura de geolocalização**, escolha **Opcional** ou **Obrigatório** para ligar o recurso.
1. Se desejar, ajuste a **Política de captura de geolocalização** (esse campo só aparece quando a captura está ligada).
![image](../../../../../../../images/rest-pki/core/geolocation-values.png)
1. Clique em **Salvar** para aplicar as configurações.

> [!TIP]
> Integrando via API? Você pode definir a geolocalização por sessão, sobrescrevendo o padrão configurado aqui — veja [Parâmetros de geolocalização](../index.md#geolocation).