import React from 'react'
import { Button } from 'react-bootstrap';

export default function Redirect(props) {
    return (
        <div className="text-center">
            <Button pill className="bg-white w-30 text-black b-radius-20"> {props.buttonName}</Button>
        </div>
    )
}
