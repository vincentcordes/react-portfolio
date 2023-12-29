import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/card.css";
import image from "../assets/images/demo.png";

function Card({ header, link, imgPath, summary }) {
    const images = require.context("../assets/images/apps", true);
    let image = "";
    if (imgPath.length > 3) {
        image = images(`./${imgPath}`);
    }

    return (
        <div className="card">
            <h3 className="card-header">{header}</h3>
            <NavLink className="card-navlink"
                to={link}>
                <div className="card-inner">
                    <img className="card-image"
                        src={image}
                        alt=""
                    />
                    <p className="card-text">{summary}</p>
                </div>
            </NavLink>
        </div>
    )

}

export default Card;