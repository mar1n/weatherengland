import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import Button  from "./button";


import knobs from './button.knobs.json'
const { icon } = knobs;

const buttonClicked = (e: any) => {
    e.preventDefault();
    alert('Hello');
}

export const basicButton = () => <Button>{text("Button text", "Basic button")}</Button>;
export const iconButton = () => <Button icon={select(icon.label, icon.options, icon.default, icon.group)}>{text("Others", "Icon button")}</Button>;
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