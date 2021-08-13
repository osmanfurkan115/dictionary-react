import React from 'react'
import Meanings from './Meanings'
import { Container } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import WordService from "../services/WordService"

export default function MeaningsFilter({ visible, word }) {
    const [meanings, setMeanings] = useState([])

    useEffect(() => {
        if(word !== "") {
            let wordService = new WordService();
            wordService.getWord(word).then(result => setMeanings(result.data))
        }
    }, [word])

    return (
        <div>
            {visible && word !== "" ?
                <Container
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        // height: "100vh",
                        justifyContent: "space-evenly",
                    }}
                >

                    <Meanings meanings={meanings}></Meanings>
                </Container>

                : ""}
        </div>
    )
}
