import React from "react";
import { withKnobs,  text } from "@storybook/addon-knobs";
import { withDesign } from 'storybook-addon-designs'



import knobs from './link.knobs.json'
const { innerText } = knobs;

const buttonClicked = (e: any) => {
    e.preventDefault();
    alert('Hello');
}

export const basicLink = () => (
<a href="#">{text(innerText.label, innerText.default, innerText.group)}</a>
);

export default {
    title: "Atoms|Link",
    decorators: [withKnobs]
}