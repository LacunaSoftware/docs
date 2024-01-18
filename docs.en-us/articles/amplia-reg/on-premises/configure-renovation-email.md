# Configure renovation email - Amplia Reg

To enable renovation email sending, fill the section **Renovation** of the configuration file:

* **Enabled**: set to `True`
* **DefaultUrl**: renovation url with protocol. If order registration authority or order certification authority did not set a renovation url it will use this configuration. :warning: Enabled without a DefaultUrl will cause error if both certification authority and registration authority does not have configured a renovation url
* **EmailScheduleDays**: Time remaining in days before certificate expires to send a renovation notification separated by comma. Default: "30,15,5". If negative will send a notification about certificate been expired
* **MaxExpirationDays**: Maximum days after certificate expires to send a notification. Default: 30. This is a save guard is case job fails
* **NotificationBatchSize**: Maximum ammount of notification fired simultaneously between different orders. Default: 100
* **MinNotificationPeriodHours**: Minimum hours between same order before been notified about it's renovation again. Default: 12. This is a save guard is case job fails
* **ExpiredSubject**: Email subject about a expired certificate. Will be formatted with days been expired replacing {0}
* **ExpiredNotice**: Email notice about a expired certificate
* **ExpirationNearSubject**: Email subject about a near expiration certificate. Will be formatted with days to expire replacing {0}
* **ExpirationNearNotice**: Email notice about a near expiration certificate

Example (environment variables):

```sh
Renovation__Enabled=True
Renovation__DefaultUrl=https://lacunasoftware.com
Renovation__EmailScheduleDays=30,15,-5
Renovation__MaxExpirationDays=60
Renovation__NotificationBatchSize=200
Renovation__MinNotificationPeriodHours=48
Renovation__ExpiredSubject=Your certificate expired {0} or more days ago
Renovation__ExpiredNotice=We inform you that your digital certificate expired on the day
Renovation__ExpirationNearSubject={0} or less days left for your certificate to expire
Renovation__ExpirationNearNotice=We inform you that your digital certificate will expire on the day
```

# Configuring the email template

Create the HTML template of the email and store it inside the `assets` folder of the configured Blob Storage with the name `RenovationAlertTemplate.html` in `UTF8`. The template can have tags for replacement, use `{{tagName}}` inside the template for it's replacement.

Tag names that will be replaced:

* ThemeColor: application primary theme color
* AccentColorKey: application accent theme color
* ButtonTextColor: white
* LogoUrl: application logo url
* SupportEmail: application configured SupportEmailAddress
* HolderFirstName: certificate holder's first name
* SubjectName: certificate subject name
* ExpirationDate: certificate expiration date (year, month and days)
* ExpirationTime: certificate expiration time (hours, minutes and seconds)
* RenovationLinkUrl: configured renovation link (registration authority renovation link or certification authority renovation link or default renovation link)
* RenovationLinkText: configured renovation link without protocol
* SubjectIdentifierLabel: subject identifier label
* SubjectIdentifier: certificate subject identifier
* CertificateType: certificate type
* OrderNumber: order number
* OperationStartDate: certificate operation start date (year, month and days)
* ExpirationNotice: expired or expiration near notice

Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .certificate-content {
            display: flex;
            flex-direction: column;
        }
    </style>
</head>

<body>
    <div>
        <h1>Renew your certificate</h1>
    </div>
    <div>
        <h2>Hello, {{HolderFirstName}}</h2>
    </div>
    <div>
        <span>{{ExpirationNotice}} <b>{{ExpirationDate}}</b> at <b>{{ExpirationTime}}</b></span>
    </div>
    <div>
        <span>We would like to invite you to renew your certificate in <a target="_blank"
                href="{{RenovationLink}}">{{RenovationLinkText}}</a></span>
    </div>
    <div>
        <h2>Certificate data</h2>
        <div class="certificate-content">
            <span>Holder: {{SubjectName}}</span>
            <span>{{SubjectIdentifierLabel}}: {{SubjectIdentifier}}</span>
            <span>Type: {{CertificateType}}</span>
            <span>Order: {{SubjectIOrderNumberdentifier}}</span>
            <span>Validity starts: {{OperationStartDate}}</span>
            <span>Validity ends: {{ExpirationDate}}</span>
        </div>
    </div>
</body>

</html>
```

## See also

* [Configure email sending](configure-email.md)
