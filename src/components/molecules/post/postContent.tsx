import React from "react";

import StyledPostContent from "./postContent.styles";

import ParseHTML from "../../particles/parseHTML";

interface PostContent {
    content: string;
}

const PostContent: React.FC<PostContent> = ({ content }) => (
	<StyledPostContent>{ParseHTML(content)}</StyledPostContent>
);

export default PostContent;