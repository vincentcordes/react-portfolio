import React, { useState } from "react";
import Paragraph from "../../components/paragraph";
import Modal from "../../components/modal";
import ModalButton from "../../components/modalbutton";
import "../../assets/styles/modal.css";
import '../../assets/styles/home.css';
import '../../assets/styles/paragraph.css';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="home">
            <Modal onClose={() => setIsOpen(false)}
                open={isOpen}
                locked={false}
                children={null}
            >
                <p>
                    Visit the About page for more informaiton about this site.
                </p>
            </Modal>

            <Paragraph
                header={"About Myself"}
                str={
                    [
                        `Hello there and welcome. I'm Vinny, a software engineer with more than seven years
                     of profesional experience developing applications. Most of that time has been spent working
                     in C#. While C# is my primary language, I've been fortunate enough to work on projects that
                     have required C++, Visual Basic, Java Script, Python, and even Rust. Currently I am looking
                     to experience more of the development world outside of industrial automation.
                     `]
                }
            />
            <Paragraph
                header={"Site Overview"}
                str={
                    [
                        "Home - Where you are now.",
                        "Apps - Things that can be enjoyed and run directly on this site.",
                        "Projects - Professional experence and other projects I have worked on.",
                        "About - A breakdown of this site, how it was built along with the motivation.",
                        "Contact - How to get ahold of me and and resume.",
                    ]
                }
                children={<div className="home-inline">
                    <p className="paragraph-p">Whenever available, click this icon for more informaiton:</p>
                    <ModalButton onClick={() => setIsOpen(true)} />
                </div>}
            />

            <Paragraph
                header={"Memo"}
                str={[`This site is likely to change frequently so check back once and again
                     to see what is new.`]}
            />
        </div>
    );
}

export default Home;