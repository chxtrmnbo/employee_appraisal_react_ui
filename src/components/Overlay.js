import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
export default function Overlay() {
    return (
        <div style={{ zIndex: 9999999, position: 'absolute', left: 0, top: 0, width: "100vw", height: "100vh", background: "rgba(255, 255, 255, .90)" }} className="d-flex justify-content-center align-items-center" >
            <FontAwesomeIcon className="text-primary" icon={faCircleNotch} spin size="9x" />
        </div>
    )
}
