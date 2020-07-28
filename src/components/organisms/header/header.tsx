import React, { useState } from "react";
import StyledHeader from "./header.styles";
import Navigation from "../../molecules/navigation/navigation";
import Button from "../../atoms/button/button";
import Logo from "../../../../assets/images/logo.png";

interface HeaderProps {
  navigation?: any;
}

interface Navigationtype {
    title: string; 
    items: { title: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const toggleMenu = (e: any) => {
		e.preventDefault();
		setOpen(!isOpen);
	};

	return (
		<StyledHeader className={isOpen ? `header--open` : `header--closed`}>
			<div className="header__navigation">
				{navigation.length > 0 &&
					navigation.map(({ items, title }: Navigationtype) => (
						<Navigation items={items} key={`header-menu-${title}`} />
					))}
			</div>
			<img src={Logo} alt="Celtic Elements Logo" />
			<Button onClick={toggleMenu}>{isOpen ? `Hide` : `Show`} menu</Button>
		</StyledHeader>
	);
};

Header.defaultProps = {
  navigation: [],
};
export default Header;
