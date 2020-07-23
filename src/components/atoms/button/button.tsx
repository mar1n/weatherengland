import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}
const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => {
    if(!href) return <button onClick={onClick}>{children}</button>;
    return <a href={href}>{children}</a>
};

export default Button;