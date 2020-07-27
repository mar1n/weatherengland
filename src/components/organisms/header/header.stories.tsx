import React from "react";
import { withKnobs, array} from "@storybook/addon-knobs";


import Footer  from "./header";


import knobs from './header.knobs.json'
const { navigation } = knobs;

export const standardFooter = () => (
  <Footer navigation={array(navigation.label, navigation.default, navigation.group)} />
)

export default {
    title: "Organisms|Header",
    decorators: [withKnobs]
}