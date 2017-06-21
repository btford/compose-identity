# Compose Identity

A functional `compose` util that maintains the identity of the returned function:

```
import compose from 'compose-identity';

const x = num => num + 1;
const y = num => num * 2;
const z = compose(x, y); // num => y(x(num))

// compose always returns the same function!
assert(z === compose(x, y));
```

## Installation:

```
yarn add compose-identity
```

Or, less ideally:

```
npm install compose-identity
```

## License
MIT
