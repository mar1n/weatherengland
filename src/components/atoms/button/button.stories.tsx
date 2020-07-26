import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from 'storybook-addon-designs'


import Button  from "./button";


import knobs from './button.knobs.json'
const { icon } = knobs;

const buttonClicked = (e: any) => {
    e.preventDefault();
    alert('Hello');
}

export const basicButton = () => <Button>Basic button</Button>;
export const iconButton = () => 
<Button icon="bag">
    Icon Button</Button>;
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

basicButton.story = {
    name: 'My awesome story',
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
      },
    },
  }

export default {
    title: "Atoms|Button",
    decorators: [withDesign]
}