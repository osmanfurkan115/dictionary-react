import React from 'react'
import { Container, Grid } from "semantic-ui-react";

export default function Meanings({ meanings }) {
    
    return (
        <div>
            {/* {meanings.map(meaning => console.log(meaning))} */}
            {console.log(meanings)}
            <Grid celled className="meaningColumn" >
                <Grid.Row >

                    <Grid.Column width={4}  className="meaningHeader" >
                        Pronunciation
                    </Grid.Column>
                    <Grid.Column width={4}className="meaningDesc">
                        <audio
                            style={{ backgroundColor: "#fff", borderRadius: 10 }}
                            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                            controls
                        />

                        <Container>
                            ({meanings[0].phonetic})
                        </Container>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >

                    <Grid.Column width={4} className="meaningHeader" >
                        Meaning
                        
                        ({meanings[0].meanings[0].partOfSpeech})
                    </Grid.Column>
                    <Grid.Column width={4} className="meaningDesc">
                        {meanings[0].meanings[0].definitions[0].definition}
                        </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={4} className="meaningHeader" >
                        Example
                        
                    </Grid.Column>
                    <Grid.Column width={4} className="meaningDesc">
                        {meanings[0].meanings[0].definitions[0].example}
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
