# Configure certificate renewal alert - Amplia Reg

To enable certificate renewal email sending, fill the section **CertificateRenewalAlert** of the configuration file:

* **Enabled**: set to `True` to enable certificate renewal email sending.
* **EmailScheduleDays**: Comma-separated list of remaining days before each certificate expires to send a certificate renewal notification. Defaults to `30,15,5`. Use negative values to notify users after the certificate has expired
* **DefaultUrl**: default certificate renewal url, with protocol. Used for substitution on the default email templates if no certificate renewal URL is set on either the order's registration or certification authorities. If using the default templates, fill this value unless you have per-authority renewal URLs configured.

Example (*.ini* or *.conf* file):

```ini
[CertificateRenewalAlert]
Enabled=True
DefaultUrl=https://lacunasoftware.com
EmailScheduleDays=30,15,-5
```

Example (environment variables):

```sh
CertificateRenewalAlert__Enabled=True
CertificateRenewalAlert__DefaultUrl=https://lacunasoftware.com
CertificateRenewalAlert__EmailScheduleDays=30,15,-5
```

It is important to notice that the value of the **EmailScheduleDays** setting is merely a goal. Whether it is met or not depends on a number of factors. Most notably, if for some reason the
notifications recurring job fail to run for several consecutive days (for instance if you set `General:ProcessBackgroundJobs` to `False`), when it eventually runs the following conditions may
occurr:

* Multiple notifications may be due to be sent for the same certificate
* Notifications may be due to be sent for certificates that have expired too long ago for the notification to be of any use

There are two settings that work as safeguards against these conditions:

* **MinNotificationPeriodHours**: Minimum period in hours between notifications sent for the same certificate. Defaults to `24`.
* **MaxExpirationDays**: Maximum days after certificate expires to send notifications. Defaults to `90`.

## Customizing email subjects

The system automatically determines an adequate subject for each renewal notice email based on whether the certificate has already expired or not, and when. There are six
possible subjects:

* *Your certificate expired today*
* *Your certificate expired yesterday*
* *Your certificate expired N days ago*
* *Your certificate expires today*
* *Your certificate expires tomorrow*
* *Your certificate expires in N days*

> [!NOTE]
> The language of the subjects also varies according to the `General:DefaultCulture` setting

To customize the subjects on one or more of these cases, set the following settings on the **CertificateRenewalAlert** section:

* **ExpiredTodaySubject**
* **ExpiredYesterdaySubject**
* **ExpiredSubject**
* **ExpiresTodaySubject**
* **ExpiresTommorowSubject**
* **ExpiresSubject**

On the specific cases of **ExpiredSubject** and **ExpiresSubject**, use the placeholder `{0}` for the number of days.

Example (*.ini* or *.conf* file):

```ini
[CertificateRenewalAlert]
...
ExpiresSubject={0} days left to renew your certificate!
```

Example (environment variables):

```sh
CertificateRenewalAlert__ExpiresSubject={0} days left to renew your certificate!
```

## Customizing the email templates

Create the HTML template of the email and store it encoded in UTF-8 inside the `assets` folder of the configured Blob Storage with one of the following names:

* `CertificateRenewalNearExpirationTemplate.html` for emails sent when the certificate is near its expiration
* `CertificateRenewalExpiredTemplate.html` for emails sent when the certificate is past its expiration

The templates can use any of the following tags in the form of `{{TagName}}`, which will be replaced according to the table below:

Tag name                       | Description
------------------------------ | -----------
HolderFirstName                | Certificate holder's first name, well suited for an initial greeting. In case of organizational certificates, this contains the responsible person's first name, not the company's name
SubjectName                    | Certificate subject name
ExpirationDate                 | Certificate expiration date
ExpirationTime                 | Certificate expiration time
CertificateRenewalLinkUrl      | Renovation link URL (to be used on `href` attribute)
CertificateRenewalLinkText     | Renovation link text (to be used as text of an `<a>` element, contains the renovation URL without the protocol)
SubjectIdentifierLabel         | Subject identifier label
SubjectIdentifier              | Certificate subject identifier
CertificateType                | Certificate type
OrderNumber                    | Order number
ValidityStartDate              | Certificate validity start date
ValidityStartTime              | Certificate validity start time
UnsubscribeLinkUrl             | Link to unsubscribe from renovation emails

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
                href="{{CertificateRenewalLink}}">{{CertificateRenewalLinkText}}</a></span>
    </div>
    <div>
        <h2>Certificate data</h2>
        <div style="background-color: #{{AccentColor}}">
            <p>Holder: {{SubjectName}}</p>
            <p>{{SubjectIdentifierLabel}}: {{SubjectIdentifier}}</p>
            <p>Type: {{CertificateType}}</p>
            <p>Order: {{OrderNumber}}</p>
            <p>Validity starts: {{OperationStartDate}}</p>
            <p>Validity ends: {{ExpirationDate}}</p>
        </div>
    </div>
</body>
</html>
```

## Advanced settings

The following settings on the **CertificateRenewalAlert** section may be used to further control the certificate renewal email sending:

* **NotificationBatchSize**: Controls how many orders will be fetched from the database for processing at a time. Defaults to `100`

By default, due notifications are scheduled to be sent daily at 10:00 on whatever time zone is configured on `General:DefaultTimeZone`.
To customize this, fill on the **JobSchedules** section:

* **CertificateRenewalAlert**: desired cron schedule expression. Defaults to `0 10 * * *` (every day at 10:00)
* **CertificateRenewalAlertTimeZone**: desired time zone for the cron schedule expression. Defaults to the system time zone.

> [!TIP]
> If you need help defining a cron schedule expression, visit [crontab guru](https://crontab.guru/)

## See also

* [Configure email sending](configure-email.md)
* [test-certificate-renewal-alert](tool/test-certificate-renewal-alert.md)
