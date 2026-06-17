# Atualizando o Amplia Reg da versão 6.x para 7.0

## 1. Antes de atualizar (somente Brasil)

Este comando preenche a coluna CertificateThumbprint da tabela RegistrationAgent.

## 2. Atualizar o Amplia Reg

Atualize o AmpliaRegNg para a versão `7.0.0`. Versões anteriores **não** devem ser usadas. Versões posteriores **não** são recomendadas.

## 3. Migrar dados

Siga os passos de [fill-registration-agents-certificate-thumbprint](tool/fill-registration-agents-certificate-thumbprint.md).

No Linux:

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll -- fill-registration-agents-certificate-thumbprint
```

No Docker:

```sh
docker run -i lacunasoftware/ampliareg:7.0.0 -- fill-registration-agents-certificate-thumbprint
```

Certifique-se de seguir as etapas descritas no artigo mencionado para garantir que não ocorreram erros durante a migração de dados.
