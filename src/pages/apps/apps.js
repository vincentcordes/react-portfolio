import React from "react";
import { Outlet } from "react-router-dom";
import Card from "../../components/card";
import "../../assets/styles/basestyles.css"
import Paragraph from "../../components/paragraph";

function Apps() {
    return (
        <div className="base">
            {/* <p className="paragraphcentered">A collection of applications built using React. Everything here can be run directly in the browser.</p> */}
            <Paragraph
                header={"Apps"}
                str={
                    ["A collection of applications built using React. Everything here can be run directly in the browser."]
                } />
            <div className="base-container">
                <Card header={"Unscrambler"}
                    link={"/apps/unscrambler"}
                    imgPath={"unscrambler.png"}
                    summary={"A letter unscrambler. Able to find all of the english words that can be built from a set of letters."} />
                <Card header={"FF Party Gen"}
                    link={"/apps/ffpartygen"}
                    imgPath={"ffpartygen.png"}
                    summary={"A random party generator for Final Fantasy."} />
                {/* <Card header={"Calculator"}
                    link={"/apps/calculator"}
                    imgPath={""}
                    summary={"A basic calculator"} /> */}
            </div>
            <Outlet />
        </div>
    )
}

export default Apps;