import React from 'react'

export default function Title(props) {
    return (
        <div className="text-center">
            <h5>{props.title}</h5>
            <h5> {props.subtitle}</h5>
        </div>
    )
}
