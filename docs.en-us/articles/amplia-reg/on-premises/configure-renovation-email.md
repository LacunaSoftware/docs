# Configure renovation email - Amplia Reg

To enable renovation email sending, fill the section **Renovation** of the configuration file:

* **Enabled**: set to `True` to enable renovation email sending. If omitted, renovation email sending will only take place if **DefaultUrl** is set
* **DefaultUrl**: default renovation url, with protocol. Used if no renovation URL is set on either the order's registration or certification authorities. :warning: It is recommended to fill this settting since and error will occurr if renovation email sending is enabled without a DefaultUrl and no renovation URL is configured on the order's authorities
* **EmailScheduleDays**: Comma-separated list of remaining days before each certificate expires to send a renovation notification. Defaults to `30,15,5`. Use negative values to notify users after the certificate has expired

Example (*.ini* or *.conf* file):

```ini
[Renovation]
Enabled=True
DefaultUrl=https://lacunasoftware.com
EmailScheduleDays=30,15,-5
```

Example (environment variables):

```sh
Renovation__Enabled=True
Renovation__DefaultUrl=https://lacunasoftware.com
Renovation__EmailScheduleDays=30,15,-5
```

It is important to notice that the value of the **EmailScheduleDays** setting is merely a goal. Whether it is met or not depends on a number of factors. Most notably, if for some reason the
notifications recurring job fail to run for several consecutive days (for instance if you set `General:ProcessBackgroundJobs` to `False`), when it eventually runs the following conditions may
occurr:

* Multiple notifications may be due to be sent for the same certificate
* Notifications may be due to be sent for certificates that have expired too long ago for the notification to be of any use

There are two settings that work as safeguards against these conditions:

* **MinNotificationPeriodHours**: Minimum period in hours between notifications sent for the same certificate. Defaults to `12`.
* **MaxExpirationDays**: Maximum days after certificate expires to send notifications. Defaults to `30`.

## Customizing email subjects

<!-- ExpirationNearSubject -->

By default, the subject of emails sent when a certificate is near its expiration is similar to:

```
Your certificate will expire in N days
```

> [!NOTE]
> The language of the default subject varies according to the `General:DefaultCulture` setting

To customize this text, set the **ExpirationNearSubject** setting using `{0}` as a placeholder for the number of days until expiration.

```ini
[Renovation]
...
ExpirationNearSubject=You have {0} days before your certificate expires!
```

```sh
Renovation__ExpirationNearSubject=You have {0} days before your certificate expires!
```

<!-- ExpiredSubject -->

By default, the subject of emails sent when a certificate is past its expiration date is similar to:

```
Your certificate has expired N days ago
```

To customize this text, set the **ExpiredSubject** setting using `{0}` as a placeholder for the number of days until expiration.

```ini
[Renovation]
...
ExpirationNearSubject=You have {0} days before your certificate expires!
```

```sh
Renovation__ExpirationNearSubject=You have {0} days before your certificate expires!
```

## Customizing the email templates

Create the HTML template of the email and store it encoded in UTF-8 inside the `assets` folder of the configured Blob Storage with one of the following names:

* `RenovationEmailTemplateCertificateNearExpiration.html` for emails sent when the certificate is near its expiration
* `RenovationEmailTemplateCertificateExpired.html` for emails sent when the certificate is past its expiration

The templates can use any of the following tags in the form of `{{TagName}}`, which will be replaced according to the table below:

Tag name               | Description
---------------------- | -----------
HolderFirstName        | Certificate holder's first name, well suited for an initial greeting. In case of organizational certificates, this contains the responsible person's first name, not the company's name
SubjectName            | Certificate subject name
ExpirationDate         | Certificate expiration date
ExpirationTime         | Certificate expiration time
RenovationLinkUrl      | Renovation link URL (to be used on `href` attribute)
RenovationLinkText     | Renovation link text (to be used as text of an `<a>` element, contains the renovation URL without the protocol)
SubjectIdentifierLabel | Subject identifier label
SubjectIdentifier      | Certificate subject identifier
CertificateType        | Certificate type
OrderNumber            | Order number
ValidityStartDate      | Certificate validity start date
ValidityStartTime      | Certificate validity start time

The following tags can be used to compose dynamic templates, that vary according to the application's theme and assets:

Tag name               | Description
---------------------- | -----------
ThemeColor             | Application primary theme color in hex (without '#')
AccentColor            | Application accent theme color in hex (without '#')
LogoUrl                | Application logo url
SupportEmail           | Application configured SupportEmailAddress

Example:

```html
<!DOCTYPE html>
<html>
<body>
    <div>
        <h1>Renew your certificate</h1>
    </div>
    <div>
        <h2>Hello, {{HolderFirstName}}</h2>
    </div>
    <div>
        <span>Your certificate will expire on <b>{{ExpirationDate}}</b> at <b>{{ExpirationTime}}</b></span>
    </div>
    <div>
        <span>We would like to invite you to renew your certificate in <a target="_blank"
                href="{{RenovationLink}}">{{RenovationLinkText}}</a></span>
    </div>
    <div>
        <h2>Certificate data</h2>
        <div style="background-color: #{{AccentColor}}">
            <p>Holder: {{SubjectName}}</p>
            <p>{{SubjectIdentifierLabel}}: {{SubjectIdentifier}}</p>
            <p>Type: {{CertificateType}}</p>
            <p>Order: {{SubjectIOrderNumberdentifier}}</p>
            <p>Validity starts: {{OperationStartDate}}</p>
            <p>Validity ends: {{ExpirationDate}}</p>
        </div>
    </div>
</body>
</html>
```

## Advanced settings

The following settings on the **Renovation** section may be used to further control the renovation email sending:

* **NotificationBatchSize**: Controls how many orders will be fetched from the database for processing at a time. Defaults to `100`

## See also

* [Configure email sending](configure-email.md)
