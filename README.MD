[![NPM](https://nodei.co/npm/dictionjs.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/node-dictionary.js/)

# Advanced dictionary module for NodeJS.

## TypeScript import
```ts
import { dictionary } from 'dictionary.js'
```


## Example
```ts
const dictionary = require("dictionary.js")

(async () => {
   var result = await dictionary.findWord({ langCode: "tr", word: "araba" })
   console.log(result);
})();
```


