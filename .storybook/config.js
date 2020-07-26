import React from "react";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import themeDefault from "../src/components/particles/themeDefault";
import GlobalStyles from "../src/components/particles/globalStyles";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";



//configure(require.context("../src/components", true, /\.stories\.tsx$/), module);

const GlobalWrapper = (storyFn) => 
<ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
</ThemeProvider>;

addDecorator(GlobalWrapper);

addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage
	}
});
