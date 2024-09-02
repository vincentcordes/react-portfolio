import React from "react";
import "../assets/styles/standardimage.css";

function StandardImage({ images, imagePath }) {
    let image = "";
    if (imagePath.length > 3) {
        image = images(`./${imagePath}`);
    }

    return (
        <div className="standardimage">
            <img className="standardimage-image"
                src={image}
                alt="" />
        </div>
    )
}

export default StandardImage;