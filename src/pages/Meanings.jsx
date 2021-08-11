import React, { useState, useEffect } from 'react'
import WordService from '../services/WordService'

export default function Meanings({word}) {
    const [meanings, setMeanings] = useState([])

    useEffect(() => {
        let wordService = new WordService();
        wordService.getWord(word).then(result => setMeanings(result.data))
    }, [word])
    return (
        <div>
            {
                
            }
        </div>
    )
}
