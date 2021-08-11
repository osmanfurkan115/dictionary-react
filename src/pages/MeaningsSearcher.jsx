import React from 'react'
import Meanings from './Meanings'

export default function MeaningsSearcher({visible, word}) {


    return (
        <div>
            {visible && word!=="" ?
                <Meanings word={word}></Meanings>
            
            : ""}
        </div>
    )
}
