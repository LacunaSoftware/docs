# Configure Firebase - Lacuna PSC

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please contact us if there's any information you need that is not currently documented.

## Configuring Apps

> [!NOTE]
> Currently, this is only supported by adding a developer account to the project.

1. Create a project on https://console.firebase.google.com/
2. Go to https://console.firebase.google.com/project/_/settings/iam and select your project
3. Add `dev.lacunasoftware@gmail.com` as a Member with Editor role

## Configuring the backend

Once you have followed the steps above, go to https://console.firebase.google.com/u/0/project/_/settings/general, select your project and use the project information to fill the section **Firebase** of the configuration file:

* **AppCheckEndpoint**: `https://firebaseappcheck.googleapis.com`
* **ProjectNumber**: the project number (e.g. *899724292518*)
* **ProjectName**: the project name (e.g. *psc-app*)

## See also

* [Lacuna PSC on-premises](index.md)
