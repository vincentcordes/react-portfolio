import React from "react";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";

function PiControllerV2() {
    return (
        <div className="base">
            <h1>PiControllerV2</h1>
            <Github href={"https://github.com/vincentcordes/picontrollerv2"} />
            <ComingSoon />
        </div>
    )
}

export default PiControllerV2;