import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './input';


export default {
    title: 'Atoms|Input',
  };
export const Search = () => <Input onTextChange={action("changed")} text="text" />
// storiesOf("Input Search", module)
//     .add("text", () => <Input onTextChange={action("changed")} text="text" />)
// export const search = () => <Input text="xxx" />;


