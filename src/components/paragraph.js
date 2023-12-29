import React from "react";
import '../assets/styles/paragraph.css';

export default function Paragraph({ str }) {
    return (
        <div>
            <p className="paragraph">
                {str}
            </p>
        </div>
    );
}