# Rest PKI Core changelog

<!--
<a name="vnext" />
-->

<a name="v2.2.1" />
## 2.2.1 (2024-05-01)

Updates database model: no

### Bug fixes

RPNG-260 Relative URLs returned by the upload API on `FileModel.Location` passed on `FileReferenceModel.Url` are still not accepted on Linux/Docker



<a name="v2.2.0" />
## 2.2.0 (2024-04-30)

Updates database model: **yes**

### New features

RPNG-241 API transaction registering

RPNG-225 PDF stamping API

RPNG-214 Per-subscription settings for culture, time zone and date/hour format (used on PDF signature visual representation)

### Improvements

RPNG-236 Round-robin strategy among timestamp providers with optional priority setting

<!--
RPNG-238 Permitir visualização e edição de metadados das aplicações
-->

RPNG-239 Update Angular to version 17

RPNG-248 Accept relative URLs returned by the upload API on `FileModel.Location` passed on `FileReferenceModel.Url`

RPNG-255 Show latest events, timestamp requests and API transactions on signed-in home page

RPNG-256 Improve demonstrations and move to a separate menu item

RPNG-257 Delete old TSP messages only if explicitly configured

### Bug fixes

RPNG-235 Application does not try again to fetch a timestamp in case of error on initial try

RPNG-237 Error on complete signature job for CMS signatures

RPNG-245 Bad visual representation parameters cause return code 500 instead of 422

RPNG-250 Exceptions transformed into ApiException are not logged properly

RPNG-252 Date filter is not working on "Timestamp provider details" page

RPNG-253 Duration of fimestamp request is not registered in case of error

RPNG-254 Query on timestamp provider calls is not using the appropriate database index



<a name="v2.1.3" />
## 2.1.3 (2024-04-10)

Updates database model: no

### Improvements

RPNG-240 Use default timestamp tier when a policy requiring timestamp is used combined with a custom security context without a timestamp tier



<a name="v2.1.2" />
## 2.1.2 (2024-03-14)

Updates database model: no

### Bug fixes

RPNG-231 API return codes documented on Swagger do not match actual return codes returned by app



<a name="v2.1.1" />
## 2.1.1 (2024-01-24)

Updates database model: no

### New features

RPNG-234 Add route `/api/system/manifest`

### Improvents

RPNG-228 Add settings to log HTTP messages

### Bug fixes

RPNG-208 Property `signatureResult.getFile().url` returns an absolute URL (was relative on legacy Rest PKI)



<a name="v2.1.0" />
## 2.1.0 (2024-01-15)

Updates database model: no

### New features

RPNG-215 Proxy configuration

### Improvements

RPNG-216 Add support for Standby mode to simplify setup on Azure App Service

RPNG-219 Show attribute certificate information on signature information page

RPNG-224 Review swagger

### Bug fixes

RPNG-222 Error when saving security context referencing timestamp tier

RPNG-226 Necessary data for completing signatures is lost if an error occurs during completion in background

RPNG-227 "NotSupportedException" error on Cades start APIs versions 1 and 2

RPNG-232 CPF claim is unnecessarily required



<a name="v2.0.2" />
## 2.0.2 (2023-11-09)

Updates database model: no

### Improvements

RPNG-220 Ignore communication errors with Amplia when `AttributeCertificateInclusion` is set to `Recommended`



<a name="v2.0.1" />
## 2.0.1 (2023-11-08)

Updates database model: no

### Bug fixes

RPNG-217 Error "CryptographicException: The payload was invalid" when fetching old signature sessions



<a name="v2.0.0" />
## 2.0.0 (2023-10-30)

Updates database model: **yes**

### Improvements

RPNG-178 Permitir definição opcional de timestamp tier no contexto de segurança

RPNG-204 Anonimização de dados na tela de validação

RPNG-207 Melhorias ao gerenciamento de provimento de carimbos de tempo

RPNG-246 Filtro por data de início e fim na lista de chamadas ao provedor de carimbo de tempo

RPNG-212 Alterar texto da marca de validação da ONR

### Bug fixes

RPNG-198 API de validação de assinaturas não respeita configuração `General:DefaultTimeZone`



<a name="v1-13-1" />
## 1.13.1 (2023-10-17)

Updates database model: no

### Improvements

RPNG-212 Alterar texto da marca de validação da ONR



<a name="v2.0.0-rc16" />
## 2.0.0 RC 16 (2023-09-12)

Updates database model: **yes**

### New features

RPNG-160 Adicionar suporte às APIs de assinatura CADES antigas

RPNG-182 Histórico de timestamp tiers e providers

RPNG-206 Habilitar acesso via SSH na imagem de Docker

### Bug fixes

RPNG-185 Arquivos de certificado não são aceitos no upload de raízes do gerenciamento de contexto de segurança

RPNG-200 Propriedade MessageDigest dos assinantes PDF/CMS não é preenchida em situações em que apenas o algoritmo é conhecido

RPNG-201 APIs de exploração de assinatura estão ignorando o parâmetro `SignaturePolicyId`

RPNG-209 Multipart upload não está funcionando



<a name="v2.0.0-rc08" />
## 2.0.0 RC 8 (2023-06-30)

> [!WARNING]
> Before updating to this version make sure your PKI SDK license supports versions released up to 2023-06-27.

Updates database model: no

### Improvements

RPNG-192 Add setting `General:ReturnExceptionsToApplications` to return exceptions on error responses when the API is being called by an application

### Bug fixes

RPNG-191 Property `Detail` is not filled on 422 responses

RPNG-193 PDFs signed with legacy signature standard \(non-PAdES\) cause error on signature exploration API

RPNG-194 Password-protected PDFs cause error 500 \(should cause 422 with code `ProtectedPdfError`\)

RPNG-195 Corrupt PDFs cause error 500 \(should cause 422 with code `InvalidPdf`\)

RPNG-196 Error *Wrong last certificate on Pades signature*



<a name="v2.0.0-rc07" />
## 2.0.0 RC 7 (2023-05-30)

> [!WARNING]
> Before updating to this version make sure your PKI SDK license supports versions released up to 2022-10-19.

Updates database model: **yes**

### New features

RPNG-155 Add support for legacy certificate authentication APIs

RPNG-159 Add support for legacy PDF signature APIs

RPNG-161 Add support for legacy XML signature APIs

RPNG-162 Add support for legacy PDF marking APIs

RPNG-177 Add support for signature policies

RPNG-179 Automatically add attribute certificates to signatures

RPNG-183 Add suport for legacy certificate validation API

### Bug fixes

RPNG-180 Cloud certificate integration was broken after updating to SPA 2.6 (v1.13.0)



<a name="v1-13-0" />
## 1.13.0 (2023-03-14)

Updates database model: **yes**

### Improvements

RPNG-153 Add PDF visual representation to signature API

RPNG-172 Allow using "S3 clones" as blob storage

RPNG-169 Complete update to SPA 2.6



<a name="v1-12-2" />
## 1.12.2 (2023-02-28)

Updates database model: no

### Bug fixes

RPNG-173 Document details API does not allow inter-subscription access when instance is configured as on-premises


<a name="v1-12-1" />
## 1.12.1 (2023-01-05)

Updates database model: no

### Improvements

RPNG-164 Improve configuration on Linux



<a name="v1-12-0" />
## 1.12.0 (2022-12-13)

Updates database model: **yes**

### New Features

RPNG-158 Add support for PostgreSQL

### Improvements

RPNG-156 Updated ASP.NET Core to version 6.0

### Bug fixes

RPNG-152 Cannot add trusted roots on security context creation page



<a name="v1-11-0" />
## 1.11.0 (2022-11-14)

Updates database model: **yes**

### Improvements

RPNG-154 Add setting to control PDF marks left and top margins



<a name="v1-10-2" />
## 1.10.2 (2022-05-03)

Updates database model: no

### Improvements

RPNG-149 Add setting to force brazilian pdf signing policies



<a name="v1-10-1" />
## 1.10.1 (2022-04-23)

Updates database model: no

### Bug fixes

RPNG-148 Error when using custom security contexts



<a name="v1-10-0" />
## 1.10.0 (2022-04-23)

Updates database model: **yes**

### New Features

RPNG-2 Add certificate authentication API

### Improvements

RPNG-146 Allow configuration of PDF marks

RPNG-147 Allow configuration of PDF marking policy



<a name="v1-9-0" />
## 1.9.0 (2022-03-29)

Updates database model: no

### New Features

RPNG-41 Signature validation API

RPNG-141 Security context management on the web interface



<a name="v1-8-0" />
## 1.8.0 (2022-02-25)

Updates database model: **yes**

### Improvements

RPNG-10 Signature session [certificate requirements](integration/signature-sessions/certificate-requirements.md)



<a name="v1-7-0" />
## 1.7.0 (2022-01-25)

Updates database model: **yes**

### New Features

RPNG-135 Detached CAdES signatures

RPNG-44 UI to monitor calls \(especially errors\) to webhooks and file validation API

### Improvements

RPNG-51 UI to configure the subscription theme and customizable assets

### Bug fixes

RPNG-144 Session signature images are broken after authentication flow with cloud certificate provider



<a name="v1-6-0" />
## 1.6.0 (2021-12-08)

Updates database model: no

### New Features

RPNG-129 Add support for using cloud certificates on signature sessions

### Improvements

RPNG-139 Return more information about the signer's certificate on `SignatureSessionModel`



<a name="v1-5-1" />
## 1.5.1 (2021-11-23)

Updates database model: no

### Bug fixes

RPNG-140 Root password authentication error



<a name="v1-5-0" />
## 1.5.0 (2021-09-30)

Updates database model: **yes**

### New Features

RPNG-132 Add support for CAdES/CMS signatures

RPNG-93 Signature sessions with predefined documents

### Improvements

RPNG-138 Remove validation marks from document previews

RPNG-136 Add valiation marks to PDFs even if using CAdES/CMS signature

RPNG-128 Improve usage of theme assets to allow logos with varying aspect ratios

RPNG-120 Handle invalid/corrupt PDF exception properly

### Bug fixes

RPNG-119 Cached versions of acceptable filename patterns are shown on the management UI

### Client-specific changes

RPNG-130 Flavour ONR



<a name="v1-4-2" />
## 1.4.2 (2021-08-24)

Updates database model: no

### Improvements

RPNG-126 Add background worker count configuration

### Bug fixes

RPNG-125 Segmented upload error



<a name="v1-4-1" />
## 1.4.1 (2021-08-24)

Updates database model: no

### Improvements

RPNG-122 Improve validation notice on documents

RPNG-85 Adjustments to document key input

### Bug fixes

RPNG-124 Errors under high demand

RPNG-123 Retries of signature background processing always fail if a certain amont of time has elapsed



<a name="v1-4-0" />
## 1.4.0 (2021-08-11)

* First publicly available version
