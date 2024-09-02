import React from "react";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";
import Paragraph from "../../components/paragraph";

function About() {
    return (
        <div className="base">
            <h1>About</h1>
            <Github href={"https://github.com/vincentcordes/react-portfolio"} />
            <Paragraph header={"Motivation"}
                str={[
                    `To start with, it's better to have a portfolio and not need it, than to not have a portfolio and need it.`,
                    `I wanted a place to showcase some skills, while also giving myself easy access to tools I might build.`,
                    `This is also a convient way to get some React practice in. My "9 to 5" so to speak has me working primarily
                     on Windows desktop applications using C# with WPF.`,
                ]} />

            <Paragraph header={"How is this site built?"}
                str={[
                    `Its a React app using Java Script running on a Digital Ocean droplet, 
                     nothing too complicated on the server end of it. Just Debian and with Nginx.`,
                ]} />

            <Paragraph header={"Why are some things not complete or sparse?"}
                str={[
                    `In typical week I spend 40 to 50 hours writing code for work. I really enjoy writing code and building applications,
                    but there are other things to do that I also enjoy.`,
                    `When it comes to personal projects and free time I tend to let whatever I'm interested in take the lead. An example
                    of this is my recent dive into the Godot game engine and analyzing its feasibility outside of games.`,
                    `Those things being said, this particular app gets time as inspiration and motivation comes along.`,
                ]} />

        </div>
    );
}

export default About;