import React from 'react'

export default function Title(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p className="text-muted">{props.subtitle}</p>
        </div>
    )
}
