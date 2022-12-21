# Atributos de Segurança - Web PKI


![Webpki Model ](../../../../images/web-pki/WebPkiModel.png)


* A instalação dos componentes do plugin WebPKI é realizada unicamente e de forma centralizada no (https://get.webpkiplugin.com) servido com HTTPS estrito e com avaliação "A" na SSL Labs.
* Os componentes "Web Extension" são submetidos para as lojas oficiais de cada navegador suportado, e em seguida revisados e assinados digitalmente pelas lojas abaixo:
	*	Chrome webstore;
	*	Firefox ADD-NOS;
	*	Edge Add-nos;
	*	Safari App Store (em breve).

* Os componentes “Web Extension” possui seu código-fonte principal em JavaScript na forma original, não-ofuscado e não-minificado, de forma que todas as operações podem ser avaliadas ou auditadas por terceiros.
* O desenvolvimento do ecossistema do plugin WebPKI é realizado seguindo as melhores práticas de programação estando em conformidade com o que é exigido das plataformas oficiais da Microsoft e Apple.
* Os componentes "Native App" que são instalados na máquina do usuário, são baixados através do domínio centralizado e são assinados digitalmente com CodeSign EV e com carimbo de tempo DigiCert com validade de 10 anos. De modo que a instalação é realizada de forma confiável e autenticada pelos sistemas operacionais sem nenhum alerta de segurança.
* Os componentes "Native App" não necessitam de privilégios de administrador para sua execução.
* Os componentes "Native App" dão preferência para comunicação com os certificados e chaves do usuário via API/Repositório padrão do sistema operacional, de forma que PINs ou senhas de autenticação não são trafegadas pelo "Native App", são gerenciadas diretamente entre os "Crypto Devices" e o sistema operacional.


