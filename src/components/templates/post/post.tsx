import React from "react";
import StyledPost from "./post.styles";

import Banner from "../../organisms/banner/banner";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import Related from "../../organisms/related/related";
import PostContent from "../../molecules/post/postContent";
interface PostTemplateProps {
    banner: {content: string; title: string; variant: string; cta: any;};
    content: string;
    footer: { menus: { title: string; items: { title: string; url: string; }[]; }[]; };
    header: object;
    related: {intro: any; items: any; };
}
const PostTemplate: React.FC<PostTemplateProps> = ({ banner, content, footer, header, related }) => 
    <StyledPost>
        <Header {...header} />
        <PostContent content={content} />
        <Banner {...banner} />
		<Related {...related} />
		<Footer {...footer} />
    </StyledPost>

export default PostTemplate;