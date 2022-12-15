# Rest PKI *on premises*

Se por algum motivo você não possa ou não queira utilizar um serviço em nuvem, é possível hospedar uma
instância do [Rest PKI](../index.md) na sua própria infraestrutura ("on premises"). Veja o
[material comercial do produto](https://www.lacunasoftware.com/pt/home/certificate#/rest) para mais informações.

## Configuração do WebPKI
Caso a sua aplicação que utilize o WebPKI é necessário configurar a URL do RestPKI e a licença do WebPKI.
* [Configuração do WebPKI para utilização do RestPKI on premises](../../web-pki/customizing-restpki-url.md)

## Ambientes suportados

O Rest PKI é compatível com os seguintes ambientes:

* [Windows Server](windows-setup/index.md)
* [Azure App Service](azure-setup.md)

> [!NOTE]
> Para ambientes Linux, recomendamos o uso do [PKI Express](../../pki-express/index.md)

Clique em um dos ambientes acima para obter instruções específicas de instalação e atualização.

## Veja também

* [Dimensionamento de servidores](sizing.md)
* [Configuração de Carimbo de Tempo](configure-timestamping.md)
