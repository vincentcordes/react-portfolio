import React from "react";
import { Outlet } from "react-router-dom";
import Card from "../../components/card";
import "../../assets/styles/basestyles.css"

function Apps() {
    return (
        <div className="base">
            <p className="paragraphcentered">A collection of applications built using React. Everything here can be run directly in the browser.</p>
            <div className="base-container">
                <Card header={"Unscrambler"}
                    link={"/apps/unscrambler"}
                    imgPath={"unscrambler.png"}
                    summary={"A letter unscrambler. Able to find all of the english words that can be built from a set of letters."} />
                <Card header={"FF Party Gen"}
                    link={"/apps/ffpartygen"}
                    imgPath={""}
                    summary={"A random party generator for Final Fantasy."} />
            </div>
            <Outlet />
        </div>
    )
}

export default Apps;