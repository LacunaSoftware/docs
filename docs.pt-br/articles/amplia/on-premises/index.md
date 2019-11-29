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

## Planejando antes da instalação

Antes de você começar, você deve planejar com antecedência onde você pretende armazenar suas chaves da Autoridade Certificadora (CA) e onde suas Listas do Certificado de Revogação (LCR)
serão publicados. Por favor leia as seções abaixo para detalhes de cada uma das decisões.

### Armazenamento de chaves

As chaves das suas Autoridades Certificadoras (ACs) podem ser armazenadas em uma variedade de locais, chamadas *key stores*. A escolha de onde armazenar chaves AC é uma das mais importantes
decisões ao planejar a AC. Veja o artigo [Configuração de Key Store](key-stores/index.md) para mais informação onde você pode armazenar sua chave AC e como configurar de acordo com
Amplia.

### Domínio Dashboard / Certificado SSL

A aplicação tem uma interface chamada *dashboard* para gerenciar ACs, chaves etc. Você deve ecolher um domínio para acessar isto, por exemplo `ca.patorum.com`.

O domínio escolhido pode ser criado em um servidor DNS da zona (registros A ou CNAME) antes da instalação, apontando para o servidor onde o Amplia será instalado.

> [!NOTE]
> Não há suporte para o uso de um diretório virtual (subpasta) em um domínio que hospeda outro aplicativo da Web

É também recomendado que você tenha um **certificado SSL válido** para escolher o domínio.

### Publicação LCR (domínios de acesso)

Certificados emitidos pelo Amplia incluem a extensão X.509 *CRL Distribution Point*, que contém links para locais onde um terceiro que deseja validar o certificado deve obter a Lista de Certificados Revogados (LCR) mais recente da AC, necessária para determinar o status de revogação do certificado.

Estes links tem que seguir o formato: `http://your-ca-domain/crls/my-ca.crl`

O `your-ca-domain` parte do link é chamado na configuração Amplia um *domínio de acesso*. Você deve escolher pelo menos um domínio de acesso, mas é recomendado ter dois domínios de acesso,
preferencialmente um independente do outro, por exemplo:

* *ca.patorum.com*
* *ca.patorum.net*

> [!TIP]
> Um dos domínios de acesso pode ser o mesmo domínio que o paínel do Amplia será acessado.

> [!NOTE]
> Não há suporte para o uso de um diretório virtual (subpasta) em um domínio que hospeda outro aplicativo da Web

Esses domínios devem ser escolhidos tendo em mente que eles **terão que ser mantidos por um longo período** (por toda a vida útil dos certificados emitidos em sua instância do Amplia, que normalmente é de vários anos).

Os domínios de acesso escolhidos devem ser criados nos servidores DNS (registros A ou CNAME) apontando para o servidor no qual o Amplia será instalado.

> [!TIP]
> Você não precisa de um certificado SSL para seu domínio de acesso. Uma vez que o X.509 recomenda LCRs sejam distribuídas por HTTP em vez de HTTPS, os certificados são emitidios com
links usando HTTP protocolo.

## Veja também

* [Histórico de versões](../changelog.md)
