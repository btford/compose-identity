# Compose Identity

A functional `compose` util that maintains the identity of the returned function:

```
import compose from 'compose-identity';

const x = num + 1;
const y = num * 2;
const z = compose(x, y); // num => y(x(num))

// compose always returns the same function!
assert(z === compose(x, y));
```
