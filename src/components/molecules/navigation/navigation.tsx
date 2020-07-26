import React from "react";
import StyledNavigation from "./navigation.styles";

interface NavigationProps {
    direction: string;
    items: string[];
}

const Navigation: React.FC<NavigationProps> = ({ direction, items }) => 
    <StyledNavigation direction={direction}>
        {items.map((item: { title: string; url: string; }, index: number) => (
            <a href={item.url} key={index}>{item.title}</a>
        ))}
    </StyledNavigation>

Navigation.defaultProps = {
	direction: "horizontal",
	items: []
};
export default Navigation;