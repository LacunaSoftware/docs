# Amplia - CAPI Key Stores

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

* `Type`: set this setting to `CAPI` to specify a key store which uses a CAPI crypto service provider (CSP) to store keys
* Every CAPI CSP is identified by its *name* and *type*. Set these values on the settings `ProviderName` and `ProviderType`
* `ExportableKeys`: whether to generate keys marked as exportable (`true` or `false`, default `true`)
* `UseMachineStore`: every CAPI CSP has the concept of storing keys on the *user store* or on the *machine store*. By default, the
    user store is used. Set this setting to `true` to use the machine store
* `Pin`: the PIN of the store, if required
* `OverrideKeyPins`: ?
* `RememberKeyPins`: ?
