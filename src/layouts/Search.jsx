import React, { useState } from 'react'
import {  Input } from 'semantic-ui-react'
import MeaningsFilter from '../pages/MeaningsFilter'

export default function Search() {

    const [word, setWord] = useState("")
    const [meaningState, setMeaningState] = useState(false)

    const handleClick = () => {
        setMeaningState(true)
    }

    const handleChange = (e) => {
        setWord(e.target.value)
        setMeaningState(false)
    }
    return (
        <div>
            <Input focus action={{
                icon: "search", 
                onClick: () => handleClick()
            }} onChange={(e) => handleChange(e)} placeholder='Type a word' className="search"/>
            <MeaningsFilter visible={meaningState} word = {word}></MeaningsFilter>
        </div>
    )
}
