import React from "react";
import StyledNavigation from "./navigation.styles";

import IconPlus from "../../../../assets/images/icons/plus.svg";
import IconBag from "../../../../assets/images/icons/shopping-bag.svg";
import IconCart from "../../../../assets/images/icons/shopping-cart.svg";
import IconUser from "../../../../assets/images/icons/user.svg";
import IconX from "../../../../assets/images/icons/x.svg";

const Icons ={
    bag: IconBag,
    cart: IconCart,
    plus: IconPlus,
    user: IconUser,
    x: IconX,
}
interface NavigationProps {
    direction?: string;
    icon?: string;
    items: any;
}

interface NavigationIconsProps {
    name: string;
    title: string;
}

const Navigation: React.FC<NavigationProps> = ({ direction, items }) => 
    <StyledNavigation direction={direction}>
        {items.map((item: {title: string, url: string, icon: string}, index: number) => (
            <a href={item.url}>
            {item.icon ? (
                <NavigationIcon name={item.icon} title={item.title} />
            ) : (
                item.title
            )}
        </a>
        ))}
    </StyledNavigation>

const NavigationIcon: React.FC<NavigationIconsProps> = ({name, title}) => {
    if(Icons[name] === undefined) return null;
    const Icon = Icons[name];

    return (
        <span className="navigation__icon">
        {title && <span className="hidden">{title}</span>}
        <Icon />
        </span>
    )
}

Navigation.defaultProps = {
	direction: "horizontal",
	items: []
};
export default Navigation;