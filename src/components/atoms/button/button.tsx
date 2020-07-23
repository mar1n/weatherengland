import React, { ReactNode } from "react";
import StyledButton, { StyledLinkButton } from "./button.styles";

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
interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    variant?: string;
    icon?: string;
}
interface IconProps {
    name: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, onClick, icon, variant }) => {
    if(!href) return (
    <StyledButton onClick={onClick} variant={variant}>
        { icon && <ButtonIcon name={icon} />}
        {children}
    </StyledButton>);
    return (
    <StyledLinkButton href={href} variant={variant} >
        { icon && <ButtonIcon name={icon} />}
        {children}
        </StyledLinkButton>)
};

const ButtonIcon: React.FC<IconProps> = ({ name }) => {
    if(Icons[name] === undefined) return null;

    const Icon = Icons[name];
    return(
        <span className="button__icon">
            <Icon />
        </span>
    )
}

Button.defaultProps = {
	children: "Button text",
	variant: "primary"
};
export default Button;