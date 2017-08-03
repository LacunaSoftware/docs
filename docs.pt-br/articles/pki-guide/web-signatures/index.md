# Assinaturas web

Uma *assinatura web* é uma [assinatura digital](../signatures.md) realizada em uma página web utilizando um dos certificados digitais
do usuário.

Esse tipo de assinatura **necessariamente requer que sejam realizadas operações no frontend** porque a chave privada do certificado
do usuário pode estar em um dispositivo criptográfico (certificado A3) que nunca permite a sua exportação. Além disso, mesmo que a
chave seja baseada em software (certificado A1), solicitá-la ao usuário é uma má prática.

Suportamos duas formas de implementar assinaturas web:

* [Assinaturas web remotas](remote.md) - nessa abordagem, são feitas no frontend apenas as operações que necessariamente precisam
  ser realizadas no lado do cliente, todas as outras operações são realizadas no backend. De certa forma, o backend realiza uma
  assinatura com uma chave *remota* (localizada no lado do cliente)
  
* [Assinaturas web locais](local.md) - nessa abordagem, todas as operações são realizadas *localmente* no frontend, sem cooperação
  do backend.

Em situações em que o arquivo a ser assinado já está no servidor e/ou o resultado da assinatura precisa estar no servidor ao final
do processo, **assinaturas remotas** possuem a grande vantagem de não requerirem que arquivos sejam trafegados entre o servidor e o
cliente. Apenas um tráfego de rede mínimo é realizado (da ordem de 3KB).

Apenas em cenários em que em hipótese alguma pode ocorrer upload de arquivos para o servidor é que **assinaturas locais** devem ser
empregadas. Mesmo assim, essa decisão deve ser tomada com cuidado, pois realizar uma assinatura digital é um processo complexo que
requer acesso de rede para obter diversos arquivos (por exemplo Listas de Certificados Revogados), o que pode falhar no ambiente
de alguns usuários. Além disso, atualmente só suportamos assinaturas locais no Windows, enquanto que suportamos assinaturas remotas
no Windows, Mac OS e Linux.

Portanto, **recomendamos escolher a abordagem de [assinaturas web remotas](remote.md) na maioria dos casos.**

