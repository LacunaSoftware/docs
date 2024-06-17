# Histórico de versões do aplicativo móvel Lacuna PSC

As versões do aplicativo móvel têm o formato `MINOR.PATCH(.BUILD)`

* Um incremento no primeiro número significa que há novas funcionalidades (e, talvez, correções de bugs)
* Um incremento no segundo número significa que há apenas correções de bugs, mas não novas funcionalidades

O terceiro número significa o número do build e não é documentado neste histórico, embora seja visível nas lojas de aplicativo (geralmente com valor `1000`, que denota o build final).


<a name="v5-0" />
## 5.0 (2024-06-13)

Versão mínima do backend: 1.2.0

### Melhorias

PSC-213 Atualização das SDKs do Flutter e do Dart

PSC-216 Atualização de biblioteca que pedia permissões desnecessárias

### Correções de bugs

PSC-212 Correção de falha na utilização do storage no Android

PSC-217 Correção de falha no campo de mudança de número de telefone no iOS



<a name="v3-0" />
## 3.0 (2024-03-04)

Versão mínima do backend: 1.2.0

### Nova função

PSC-206 Funcionalidades de autorização para integração com KSPs



<a name="v2-0" />
## 2.0 (2023-06-26)

Versão mínima do backend: 1.2.0

### Novas funcionalidades

PSC-181 Versao mínima do app

PSC-182 Tela de conta do usuário e deleção de conta do usuário

PSC-191 Link pra privacy policy no mobile

### Melhorias

PSC-183 Arrumar nomes dos logs do psc api service

PSC-184 Refatorar serializers do psc mobile

### Correções de bugs

PSC-162 Emails muito longos terminam fora da tela durante criação de conta

PSC-190 Arrumar tratamento de versão mínima do app



<a name="v1-1" />
## 1.1 (2023-04-17)

Primeira versão disponível publicamente.
