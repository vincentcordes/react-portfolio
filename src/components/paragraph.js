import React from "react";
import '../assets/styles/paragraph.css';

export default function Paragraph({ str, header, children }) {
    var stringParagraphs = [];
    for (let i = 0; i < str.length; i++) {
        stringParagraphs.push(<p key={i} className="paragraph-p">{str[i]}</p>);
    }

    return (
        <div className="paragraph-container">
            <h3 className="paragraph-header">{header}</h3>
            {stringParagraphs}
            {children}
        </div>
    );
}