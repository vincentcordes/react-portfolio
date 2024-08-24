import React, { useState } from "react";
import Modal from "../../components/modal";
import ModalButton from "../../components/modalbutton";
import Paragraph from "../../components/paragraph";
import ComingSoon from "../../components/comingsoon";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";

function Cmdlist() {
    const [isOpen, setIsOpen] = useState(false);
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
            <ComingSoon />
        </div>
    )
}

export default Cmdlist;