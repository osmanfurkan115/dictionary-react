import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function Title() {
    return (
        <div className="header">
            <Icon name="translate" size="massive"></Icon>
            {/* <Header className="title" as="h1">DICTIONARY</Header> */}
            <span className="title">DICTIONARY</span>
        </div>
    )
}
