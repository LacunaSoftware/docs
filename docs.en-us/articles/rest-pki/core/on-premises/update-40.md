# Update Rest PKI Core from 3.x to 4.0

## 1. Decide if you need to create indexes manually

If your instance has a **large number of Signature Sessions or Transactions (millions)**, it is recommended to manually create some of the indexes required for version 4.0 **before updating**, proceeding to step 2.

If your instance **does not meet these conditions**, you may skip step 2 and **proceed directly to step 3**.

## 2. Create the indexes manually

### Using SQL Server

Execute the following commands on your SQL Server database one at a time, ensuring that each command completes successfully before running the next one.

```SQL
IF NOT EXISTS (
	SELECT 1 
	FROM sys.columns 
	WHERE [name] = 'DateSignaturesStartedUtc'
	  AND [object_id] = OBJECT_ID('SignatureSessions')
)
BEGIN
	ALTER TABLE [SignatureSessions] 
	ADD [DateSignaturesStartedUtc] datetime2 NULL;
END

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_SignatureSessions_DateCompletedUtc_DateSignaturesStartedUtc'
	  AND object_id = OBJECT_ID('dbo.SignatureSessions')
)
CREATE INDEX [IX_SignatureSessions_DateCompletedUtc_DateSignaturesStartedUtc]
ON [SignatureSessions] ([DateCompletedUtc], [DateSignaturesStartedUtc]);

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_SignatureSessions_DateCreatedUtc_DateCompletedUtc'
	  AND object_id = OBJECT_ID('dbo.SignatureSessions')
)
CREATE INDEX [IX_SignatureSessions_DateCreatedUtc_DateCompletedUtc]
ON [SignatureSessions] ([DateCreatedUtc], [DateCompletedUtc]);

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_SignatureSessions_StatusCode_DateCreatedUtc'
	  AND object_id = OBJECT_ID('dbo.SignatureSessions')
)
CREATE INDEX [IX_SignatureSessions_StatusCode_DateCreatedUtc]
ON [SignatureSessions] ([StatusCode], [DateCreatedUtc]);

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_SignatureSessions_SubscriptionId_DateCreatedUtc'
	  AND object_id = OBJECT_ID('dbo.SignatureSessions')
)
CREATE INDEX [IX_SignatureSessions_SubscriptionId_DateCreatedUtc]
ON [SignatureSessions] ([SubscriptionId], [DateCreatedUtc]);

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_SignatureSessions_SubscriptionId_StatusCode_DateCreatedUtc'
	  AND object_id = OBJECT_ID('dbo.SignatureSessions')
)
CREATE INDEX [IX_SignatureSessions_SubscriptionId_StatusCode_DateCreatedUtc]
ON [SignatureSessions] ([SubscriptionId], [StatusCode], [DateCreatedUtc]);

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_Documents_DateCreatedUtc'
	  AND object_id = OBJECT_ID('dbo.Documents')
)
CREATE INDEX [IX_Documents_DateCreatedUtc]
ON [Documents] ([DateCreatedUtc]);

IF NOT EXISTS (
	SELECT 1 FROM sys.indexes 
	WHERE name = 'IX_Documents_SubscriptionId_DateCreatedUtc'
	  AND object_id = OBJECT_ID('dbo.Documents')
)
CREATE INDEX [IX_Documents_SubscriptionId_DateCreatedUtc]
ON [Documents] ([SubscriptionId], [DateCreatedUtc]);
```

### Using Postgres

Execute the following commands on your PostgreSQL database one at a time, ensuring that each command completes successfully before running the next one.

```SQL

ALTER TABLE "SignatureSessions" ADD COLUMN IF NOT EXISTS "DateSignaturesStartedUtc" timestamptz DEFAULT NULL;

CREATE INDEX IF NOT EXISTS "IX_SignatureSessions_DateCompletedUtc_DateSignaturesStartedUtc" ON "SignatureSessions" ("DateCompletedUtc", "DateSignaturesStartedUtc");

CREATE INDEX IF NOT EXISTS "IX_SignatureSessions_DateCreatedUtc_DateCompletedUtc" ON "SignatureSessions" ("DateCreatedUtc", "DateCompletedUtc");

CREATE INDEX IF NOT EXISTS "IX_SignatureSessions_StatusCode_DateCreatedUtc" ON "SignatureSessions" ("StatusCode", "DateCreatedUtc");

CREATE INDEX IF NOT EXISTS "IX_SignatureSessions_SubscriptionId_DateCreatedUtc" ON "SignatureSessions" ("SubscriptionId", "DateCreatedUtc");

CREATE INDEX IF NOT EXISTS "IX_SignatureSessions_SubscriptionId_StatusCode_DateCreatedUtc" ON "SignatureSessions" ("SubscriptionId", "StatusCode", "DateCreatedUtc");

CREATE INDEX IF NOT EXISTS "IX_Documents_DateCreatedUtc" ON "Documents" ("DateCreatedUtc");

CREATE INDEX IF NOT EXISTS "IX_Documents_SubscriptionId_DateCreatedUtc" ON "Documents" ("SubscriptionId", "DateCreatedUtc");
```

## 3. Update Rest PKI Core

Proceed with the standard update instructions:
- [Docker](docker.md): Update to `lacunasoftware/restpkicore:4.0` image.
- [Linux](linux/update.md)