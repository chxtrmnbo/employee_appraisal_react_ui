import React from 'react'

export default function Contents(props) {
    return (
        <div>
            <p className="text-secondary">{props.content}</p>
            <p className="text-secondary"> {props.subContent}</p>
        </div>
    )
}
