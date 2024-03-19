# Troubleshooting

## Erros Comuns

### OperationTimeoutNoAgent

![Alert Box Image](/images/mvbiosigner/timeout-noagent.png)


Mensagem: `Tempo esgotado: sem ação do agente`

A máquina do usuário não notificou o MVBioS para início da captura biométrica.

#### Ações:

##### 1. Confirmar que o Agente Desktop está ativo na bandeja e com Status `UP`

Caso negativo, entrar com a URL `https://{hostname-do-mvbios}/api/system/info` no navegador e verificar se está respondendo com os dados do sistema.
Caso não esteja, verificar com o pessoal responsável pela infraestrutura do hospital o porquê do bloqueio do acesso.

##### 2. Confirmar o hostname da máquina do usuário

Para o início da captura biométrica funcionar é necessário que o hospital informe qual hostname da máquina que o usuário está logado.
O problema mais comum neste caso é o de o **hospital estar retornando um hostname de uma máquina diferente da que o usuário está logado no momento**.

Para confirmar o problema:

1. Abra o terminal (CMD) na máquina do usuário, digite o comando `hostmane` e pressione enter.
1. Acesse a URL no navegador: `https://{hostname-do-mvbios}/api/bio/auth/debug/{CPF-do-usuario}`

Confirme que o resultado do comando hostname é idêntico ao resultado do campo `machineName` retornado pela URL.

Caso sejam diferentes, informe ao pessoal de infraestrutura do hospital sobre esse problema na consulta do hostname do usuário.