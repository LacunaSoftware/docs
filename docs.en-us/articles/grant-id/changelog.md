# GrantID changelog

> [!NOTE]
> This version history currently contains only the most recent changes to the application. We are working on
> documenting older versions.

<a name="v3-24-0" />
### 3.24.0 (2020-12-29)

* New Features
  * [LI-350] - Add password policy to screens that define a password
  * [LI-351] - Update CPF already found message

Updates database model: no

<a name="v3-23-1" />
### 3.23.1 (2020-12-29)

* Bug fixes
  * [LI-348] - Digital certificate login events are not registered

Updates database model: no

<a name="v3-23-0" />
### 3.23.0 (2020-08-20)

* New Features
  * [LI-341] - Add setting to enable signature with certificates that have unknown revocation status
  * [LI-347] - Send mail with custom SMTP server by subscription (app setting)

* Improvements
  * [LI-344] - Update PKI SDK to accept security data certificates

Updates database model: no

<a name="v3-22-0" />
### 3.22.0 (2020-06-29)

* Improvements
  * [LI-339] - Set default country for phone number inputs

Updates database model: yes


<a name="v3-21-0" />
### 3.21.0 (2020-06-08)

* Bug fixes
  * [LI-330] - User's username is not being updated
  * [LI-331] - Non handled error while resending password recovery email

* Improvements
  * [LI-293] - Allow administrators to remove information such as email and phone number
  * [LI-327] - Digital Certificate login with non-unique Identifier (CPF) in the subscription
  * [LI-329] - Add spanish translations
  * [LI-332] - Configure White-list domains that can use iframes
  * [LI-334] - Screen to update email before 2FA verification
  * [LI-335] - Screen to update phone before 2FA verification
  * [LI-337] - Enable register with other countries identifiers

Updates database model: yes
