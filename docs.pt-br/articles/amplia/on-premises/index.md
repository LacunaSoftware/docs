# Amplia *on premises*

O [Amplia](../index.md) pode ser utilizado em nuvem (SaaS) ou você pode ter uma instância na sua própria infraestrutura ("on premises").

## Ambientes suportados

O Amplia é compatível com os seguintes ambientes:

* [Windows Server](windows/index.md)
* [Linux](linux/index.md)
* [Azure App Services](azure/index.md)

> [!NOTE]
> Em breve adicionaremos suporte a Docker. Entre em contato conosco caso queira instalar o Amplia em Docker.

Clique em um dos ambientes acima para obter instruções específicas de instalação e atualização.

<a name="planning" />
## Planejamento antes da instalação

Antes de você começar, você deve planejar com antecedência onde pretende armazenar suas chaves da Autoridade Certificadora (CA) e onde pretende publicar suas Listas de Certificados Revogados (LCRs).
Por favor leia as seções abaixo para detalhes de cada uma das decisões.

<a name="key-storage" />
### Armazenamento de chaves

As chaves das suas Autoridades Certificadoras (ACs) podem ser armazenadas em uma variedade de locais, chamadas *key stores*. A escolha de onde armazenar chaves AC é uma das mais importantes
decisões ao se planejar a implantação de uma AC. Veja o artigo [Configuração de Key Store](key-stores/index.md) para mais informações sobre opções de armazenamento de chaves de AC e como configurar
o Amplia de acordo.

<a name="dashboard-domain" />
### Domínio de acesso ao painel de controle / Certificado SSL

A aplicação tem um painel de controle para gerenciar ACs, chaves etc. Você deve escolher um domínio para acessá-lo, por exemplo `ac.patorum.com`.

O domínio escolhido deve ser criado no servidor de DNS da zona (registro A ou CNAME) antes da instalação, apontando para o servidor onde o Amplia será instalado.

> [!NOTE]
> Não há suporte para o uso de um diretório virtual (subpasta) em um domínio que hospeda outro site, por exemplo *www.patorum.com/ac*

É também recomendado que você tenha um **certificado SSL válido** para o domínio escolhido.

<a name="access-domains" />
### Publicação LCR (domínios de acesso)

Certificados emitidos pelo Amplia incluem a extensão X.509 *CRL Distribution Point*, que contém links para endereços online onde um terceiro que deseje validar um certificado deve obter a Lista de Certificados Revogados (LCR) mais recente da AC,
etapa necessária para determinar o status de revogação do certificado.

Estes links possuem o seguinte formato: `http://seu-dominio-de-acesso/crls/sua-ac.crl`

A parte do link `seu-dominio-de-acesso` é chamada na configuração Amplia de um *domínio de acesso*. Você deve escolher pelo menos um domínio de acesso, mas é recomendado ter dois domínios de acesso,
preferencialmente um independente do outro, por exemplo:

* *ca.patorum.com*
* *ca.patorum.net*

> [!TIP]
> Um dos domínios de acesso pode ser o mesmo domínio onde o *dashboard* do Amplia será acessado.

> [!NOTE]
> Não há suporte para o uso de um diretório virtual (subpasta) em um domínio que hospeda outro site

Esses domínios devem ser escolhidos tendo em mente que eles **terão que ser mantidos por um longo período** (por toda a vida útil dos certificados emitidos em sua instância do Amplia, que normalmente é de vários anos).

Os domínios de acesso escolhidos devem ser criados nos servidores DNS (registros A ou CNAME) apontando para o servidor no qual o Amplia será instalado.

> [!TIP]
> Você não precisa de um certificado SSL para seus domínios de acesso. Uma vez que o padrão X.509 recomenda que LCRs sejam distribuídas por HTTP em vez de HTTPS, os certificados são emitidios com
> links usando protocolo HTTP.

## Veja também

* [Histórico de versões](../changelog.md)
