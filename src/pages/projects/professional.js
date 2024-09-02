import React from "react";
import ComingSoon from "../../components/comingsoon";
import "../../assets/styles/basestyles.css";
import Paragraph from "../../components/paragraph";
import Github from "../../components/github";

function Professional() {
    return (
        <div className="base">
            <h1>Professional</h1>
            <Paragraph header={"Manufacturing Automation Systems"} str={[
                `
                I've worked for Manufacturing Automation Systems for more than 7 years now.
                Outside of some one off freelance projects (web based) MAS comprises all of my professional
                experience.
                `,
                `I really can't say enough good things about the people at MAS. They are all very talented,
                hardworking and heartfelt individuals that make an incredible team.`,
                `In my time at MAS I have worked on more than a dozen projects. Most of these have
                been desktop applications in the automation and inspection sphere using C# and WPF.`,
                `Starting a few years ago we began work on QC Plus Core™. At this point in my career QC Plus
                is what I would consider my magnum opus. It's an amazing platform designed for automated metrology
                built from the ground up by one other colleague and myself.`,
            ]} />
            <Github href={"https://www.mfgautosys.com/"} header={"Manufacturing Automation Systems"} />
        </div>
    )
}

export default Professional;
