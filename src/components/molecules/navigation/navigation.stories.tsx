import React from "react";
import { withKnobs, array, select} from "@storybook/addon-knobs";


import Navigation  from "./navigation";


import knobs from './navigation.knobs.json'
const { direction, items } = knobs;

export const horizontalNavigation = () => 
  <Navigation 
  direction={
    select(
      direction.label,
      direction.options,
      direction.default,
      direction.group)
    }
    
    items={array(items.label, items.default, items.group)}
      >
    
    </Navigation>;
export const verticalNavigation = () => 
<Navigation 
  direction={
    select(
      direction.label,
      direction.options,
      direction.default,
      direction.group)}
      items={array(items.label, items.default, items.group)}
      >
    
    </Navigation>;

export default {
    title: "Molecules|Navigation",
    decorators: [withKnobs]
}