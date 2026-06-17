# Adicionando tipos de documento - Amplia Reg

Para adicionar tipos de arquivo do titular personalizados, adicione uma seção ao arquivo de configuração chamada **HolderFileTypes** com entradas seguindo a sintaxe `Tipo=Nome`, por exemplo:

Exemplo (arquivo .ini/.conf):

```ini
[HolderFileTypes]
CustomDoc1=Nome do meu primeiro documento personalizado
CustomDoc2=Nome do meu segundo documento personalizado
```

Exemplo (variáveis de ambiente):

```sh
HolderFileTypes__CustomDoc1=Nome do meu primeiro documento personalizado
HolderFileTypes__CustomDoc2=Nome do meu segundo documento personalizado
```

Os tipos são sensíveis a maiúsculas e minúsculas e devem ter **no máximo 15 caracteres**. O uso de `PascalCase` é recomendado.

> [!NOTE]
> Ao referenciar tipos personalizados na API, o tipo deve ser prefixado com `@`. Por exemplo, para referenciar o tipo personalizado `CustomDoc1` em uma
> requisição de API, você deve enviar `@CustomDoc1`.
