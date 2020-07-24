import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Button  from "./button";

const buttonClicked = (e: any) => {
    e.preventDefault();
    alert('Hello');
}

export const basicButton = () => <Button>{text("Button text", "Basic button")}</Button>;
export const iconButton = () => <Button icon="user">Icon button</Button>;
export const secondaryButton = () => (
	<Button variant="secondary">Secondary button</Button>
);
export const tertiaryButton = () => (
	<Button variant="tertiary">Tertiary button</Button>
);
export const functionButton = () => (
	<Button onClick={buttonClicked}>Function button</Button>
);
export const linkedButton = () => <Button href="/route">Linked button</Button>;

export default {
    title: "Button",
    decorators: [withKnobs]
}