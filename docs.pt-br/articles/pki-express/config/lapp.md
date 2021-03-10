# Integração com o LAPP - PKI Express

Este artigo descreve como configurar o uso do LAPP - Proxy Provedor de Artefato para PKI.

O LAPP permite que recursos do PKI, como LCRs e certificados AC, sejam solicitados por meio de um único domínio (*.lacunasoftwre.com) que é então redirecionado para servidores mundiais para executar as solicitações simultaneamente. Ele simplifica o gerenciamento de redes e infraestruturas e cria conexões de alta disponibilidade.

O LAPP é recomendado quando:
- o servidor não tem acesso a rede;
- o firewall bloqueia o acesso a URL externas;
- a URL contendo as LCR e certificados AC sofrem instabilidades.

O comando abaixo ativa a integração, que por padrão está desativada.

```sh
pkie config --set lappEnabled=true
```

[!NOTE] Além da ativação é necessário contactar nosso suporte, em lacuna.help, para autorizarmos o acesso ao LAPP.