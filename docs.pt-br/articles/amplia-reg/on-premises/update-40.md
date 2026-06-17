# Atualizando o Amplia Reg da versão 3.x para 4.0

## 1. Antes de atualizar (somente Brasil)

Este comando verifica se a validação de geolocalização reversa está habilitada para definir o código IBGE de validação em pedidos anteriores. Se você quiser habilitar esse comportamento, certifique-se de ativar a configuração antes de migrar os dados, e verifique se o Google Maps está corretamente configurado.

## 2. Atualizar o Amplia Reg

Atualize o AmpliaRegNg para a versão `4.0.7`. Versões anteriores **não** devem ser usadas. Versões posteriores **não** são recomendadas.

## 3. Migrar dados

Siga os passos de [migrate-data](tool/migrate-data.md) com a versão `4.0.7` e opções `--to 2`.

No Linux:

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll -- migrate-data --to 2
```

No Docker:

```sh
docker run -i lacunasoftware/ampliareg:4.0.7 -- migrate-data --to 2
```

Certifique-se de seguir as etapas descritas no artigo mencionado para garantir que não ocorreram erros durante a migração de dados.
