import React from "react";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";

function About() {
    return (
        <div className="base">
            <h1>About</h1>
            <Github href={"https://github.com/vincentcordes/react-portfolio"} />
            <ComingSoon />
        </div>
    );
}

export default About;