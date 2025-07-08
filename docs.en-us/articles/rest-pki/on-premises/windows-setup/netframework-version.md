# Check .NET Framework minimun version support

Since Rest PKI v1.33.3, the **.NET Framework v4.6.2** is required.
In order to make sure the Windows Server has this .NET version installed, run the following command on a PowerSheel terminal:

```ps
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full' | Get-ItemPropertyValue -Name Release
```

If the the result shows a number greater than or equal to `394806` then your system supports the required .NET ✅

Otherwise, make sure your Windows Server is up to date or install the .NET Framework directly: [https://dotnet.microsoft.com/download/dotnet-framework](https://dotnet.microsoft.com/download/dotnet-framework)