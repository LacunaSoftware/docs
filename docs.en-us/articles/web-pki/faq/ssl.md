# Does Web PKI support establishing SSL connections with the user's certificate?

## (or How do I to transmit a NFe to Receita/SEFAZ/prefeitura?)

Currently, it is common to use the same certificate to issue an electronic invoice and transmit it to the agency competent 
(transmission is via SSL with mutual authentication). The predominance of this architecture comes from the fact 
that the first eletronic invoice signature products were mostly desktop applications. In a web system, you have to deal with 
the problem that the client certificate is not available on the backend.

To solve the problem of signing NFe in the browser, the PKI Web component fits perfectly (see the
[online exemple](https://www.lacunasoftware.com/en/DemoRestPKI/nfeSignature)). In the case of transmission, it is not 
necessary to use the same certificate used to issue the eletronic invoice. The national standard allows a certificate issued 
to a company other than the company that issued the eletronic invoice to be used for transmission.

This enables **the transmission to be done on the backend using an A1 certificate issued on behalf of the company offering the eletronic invoice web signing service (your company), rather than using the NFe issuing company certificate (your client)**. This avoids the problem of transmitting the eletronic invoice with a certificate available only on the frontend.
