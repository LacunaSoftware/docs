## Database operation mode

Amplia can operate in two ways regarding the access to the database:

1. Having owner privileges over the database and automatically updating the database model after an update (when needed)
1. Having only read and write privileges over the database, requiring the database model to be updated by the administrator (using a command line tool)

Granting owner privileges to the application is simpler, while granting only read and write ensures you greater control over the database. The decision
is up to you. If not sure what to choose, we recommend granting owner privileges (option 1), since it makes updating the application easier.

Some of the setup instructions depend on the option you choose.
