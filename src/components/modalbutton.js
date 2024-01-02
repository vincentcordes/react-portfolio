import React from "react";
import "../assets/styles/modalbutton.css"

function ModalButton({ onClick }) {
    return (
        <button className="modal-button" onClick={onClick} >
            <svg className="modal-svg">
                <circle className="modal-shape" r="2.5" cx="13" cy="3" />
                <rect className="modal-shape" x="12" y="8" width="3" height="12" />
                <rect className="modal-shape" x="9" y="8" width="3" height="2" />
                <rect className="modal-shape" x="9" y="18" width="9" height="3" />
            </svg>
        </button>
    )


}

export default ModalButton;