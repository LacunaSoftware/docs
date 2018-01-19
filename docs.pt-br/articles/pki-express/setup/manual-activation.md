# Ativação manual do PKI Express

Caso durante a instalação do [PKI Express](../index.md) o procedimento de ativação falhe, siga os passos abaixo
para ativar o produto manualmente.

> [!NOTE]
> Essas instruções se aplicam apenas à instalação em ambientes Linux. Para ativar o PKI Express no Windows,
> tanto pela rede quanto maunalmente, utilize o utilitário *PKI Express Configuration Manager* (**pkiemgr.exe**)

Para ativar manualmente o PKI Express, primeiramente solicite o *código de ativação*:

[!include[Solicite o codigo](../../../../includes/pki-express/linux/request-manual-activation.md)]

Um arquivo chamado **pkie-activation-request.pem** será salvado na pasta atual. Entre em contato através da nossa [Central de Suporte](http://lacuna.help)
enviando o arquivo.

Você receberá de volta o arquivo de ativação (**pkie-activation.pem**). Copie o arquivo para a pasta
atual e execute:

[!include[Complete a ativacao](../../../../includes/pki-express/linux/complete-manual-activation.md)]

Ou, caso prefira, execute o comando passando o caminho do arquivo:

[!include[Complete a ativacao](../../../../includes/pki-express/linux/complete-manual-activation-with-file.md)]
