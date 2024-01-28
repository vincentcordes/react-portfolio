import React, { useState } from "react";
import { randomInteger } from "../../../utils/random";
import ButtonOne from "../../../components/buttonone";
import FF1job from "./ff1job";
import Modal from "../../../components/modal";
import ModalButton from "../../../components/modalbutton";
import Paragraph from "../../../components/paragraph";
import "../../../assets/styles/basestyles.css";
import "../../../assets/styles/partygen.css";

function FFPartyGen() {
    const [isOpen, setIsOpen] = useState(false);
    const [party, setParty] = React.useState(buildParty());
    const rollHandler = () => {
        setParty(buildParty());
    }

    return (
        <div className="base">
            <Modal onClose={() => setIsOpen(false)}
                open={isOpen}
            >
                <Paragraph
                    header={"Motivation"}
                    str={[
                        "I'm a pretty big Final Fantasy nerd typically play through FF1 a few times a year. Using a randomized party can add a fun level of challenge to a run."
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Usage"}
                    str={[
                        "Press the 'Roll' button to generate a random party.",
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Fun Facts"}
                    str={[
                        "Here I've gone for a retro look with sprites from the pixel remaster version.",
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Credits"}
                    str={[]}
                    children={<p className="paragraph-p">The font "Final-Fantasy" is by David at: <a href="https://www.dafont.com/david-fens.d5063" target="_blank" rel="noreferrer">https://www.dafont.com/david-fens.d5063</a></p>}
                />
            </Modal>

            <div className="base-inline">
                <h1>Final Fantasy Party Generator</h1>
                <ModalButton onClick={() => setIsOpen(true)} />
            </div>
            <ButtonOne onClick={rollHandler}
                text={"roll"}
            />
            <div className="party-container">
                <FF1job value={party[0]} />
                <FF1job value={party[1]} />
                <FF1job value={party[2]} />
                <FF1job value={party[3]} />
            </div>

        </div>
    );
}

function buildParty() {
    return [
        randomInteger(1, 6),
        randomInteger(1, 6),
        randomInteger(1, 6),
        randomInteger(1, 6),
    ];
}

export default FFPartyGen;