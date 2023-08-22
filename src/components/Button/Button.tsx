import React from "react";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    const handleClick = () => {
        console.log("click");
    };

    return <button onClick={handleClick}>{props.label}</button>;
};

export default Button;
