import React from "react";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";

function Cmdlist() {
    return (
        <div className="base">
            <h1>Cmdlist</h1>
            <Github href={"https://github.com/vincentcordes/cmdlist"} />
            <ComingSoon />
        </div>
    )
}

export default Cmdlist;