import React from "react";
import '../assets/styles/paragraph.css';

export default function Paragraph({ str, header, children }) {
    return (
        <div className="paragraph-container">
            <h3 className="paragraph-header">{header}</h3>
            {str.map(s => <p className="paragraph-p">{s}</p>)}
            {children}
        </div>
    );
}