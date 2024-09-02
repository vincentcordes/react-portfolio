import React from "react";
import "../assets/styles/basestyles.css";

function Github({ href, header }) {
    return (
        <a className="github-a"
            href={href}
            rel="noreferrer"
            target="_blank">
            {header}
        </a>
    );

}

export default Github;