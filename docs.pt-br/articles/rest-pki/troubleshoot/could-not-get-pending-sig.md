# Erro "Could not get pending signature"

Ao tentar implementar uma página com [assinatura web remota](../../pki-guide/web-signatures/remote.md) utilizando o [Rest PKI](../index.md) em conjunto com o [Web PKI](../../web-pki/index.md),
pode ocorrer um erro no navegador do usuário final com a seguinte mensagem:

> Could not get pending signature

Esse erro indica que a comunicação existente entre o Web PKI e o Rest PKI não está funcionando corretamente. Esse problema é comum quando se
está utilizando uma instância própria do Rest PKI (*on premises*). Os motivos mais comuns para isso são:

* O endereço da sua instância do Rest PKI não está configurado corretamente no Javascript
* A sua instância do Rest PKI não está disponível publicamente
* A sua instância do Rest PKI está disponível publicamente, porém usando um certificado de SSL inválido
* A sua instância do Rest PKI está disponível publicamente, porém está sendo bloqueada por um firewall no ambiente do usuário final (isso só costuma ocorrer se o Rest PKI estiver sem hostname e/ou em porta não-padrão por exemplo 8080 ou 8443)

Para ajudar a identificar qual desses fatores é a real causa do problema, realize o seguinte procedimento na máquina onde está sendo observado o erro utilizando
o navegador **Chrome**:

1. Clique com o botão direito no ícone do Web PKI (chip amarelo) no canto superior direito do navegador e clique na opção **Manage extensions**
1. Marque a caixa **Developer mode** no topo da lista de extensões
1. Localize o Web PKI na lista de extensões e clique no link **background page**
1. Na janela que se abrirá, clique na aba **Network**
1. Repita o procedimento de assinatura no navegador
1. Ficará registrado na aba Network a chamada de rede ao Rest PKI que falhou

Os detalhes do erro da chamada de rede ao Rest PKI devem indicar a causa do problema.

> [!NOTE]
> Caso o problema só ocorra em outros navegadores que não o Chrome, entre em contato conosco para instruções específicas para
> outro navegador
