# Códigos de erro - Rest PKI Core

Alguns dos códigos de erro de API retornados pelo Rest PKI Core estão elencados abaixo:

Código                                   | Descrição
---------------------------------------- | ---------
`DocumentNotFound`                       | Um documento referenciado não foi encontrado (verifique o ID do documento)
`SecurityContextNotFound`                | Um contexto de segurança referenciado não foi encontrado (verifique o ID do contexto)
`SignatureSessionNotFound`               | Uma sessão de assinatura referenciada não foi encontrada (verifique o ID da sessão)
`BadSignatureSessionOperation`           | A operação não é válida para o estado atual da sessão de assinatura.Por exemplo, caso se tente fazer uma chamada para aguardar o fim do processamento de uma sessão de assinatura que ainda está no estado `Pending` esse erro é retornado
`BackgroundProcessing`                   | A operação não pode ser completada nesse momento porque o recurso ainda está sendo processado
`SignatureSessionTokenRequired`          | O token de sessão de assinatura não foi passado no header `X-Signature-Session-Token` da requisição
`BadSignatureSessionToken`               | Um token de sessão de assinatura inválido foi passado no header `X-Signature-Session-Token` da requisição
`ExpiredSignatureSessionToken`           | Um token de sessão de assinatura expirado foi passado no header `X-Signature-Session-Token` da requisição

> [!NOTE]
> Os códigos acima são os mais comuns. Entretanto, essa lista não é exaustiva. Existem outros códigos e novos códigos podem ser adicionados sem aviso prévio.
