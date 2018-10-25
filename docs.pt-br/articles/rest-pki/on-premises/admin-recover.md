# Recuperação de senha de administrador - Rest PKI

Caso tenha esquecido a senha do usuário *Admin*, criado durante o processo de instalação da sua instância
[*on premises*](index.md) do [Rest PKI](../index.md), execute no banco de dados o comando SQL abaixo
para resetar a senha para `Senha!01`:

```sql
update "dbo"."AspNetUsers"
set "PasswordHash"='AClrojBpn4Y/ly8qXXVkvVN67/oUsCxaMdKD7Bq0GWsLbXXVqz5a4V6g06JqIemJ3A=='
where "UserName"='Admin';
```

Uma vez resetada a senha, autentique-se no Rest PKI (usuário `Admin` senha `Senha!01`) e, no
menu superior, clique no nome do usuário (**Admin**) &gt; **Conta** e clique no botão **Alterar senha**.
