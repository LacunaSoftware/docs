### *Connection string* do banco de dados

Na seção **ConnectionStrings**, na configuração **DefaultConnection**, defina a *connection string* para o banco de dados criado anteriormente. Uma *connection string* típica parece como
essa:

```
Data Source=SERVER;Initial Catalog=DATABASE;User ID=USERNAME;Password=PASSWORD
```

> [!NOTE]
> Se você criar um banco de dados usando características avançadas como *log shipping* ou *mirroring*, sua *connection string* pode ser diferente.

