# Amplia - Configuração de Key Stores

As chaves da sua Autoridade Certificadora (AC) podem ser armazenados em vários locais, chamados *armazenamento de chaves*. A escolha de onde o armazenamento das
chaves AC é umas das decisões mais importantes ao planejar uma autoridade de certificação ou uma Infraestrutura de Chave Pública (ICP).

Alguns dos locais que você pode fazer o armazenamento de chaves são:

* No banco de dados
* Um HSM *(Hardware Security Module)*
* Um USB token criptográfico
* A [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)

Cada opção tem suas vantagens e desvantagens.

Chaves armazenadas no **banco de dados** não têm custo e são de fácil configuração, mas seu acesso é difícil de controlar pois, embora as chaves
sejam armazenadas protegidas com criptografia de 256 bits, a "chave mestra" precisa estar disponível para o sistema e por isso é difícil controlar o acesso a esta.

Do ponto de vista de segurança e confiabilidade, talvez a melhor opção seja armazenar as chaves em um **HSM**. Tais dispositivos permitem que chaves 
sejam geradas dentro de um ambiente protegido por criptografia de tal forma que as chaves nunca podem deixar o confinamento de tal ambiente,
mas ao mesmo tempo pode ser feito backup (geralmente com dois HSMs). A desvantagem é o custo, que geralmente varia de 
alguns a vários milhares de dólares por unidade, dependendo do fabricante e das capacidades do dispositivo escolhido. A manutenção de
HSMs também pode ser cara, já que geralmente requer pessoal especializado.

Um **USB token criptográfico** é muito mais barato, custa cerca de 10 doláres por unidade e também pode gerar chaves dentro
de um ambiente protegido contra criptografia, nunca sendo capaz de sair desse ambiente. No entanto, chaves geradas dentro de tokens de criptografia geralmente não podem ser submetidas a backup,
deixando a AC vulnerável à perda de chaves, que é um evento grave para uma AC.

Uma opção que reúne o melhor dos principais armazenamentos de chaves do HSM com custo relativamente baixo é o **[Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)**, que pode ser considerado como um HSM de nuvem. As chaves são armazenadas no FIPS 140-2 Nível 2 validado HSMs por um custo relativamente baixo de 5 doláres
por mês por chave. Este serviço da Microsoft permitiu o emprego de HSMs nos projetos que, de outra forma, não teriam o orçamento necessário. 

> [!TIP]
> A instância Amplia baseado na nuvem da Lacuna Software (oferta SaaS) armazena todas as chaves de AC no Azure Key Vault, e é altamente recomendável
> para instâncias instaladas na nuvem ou servidores locais.

## Tipo de armazenamentos de chaves

Independentemente da sua opção de onde armazenar as chaves, os armazenamentos de chaves normalmente suportam um ou mais protocolos de comunicação.
O Amplia faz interface com armazenamentos de chaves através de tais protocolos. Os protocolos de comunicação definem os **tipos de armazenamento de chaves** suportados pelo Amplia.

Os tipos de armazenamento de chaves suportados são:

* [Armazenamento de chaves em PKCS #11](pkcs11.md)
* [Armazenamento de chaves em CAPI](capi.md)
* [Armazenamento de chaves em CNG](cng.md)
* [Armazenamento de chaves em Azure Key Vault](azure.md)

## Configuração do armazenamento de chaves

Na seção **KeyStores** do arquivo de configuração, cada chave é o nome de um armazenamento de chaves,
tendo como valor uma seção com a configuração do armazenamento de chaves. Por exemplo:

```json
...
"KeyStores": {
  "Store1": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "..."
  },
  "Store2": {
    "Type": "...",
    "Setting1": "...",
    "Setting2": "...",
    "Setting3": "..."
  },
}
...
```

O tipo de configuração em cada configuração de armazenamento de chaves define o tipo de armazenamento de chaves e as configurações restantes dependem do provedor escolhido.

Veja o artigo para cada **tipo** de armazenamento de chaves para instruções de configuração (links acima).