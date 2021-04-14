import axios from "axios";

var langList: string[] = [
  "en_US",
  "hi",
  "es",
  "fr",
  "ja",
  "ru",
  "en_GB",
  "de",
  "it",
  "ko",
  "pt-BR",
  "ar",
  "tr",
];

export class dictionary {
  static async findWord(params: { langCode: string; word: string }) {
    var obj;
    if (params.word) {
      if (params.langCode) {
        if (langList.includes(params.langCode)) {
          await axios
            .get(
              `https://api.dictionaryapi.dev/api/v2/entries/${encodeURI(
                params.langCode
              )}/${encodeURI(params.word)}`
            )
            .then(async (result) => {
              obj = result.data;
            });
        } else if (!langList.includes(params.langCode)) {
          throw new Error(
            "You must specify a valid word.\nWordList: " +
              langList.map((lang) => lang).join(", ") +
              " "
          );
        }
      } else if (!params.langCode) {
        throw new Error("You must specify a language");
      }
    } else if (!params.word) {
      throw new Error("You must specify a word");
    }
    if (obj) {
      return obj;
    } else return false;
  }
}
