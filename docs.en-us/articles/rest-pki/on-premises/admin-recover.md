# Recover admin password - Rest PKI

If you lose the password for the *Admin* user, configured during the setup of your
[*on premises*](index.md) instance of [Rest PKI](../index.md), execute the following query on the
database to reset it to `Senha!01`:

```sql
update "dbo"."AspNetUsers"
set "PasswordHash"='AClrojBpn4Y/ly8qXXVkvVN67/oUsCxaMdKD7Bq0GWsLbXXVqz5a4V6g06JqIemJ3A=='
where "UserName"='Admin';
```

Once you reset the paassword, sign in on Rest PKI (user `Admin` password `Senha!01`) and, on
the top menu, click on the username (**Admin**) &gt; **Account** &gt; **Change password**.
