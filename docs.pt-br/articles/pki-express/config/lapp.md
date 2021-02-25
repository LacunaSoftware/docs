# Integração com o LAPP - PKI Express

Este artigo descreve como configurar o uso do LAPP - Proxy Provedor de Artefato para PKI.

O LAPP permite que recursos do PKI, como LCRs e certificados AC, sejam solicitados por meio de um único domínio (*.lacunasoftwre.com) que é então redirecionado para servidores mundiais para executar as solicitações simultaneamente. Ele simplifica o gerenciamento de redes e infraestruturas e cria conexões de alta disponibilidade.

Por padrão a integração está desativada, para ativá-la, basta utilizar o comando:

```sh
pkie config --set lappEnabled=true
```
