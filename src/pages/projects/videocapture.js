import React from "react";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";

function VideoCapture() {
    return (
        <div className="base">
            <h1>Video Capture</h1>
            <Github href={"https://github.com/vincentcordes/VideoCapture"} />
            <ComingSoon />
        </div>
    )
}

export default VideoCapture;
