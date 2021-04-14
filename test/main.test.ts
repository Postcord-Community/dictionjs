import { dictionary } from '../src/index';

(async () => {
   var result = await dictionary.findWord({ langCode: "tr", word: "araba" })
   console.log(result);
})();


