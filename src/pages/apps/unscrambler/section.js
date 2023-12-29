import React from "react";
import "../../../assets/styles/section.css"

function Section({ count, words }) {
    return (
        <div className="section" >
            <h3 className="section-header">{`${count} letter words: ${words.length}`}</h3>
            <div className="section-container">
                {words.map(w => <p className="section-p">{w}</p>)}
            </div>
        </div>);
}

export default Section;