import React from "react";
import Github from "../../components/github";
import "../../assets/styles/basestyles.css";

function Contact() {
    return (
        <div className="base">
            <h1>vmcordes@protonmail.com</h1>
            <Github href={"https://github.com/vincentcordes"} />
            <h2>Resume on email request</h2>
        </div>
    );
}

export default Contact;