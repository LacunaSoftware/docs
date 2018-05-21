# Configuração de Região e Data - Rest PKI

É possível alterar o formato e fuso horário das datas que aparecem nas assinaturas de PDF feitas com o [Rest PKI](index.md).

Para alterar essa configuração, siga os passos abaixo:

1. Autentique-se em [https://pki.rest/]
1. No menu superior, clique no seu email e em **Conta** ou *Account*
   ![Image name](../../../images/rest-pki/access-account-settings.png)
1. Na tela seguinte, utilize os controle na seção **Região e Data** ou *Region and Date* para configurar a aparência das datas:
   ![Image name](../../../images/rest-pki/region-and-date.png)

As seguintes configurações estão disponíveis:

* Cultura
* Fuso Horário
* Formato de Data

Por exemplo, a seguinte configuração resulta na data abaixo:

* Cultura: **Portuguese (Brazil)**
* Fuso: **UTC**
* Formato de data: **Completo com fuso**

![Image name](../../../images/rest-pki/pdf-date-utc-long.png)

Outra configuração possível seria:

* Cultura: **Portuguese (Brazil)**
* Fuso: **(UTC-03:00) Brasilia**
* Formato de data: **Data e hora curtas**

![Image name](../../../images/rest-pki/pdf-date-brasilia-short.png)

## Formatos de data

Os formatos de data suportados são:

Formato                     | Cultura = **Portuguese (Brazil)**          | Cultura = **English (United States)**
--------------------------- | ------------------------------------------ | -------------------------------------
**Completo com fuso**       | 21/05/2018 19:48:51 -03:00                 | 5/21/2018 7:48:51 PM -03:00
**Data e hora longas**      | segunda-feira, 21 de maio de 2018 19:48:51 | Monday, May 21, 2018 7:48:51 PM
**Data e hora curtas**      | 21/05/2018 19:48                           | 5/21/2018 7:48 PM
**Data longa e hora curta** | segunda-feira, 21 de maio de 2018 19:48    | Monday, May 21, 2018 7:48 PM
**Data curta e hora longa** | 21/05/2018 19:48:51                        | 5/21/2018 7:48:51 PM
