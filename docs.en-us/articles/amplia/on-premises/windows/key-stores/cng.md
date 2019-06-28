# Amplia - CNG Key Stores

> [!NOTE]
> The documentation for this system is currently under construction. We apologize for any inconvenience this may cause. Please
> contact us if there's any information you need that is not currently documented.

* `Type`: set this setting to `CNG` to specify a key store which uses a CNG key storage provider (KSP) to store keys
* `ProviderName`: name that identifies the KSP to be used
* `UseMachineStore`: every CNG KSP has the concept of storing keys on the *user store* or on the *machine store*. By default, the
    user store is used. Set this setting to `true` to use the machine store
* `Pin`: the PIN of the store, if required
* `OverrideKeyPins`: ?
* `RememberKeyPins`: ?
