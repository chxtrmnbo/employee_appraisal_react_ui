import React from 'react'
import { Button } from 'react-bootstrap';

export default function Redirect(props) {
    return (
        <div>
            <Button className="bg-white w-30 text-black" style={{ borderRadius: "12px" }}> {props.buttonName}</Button>
        </div>
    )
}
