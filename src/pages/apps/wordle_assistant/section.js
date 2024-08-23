import React from "react";
import "../../../assets/styles/section.css"
import Paragraph from "../../../components/paragraph";

function Section({ words }) {
    let children = <div className="section-container">
        {words.map(w => <p className="section-p">{w}</p>)}
    </div>
    return (
        <Paragraph
            header={`${words.length} Possibilities!`}
            str={[]}
            children={children}
        />
    );
}
export default Section;