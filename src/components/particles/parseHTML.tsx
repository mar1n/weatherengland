import Parser from "html-react-parser";

const config = {};

export const ParseHTML = (html: any) => {
	const clean = Parser(html, config);
	return clean;
};

export default ParseHTML;