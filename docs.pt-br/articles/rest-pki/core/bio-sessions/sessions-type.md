# Tipos de Sessão biométrica - Rest PKI Core

Para atender a diferentes necessidades de negócio, o Rest PKI Core fornece diversas soluções biométricas:

## Prova de Vida
Verifica se há uma pessoa real presente do outro lado da tela, detectando tentativas de fraude com fotos, vídeos ou máscaras. Não realiza a identificação (quem é a pessoa), apenas atesta a presença de um ser humano vivo. Variações disponíveis:

- **Padrão**: Ocorre normalmente no dispositivo atual do usuário.
- **Recomendar dispositivo móvel**: Ao iniciar a sessão, o sistema recomenda o uso de um smartphone para maior comodidade na hora da selfie, mas não impede o uso do dispositivo atual (ex: webcam do computador).
- **Requerir dispositivo móvel**: O uso do smartphone é obrigatório. A sessão não prossegue em outros tipos de dispositivos.
- **2D SDK**: Em vez de capturar a imagem pela câmera em tempo real, permite o uso de uma imagem estática (foto) para a verificação.
- **Com captura de documento**: Combina a prova de vida com a extração da imagem de um documento de identidade em uma única sessão.

## Cadastro Biométrico
Realiza o registro biométrico do usuário no sistema. A imagem da face é processada e armazenada de forma criptografada para ser utilizada futuramente em operações de autenticação ou identificação. Variações disponíveis:

- **Padrão**: Captura facial em tempo real.
- **2D**: Permite realizar o cadastro utilizando uma imagem estática (foto) enviada pelo sistema, em vez da captura em tempo real.
- **Com captura de documento**: Além do rosto, captura também as imagens do documento de identidade do usuário no momento do cadastro.

## Autenticação Facial
Compara o rosto capturado em tempo real com uma biometria previamente cadastrada, confirmando se o usuário é realmente quem afirma ser. Variações disponíveis:

- **Padrão**: Captura e comparação feitas em tempo real.
- **2D**: Realiza a comparação a partir de uma foto fornecida pelo sistema, em vez de exigir uma captura ao vivo.

## Identificação Facial
Busca o rosto capturado em uma base de cadastros para descobrir a quem ele pertence. Ao contrário da autenticação, não parte de um usuário conhecido. Variações disponíveis:

- **Padrão**: Captura e comparação feitas em tempo real.
- **2D**: Realiza a comparação a partir de uma foto fornecida pelo sistema, em vez de exigir uma captura ao vivo.

## Captura de Documentos de Identidade
Sessões focadas na extração de dados e cruzamento de informações entre o usuário e seus documentos.

- **Captura de documento de identidade**: Captura e processa as imagens de um documento, extraindo suas informações textuais.

> [!Note]
> Este tipo de sessão não realiza biometria facial.

- **Correspondência de documento com face**: Compara o rosto capturado ao vivo com a foto presente no documento de identidade enviado na mesma sessão. Verifica se a pessoa operando o sistema é a mesma do documento.

## Vídeo Identificação
Realiza os mesmos passos da "Correspondência de documento com face", mas com uma etapa adicional: grava um vídeo do usuário e compara o rosto no vídeo com a foto do documento. Oferece o maior nível de rastreabilidade e geração de evidências para auditorias.