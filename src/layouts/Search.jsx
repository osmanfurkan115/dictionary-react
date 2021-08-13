import React, { useState } from 'react'
import { Icon, Input } from 'semantic-ui-react'
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

    const handleEnter = (e) => {
        if(e.keyCode === 13) {
            handleClick()
        }
    }

    return (
        <div>
            {/* icon={<Icon name="search" />} */}
            <Input focus action={{
                onClick: () => handleClick()
            }} onChange={(e) => handleChange(e)} onKeyDown={handleEnter} placeholder='Type a word' icon="search"  className="search"/>
            <MeaningsFilter visible={meaningState} word = {word}></MeaningsFilter>
        </div>
    )
}
