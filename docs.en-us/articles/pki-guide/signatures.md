# Digital signatures

Before we can define what a digital signature is, we must first talk about a broader concept, the **electronic signature**. Wikipedia defines it as:

> An electronic signature, or e-signature, refers to data in electronic form, which is logically associated with other data in electronic form and which is used by the signatory to sign.

In this sense, an electronic signature can be understood as a wide range of processes for associating a **signer** to an **electronic document** through some kind of **commitment** (for instance the commitment to comply with the document's contents, or the commitment of having witnessed an agreement).

> [!NOTE]
> The terms *signatory* and *signer* are synonyms. We use the latter.

For instance, the printout of a document that is first signed by hand and later faxed over might be considered an electronic signature. However, it may be argued that such a signature can be easily forfeit. Different electronic signature processes offer different guarantees, or *assurances*.

Electronic signature processes can be categorized into different **assurance levels**. The [eIDAS](https://www.eid.as/) standard defines three increasing levels of assurance:

1. Electronic signatures
1. Advanced electronic signatures
1. Qualified electronic signatures

For the intents and purposes of this documentation, a **digital signature** is an **implementation of electronic signature** using **X.509 public key certificates** and adhering to a specific **signature standard** in order to achieve the **highest levels of assurance**.

> [!NOTE]
> The term *digital signature* should not be confused with *digital signature* ***algorithm***, which is a type of asymmetric cryptographic algorithm (for instance, the RSA algorithm). Usually, digital signature algorithms are a small part of the implementation of digital signatures.

In all other articles, when we say simply *signature*, we mean a *digital signature* as defined above.

## Signature standards

The main digital signature standards in use today are:

* [CMS Advanced Electronic Signatures (CAdES)](https://en.wikipedia.org/wiki/CAdES_(computing))
* [PDF Advanced Electronic Signatures (PAdES)](https://en.wikipedia.org/wiki/PAdES)
* [XML Advanced Electronic Signatures (XAdES)](https://www.w3.org/TR/XAdES/)
