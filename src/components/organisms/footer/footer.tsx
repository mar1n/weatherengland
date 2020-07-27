import React from "react";
import StyledFooter from "./footer.styles";
import Navigation from "../../molecules/navigation/navigation";

interface FooterProps {
  menus: any;
}

interface Menus {
    title: string; 
    items: { title: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ menus }) => (
  <StyledFooter>
    {menus.map(
      ({items, title}: Menus) => (
        <div className="footer__navigation" key={`footer-nav-${title}`}>
						{title && <h3 className="footer__heading">{title}</h3>}
						<Navigation direction="vertical" items={items} />
					</div>
      )
    )}
    <div className="footer__newsletter">
      <h4 className="footer__heading">Join our newsletter</h4>
      <p>We will send you updates on new products and discounts.</p>
    </div>
    <nav className="footer__copyright">
      <p>Copyright &copy; Celtic Elements {new Date().getFullYear()}</p>
      <a
        href="https://portfolio.cykcykacz.now.sh/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Website by Szymon Dawidowicz
      </a>
    </nav>
  </StyledFooter>
);

Footer.defaultProps = {
  menus: [],
};
export default Footer;
