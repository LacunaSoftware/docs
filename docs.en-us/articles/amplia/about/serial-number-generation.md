# About generation of serial numbers - Amplia

End-user certificates issued by [Amplia](../index.md) have a serial number generated with a pseudo-random number generator (CSPRNG)
having 122 bits of strong entropy.

> [!NOTE]
> If have an [on-premises instance](../on-premises/index.md) you can configure your instance to also issue CA certificates with
> random serial numbers -- see [configure CA certificate templates](../on-premises/configure-ca-cert-templates.md) for instructions.
