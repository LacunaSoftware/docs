# Lacuna Web PKI

O componente Web PKI possibilita que páginas web interajam com certificados digitais através de código javascript. As principais funcionalidades são:

* Recuperar os certificados disponíveis
* Ler o *encoding* de um certificado
* Assinar dados (ou um hash pré-computado) com um certificado

O principal objetivo do Web PKI é realizar o processamento client-side necessário em operações com certificados digitais. Um exemplo de operação seria uma [assinatura digital remota](../pki-guide/web-remote.md) utilizando um SDK (Software Development Kit) no servidor:

|   | *Client-side* (Lacuna Web PKI)                                                                    | *Server-side* (SDK no servidor)                                                                                                                              |
| - | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | Obter o *encoding* do certificado e enviar ao servidor                                            | Preparar a assinatura, produzindo os bytes que devem ser utilizados como entrada para o algoritmo de assinatura ("to-sign-bytes" ou "signed attributes")     |
| 2 | Assinar os "to-sign-bytes" com a chave de um certificado digital e enviar o resultado ao servidor | Montar o pacote de assinatura -- seja um PDF assinado (PAdES), um envelope CMS (CAdES) um XML assinado (XAdES) -- dependendo do tipo de assinatura utilizada |

> [!NOTE]
> Se você não possui um SDK para realizar o processamento no servidor, você pode usar o Lacuna PKI SDK. [Fale conosco](https://www.lacunasoftware.com/pt/home/purchase) para obter informações de licenciamento.

Veja o artigo [Primeiros passos](get-started.md) para começar a utilizar o Web PKI.
