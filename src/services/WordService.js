import axios from "axios";
export default class WordService {

    getWord(word) {
        return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    }
}