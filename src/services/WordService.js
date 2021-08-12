import axios from "axios";
export default class WordService {

    async getWord(word) {
        return await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    }
}