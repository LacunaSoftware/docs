## Modo de operação do banco de dados

Amplia pode operar de duas maneiras em relação ao acesso do banco de dados:

1. Sendo *owner* do banco de dados e atualizar automaticamente o modelo do banco de dados após uma atualização (quando necessário)
1. Ter privilégios apenas de leitura e escrita no banco de dados, exigindo que o modelo do banco de dados seja atualizado pelo administrador (usando uma ferramenta de linha de comando)

Concessão de ser *owner* do aplicativo é simples, enquanto conceder somente leitura e gravação garante maior controle sobre o banco de dados. A decisão cabe à você. Se não tiver certeza do
que escolher, recomendamos a concessão de ser *owner* (opção 1), pois isso facilita a atualização do aplicativo.

Algumas das instruções de configuração depende da opção que você escolhe.
