## Design principles

The class *AlphaCode* generates alphanumeric codes that are easy for humans to read, such that:

1. Codes should be easy to read
1. Codes should be easy to type back with low risk of mistaking similar characters such as `O` and `0`
1. Codes should have a relatively high entropy for the size of the code (high number of possible codes relative to the size of the code, allowing the developer
   to choose a relatively small code size).

To improve readability, the codes contain only uppercase letters and do not include characters like `O`, `0`, `1` and `I`, while
still maintaining a relatively high entropy per character. There are 32 possible characters, so every character adds 5 bits to the overall
entropy (25% better than using hexadecimal) which results in smaller codes for the same intended entropy.

For instance, to generate a code with 80 bits of entropy (2^80 possible codes):

* A hexadecimal code would need 20 characters, e.g.: `90A0-F20F-5883-8D55-AD31`
* An *AlphaCode* code would only need 16 characters, e.g.: `FFWC-RHC5-9NLF-VM42`
