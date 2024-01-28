import React from "react";
import "../assets/styles/basestyles.css";

function Github({ href }) {
    return (
        <a className="github-a"
            href={href}
            rel="noreferrer"
            target="_blank">
            Github
        </a>
    );

}

export default Github;