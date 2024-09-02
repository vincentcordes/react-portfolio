import React from "react";
import Card from "../../components/card";
import Paragraph from "../../components/paragraph";
import "../../assets/styles/basestyles.css";

function Projects() {
    return (
        <div className="base">
            <Paragraph header={"Projects"}
                str={["A listing and breakdown of various projects I've worked on over the years. This is by no means the extent of them, just some highlights."]} />
            <div className="base-container">
                <Card header={"Cmdlist"}
                    link={"/projects/cmdlist"}
                    imgPath={"cmdlist.png"}
                    summary={"A command line application written in rust for quick command lookup."}
                />
                <Card header={"Video Capture"}
                    link={"/projects/videocapture"}
                    imgPath={"videocapture.png"}
                    summary={"Electron app for basic video capture."}
                />
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
                    summary={"Blazor Server application for Raspberry Pi hardware control."}
                />
            </div>
        </div>
    );
}

export default Projects;