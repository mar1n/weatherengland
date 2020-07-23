import React from "react";
import Button  from "./button";

const buttonClicked = (e: any) => {
    e.preventDefault();
    alert('Hello');
}

export const basicButton = () => <Button>Basic button</Button>;

export const functionButton = () => (
    <Button onClick={buttonClicked}>Funtion button</Button>
)

export const linkedButton = () => <Button href="/route"> Linked Button</Button>;

export default {
    title: "Button"
}