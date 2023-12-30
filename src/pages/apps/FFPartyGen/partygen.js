import React, { useEffect } from "react";
import { randomInteger } from "../../../utils/random";
import ButtonOne from "../../../components/buttonone";
import FF1job from "./ff1job";
import "../../../assets/styles/basestyles.css";
import "../../../assets/styles/partygen.css";

function FFPartyGen() {
    const [party, setParty] = React.useState(buildParty());
    const rollHandler = () => {
        setParty(buildParty());
    }

    return (
        <div className="base">
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