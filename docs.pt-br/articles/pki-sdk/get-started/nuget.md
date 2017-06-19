# Acessando pacotes nuget

O SDK é distribuído através do Nuget Package Manager. Para adicionar o pacote do SDK ao seu projeto, abra o Nuget Package Manager (clique com o botão direito no seu projeto e clique em **Manage Nuget Packages...**).

![Manage Nuget Packages](../../../../images/pki-sdk/nuget-1.png)

Siga então os passos abaixo:

0. Clique no item **Online** na coluna esquerda
0. Digite **Lacuna** no campo de pesquisa, no canto superior direito
0. Aparecerão os pacotes relacionados ao SDK. Clique no pacote **Lacuna PKI SDK**
0. Verifique o Id do pacote, que deve corresponder a **Lacuna.Pki**
0. Clique então em **Install**

![Manage Nuget Packages](../../../../images/pki-sdk/nuget-2.png)

Os demais pacotes são opcionais e habilitam integração com provedores como Microsoft Azure e Amazon Web Services, bem como integração com bibliotecas como Entity Framework, NLog e iTextSharp. Para saber mais sobre os pacotes opcionais, veja [Pacotes nuget opcionais](../optional-packages/index.md).

O próximo passo é configurar a licença de uso SDK (veja o tópico [Licenciamento](licensing.md)).
