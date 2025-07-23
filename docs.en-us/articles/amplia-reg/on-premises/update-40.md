# Update Amplia Reg from 3.x to 4.0

## 1. Before updating (Brazil only)

This command checks if reverse geolocation validation is enabled in order to set the IBGE validation code in previous orders. If you want to enable this behavior, make sure to activate the configuration before migrating the data, and ensure that Google Maps is properly configured.

## 2. Update Amplia Reg

Update AmpliaRegNg to version `4.0.7`. Previous versions should **not** be used. Further versions are **not** recommended.

## 3. Migrate data

Follow steps from [migrate-data](tool/migrate-data.md) with options `--to 2` (`-- migrate-data --to 2`)