import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Input from './input';

storiesOf("Input Search", module)
    .add("text", () => <Input onTextChange={action("changed")} text="text" />)
// export const search = () => <Input text="xxx" />;


