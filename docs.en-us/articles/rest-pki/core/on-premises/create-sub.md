# Creating a subscription on Rest PKI Core

[Rest PKI Core](../index.md) supports multiple "subscriptions", or "accounts", each having its own users, applications, API keys, security contexts etc.

To create a subscription, follow the steps below. You must have global administrative privileges on the instance to perform these operations
(role `Owner` or `Contributor` on Sys Admin).

1. Sign in to your instance's dashboard
1. On the upper right corner, click on the rectangle with your name then click on **Sys Admin**
1. On the subscriptions page, click on **Add**
1. Fill in a **name** for the new subscription and optionally an alias, then click on **Create**
1. Accept the recommendation to reload the page by clicking **OK**

> [!NOTE]
> Subscriptions are cached locally on each web server, so this change takes up to 1 minute to propagate.

Next, you'll probably want to **add an administrative user** to the new subscription:

1. Wait a full minute for propagation
1. Manually reload the page by clicking the ↻ button on your browser or pressing the F5 key
1. Click the rectangle with your name on the upper right corner, then click on **Exit Sys Admin**
1. On the left menu, click on **Users**, then on **Add**
1. Search for the user by typing a name or email address. If the user has not registered yet, you will not be able to find them. In this case, fill out the user's complete email address.
1. On *Subscription*, select the newly created subscription
1. Choose one or more roles for the user. To grant full privileges to this user over the subscription, mark the `Admin` role
1. Click **Add user**

> [!NOTE]
> If you don't see the subscription, it's probably because propagation is still taking place. Wait a few more seconds and reload the page.

If you selected an existing user on step 5, the user already has access and can immediately access the dashboard. No notifications will be sent, you must notify the
user youself.

If the user has not registered yet, they will receive an invitation email, which will guide them through the registration process and grant them access to the
subscription at the end of it.

Once the user gains access to the subscription, they can create an API key for integration by following the steps on the [Get Started](../integration/get-started.md)
article.
