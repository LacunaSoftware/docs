## Creating a *storage account*

We need a *storage account* to store files (the system stores files outside the database to keep it organized) and also the
system logs. Follow the steps below to create a *storage account* (if you want to use an existing account, skip this part):

1. Under **Storage accounts**, click **+ Create**
1. On the first tab (*Basics*), fill in the fields according to your infrastructure (following the region chosen for the system)
   * Under *Performance*, choose **Standard**
   * Under *Redundancy*, choose the option you prefer (we suggest **Zone-redundant storage (ZRS)** -- <a href="https://azure.microsoft.com/documentation/articles/storage-redundancy/" target="_blank">click here</a>
     for details on the different replication options)
1. Click **Review**
1. Click **Create**

Once the *storage account* has been created, click **Go to resource**. Then obtain a *connection string*:

1. In the *storage account* settings, click **Access keys**
1. Under the **key1** section, take note of the value of the **Connection string** field
