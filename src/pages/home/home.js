import React from "react";
import Paragraph from "../../components/paragraph";
import '../../assets/styles/home.css'

function Home() {
    return (
        <div className="home">
            <h1>About myself</h1>
            <Paragraph
                str={`Hello there, and welcome! I'm Vinny, a software engineer with more than six years 
                     of profesional experience developing applications in C#. My free time is spent learning
                     a wide range technologies, everything from Rust to React.
                     Currently I am looking to experience more of the development world
                     outside of industrial automation.
                     `}
            />
            <div className="container">
                <h2 className="header2">Site Overview</h2>
                <p className="home-paragraph">Home - Where you are now.</p>
                <p className="home-paragraph">Apps - Things that can be enjoyed and run directly on this site.</p>
                <p className="home-paragraph">Projects - Professional experence and other projects I have worked on.</p>
                <p className="home-paragraph">About - A breakdown of this site, how it was built along with the motivation.</p>
                <p className="home-paragraph">Contact - How to get ahold of me and and resume.</p>
            </div>

            <Paragraph
                str={`This site is likely to change frequently so check back once and again
                     to see what is new.`}
            />
        </div>
    );
}

export default Home;