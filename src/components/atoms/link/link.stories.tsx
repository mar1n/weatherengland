import React from "react";
import { withKnobs,  text } from "@storybook/addon-knobs";

import knobs from './link.knobs.json'
const { innerText } = knobs;

export const basicLink = () => (
<a href="#">{text(innerText.label, innerText.default, innerText.group)}</a>
);

export default {
    title: "Atoms|Link",
    decorators: [withKnobs]
}