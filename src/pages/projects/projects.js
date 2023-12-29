import React from "react";
import Card from "../../components/card";
import "../../assets/styles/paragraphcentered.css";
import "../../assets/styles/projects.css";
import "../../assets/styles/basepage.css";

function Projects() {
    return (
        <div className="base">
            <p className="paragraphcentered">A listing and breakdown of various projects I've worked on over the years.</p>
            <div className="base-container">
                <Card header={"Professoinal"}
                    link={"/projects/professional"}
                    imgPath={""}
                    summary={"An overview of professional projects I have worked on."}
                />
                <Card header={"Pi Controller v1"}
                    link={"/projects/picontrollerv1"}
                    imgPath={""}
                    summary={"GUI GPIO controller for Raspberry Pi written in C."}
                />
                <Card header={"Pi Controller v2"}
                    link={"/projects/picontrollerv2"}
                    imgPath={""}
                    summary={"Blazor Server application for Raspberry Pi remote hardware control."}
                />
            </div>
        </div>
    );
}

export default Projects;