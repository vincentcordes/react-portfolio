import React from "react";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";
import Paragraph from "../../components/paragraph";

function About() {
    return (
        <div className="base">
            <h1>About</h1>
            <Github header={"Github"} href={"https://github.com/vincentcordes/react-portfolio"} />
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
                     nothing too complicated on the server end of it. Just Debian and Nginx.`,
                    `One of my favorite things about this portfolio is the cost. I was able to pick up the domain
                    name on sale from Namecheap for something like $3.00 and the droplet gives me 1GB of ram with 1 virtual CPU
                    for $6.00 a month. I think that's a pretty sweet deal for a platform I can customize.`,
                    `It's http instead of https because I didn't want to shell out the extra money. That being the case
                    it isn't likely that I will ever add downloads here since no one in their right mind would use them anyway.`,
                    `In the future I will likely add an API that lives on this server and interacts with the app. The plan at
                    this point is to use Rust and sqlite to keep the resource requirements to a minimum.`,
                ]} />

            <Paragraph header={"Why are some things not complete or sparse?"}
                str={[
                    `In typical week I spend 40 to 50 hours writing code for work. I really enjoy writing code and building applications,
                    but there are other things to do. Some that I enjoy and some that just need to be done.`,
                    `When it comes to personal projects and free time I tend to let whatever I'm interested in take the lead. An example
                    of this is my recent dive into the Godot game engine and analyzing its feasibility outside of games.`,
                    `Those things being said, this particular app gets time as inspiration and motivation comes along.`,
                ]} />

        </div>
    );
}

export default About;