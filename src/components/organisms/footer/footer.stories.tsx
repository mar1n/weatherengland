import React from "react";
import { withKnobs, array} from "@storybook/addon-knobs";


import Footer  from "./footer";


import knobs from './footer.knobs.json'
const { menus } = knobs;

export const standardFooter = () => (
  <Footer menus={array(menus.label, menus.default, menus.group)} />
)

export default {
    title: "Organisms|Footer",
    decorators: [withKnobs]
}