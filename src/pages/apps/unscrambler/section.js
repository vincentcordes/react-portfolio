import React from "react";
import "../../../assets/styles/section.css"
import Paragraph from "../../../components/paragraph";

function Section({ count, words }) {
    let children = <div className="section-container">
        {words.map(w => <p className="section-p">{w}</p>)}
    </div>
    return (
        // <div className="section" >
        //     <h3 className="section-header">{`${count} letter words: ${words.length}`}</h3>
        //     <div className="section-container">
        //         {words.map(w => <p className="section-p">{w}</p>)}
        //     </div>
        // </div>
        <Paragraph
            header={`${count} letter words: ${words.length}`}
            str={[]}
            children={children}
        />
    );
}
export default Section;