import React from "react";
import { Jobs } from "./jobs";
import { JobImages } from "./jobs";
import "../../../assets/styles/partygen.css";

function FF1job({ value }) {
    const images = require.context("../../../assets/images/apps/ffpartygen", true);
    let jobImage = images(`./${JobImages[value - 1]}`);
    let jobName = Jobs[value - 1];

    return (
        < div className="job" >
            <p className="job-p">{jobName}</p>
            <img src={jobImage} />
        </div>
    )
}

export default FF1job;