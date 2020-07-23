import React, { ReactNode } from "react";
import StyledButton, { StyledLinkButton } from "./button.styles";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    variant?: string;
}
const Button: React.FC<ButtonProps> = ({ children, href, onClick, variant }) => {
    if(!href) return <StyledButton onClick={onClick} variant={variant}>{children}</StyledButton>;
    return <StyledLinkButton href={href} variant={variant} >{children}</StyledLinkButton>
};

Button.defaultProps = {
	children: "Button text",
	variant: "primary"
};
export default Button;