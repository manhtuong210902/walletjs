import React from "react";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    const editorExtensionId = "fmkddenedjmgknaomfhkhabajjjldhia";
    const handleClick = () => {
        console.log("click connect");

        chrome.runtime.sendMessage(editorExtensionId, { type: "open_popup" }, function (response) {
            if (!response.success) console.log("error");
        });
    };

    return <button onClick={handleClick}>{props.label}</button>;
};

export default Button;
