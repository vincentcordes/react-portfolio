import React, { useState } from "react";
import Modal from "../../components/modal";
import ModalButton from "../../components/modalbutton";
import Paragraph from "../../components/paragraph";
import Github from "../../components/github";
import StandardImage from "../../components/standardimage";

import "../../assets/styles/basestyles.css";

function Cmdlist() {
    const [isOpen, setIsOpen] = useState(false);
    const images = require.context("../../assets/images/projects", true);
    return (

        <div className="base">
            <Modal onClose={() => setIsOpen(false)}
                open={isOpen}
            >
                <Paragraph
                    header={"Motivation"}
                    str={[
                        `This app was inspired by the 'exec' command. I had been tinkering around in a linux vm and needed to reload the shell.
                        Sure enough 30 minutes later I needed to reload the shell again and had to look up the command a second time.
                        `
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Fun Facts"}
                    str={["This is the first app I built using Rust that I can call an app.",
                    ]}
                    children={[]}
                />
            </Modal>
            <div className="base-inline">
                <h1>Cmdlist</h1>
                <ModalButton onClick={() => setIsOpen(true)} />
            </div>
            <Github href={"https://github.com/vincentcordes/cmdlist"} />
            <Paragraph header={"Purpose"}
                str={[
                    "cmdlist is a cross platform (Windows & Linux) command line application that builds a custom list of commands for user reference.",
                    "This is helpful for commands that are infrequently used and easily forgotten.",
                    "Each command added comes with four fields, The command (name) a description, examples, and 'gotchas'.",
                    "The commands added to cmdlist can be searched by any of the fields."
                ]} />
            <Paragraph header={"How it was built."} str={["Rust with a few common crates, notably serde, colors, and anyhow."]} />
            <StandardImage
                images={images}
                imagePath={"cmdlist_01.png"} />
            <Paragraph header={"Default"} str={["By default cmdlist will print every entry to the shell's standard output."]} />
            <StandardImage
                images={images}
                imagePath={"cmdlist_00.png"} />
            <Paragraph header={"Search"} str={["To search for a command use the -q argument followed by a query string."]} />
            <StandardImage
                images={images}
                imagePath={"cmdlist_02.png"} />
            <Paragraph header={"Add a new entry"} str={["To add a new command use the -a argument set to true and follow the prompts."]} />
            <StandardImage
                images={images}
                imagePath={"cmdlist_03.png"} />
            <StandardImage
                images={images}
                imagePath={"cmdlist_04.png"} />
        </div>
    )
}

export default Cmdlist;