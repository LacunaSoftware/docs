# Pasta temporária - PKI Express

O PKI Express utiliza uma pasta temporária para manter um *cache* local de Listas de Certificados Revogados (LCRs), certificados de Autoridades Certificadoras (ACs),
entre outros artefatos.

Por padrão, a pasta temporária utilizada é:

* No Windows: `%TEMP%` (variável de ambiente *TEMP*)
* No Linux: `/tmp`

Para alterar a pasta temporária:

```sh
pkie config --set tempDir=path
```

A pasta **deve existir e estar liberada para escrita** pelo seu usuário e pelo usuário utilizado para executar a aplicação web (no Linux,
esse usuário geralmente é o `www-data`). 
