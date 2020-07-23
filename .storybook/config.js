import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import themeDefault from "../src/components/particles/themeDefault";
import GlobalStyles from "../src/components/particles/globalStyles";


const GlobalWrapper = (storyFn) => 
<ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
</ThemeProvider>;

addDecorator(GlobalWrapper);
