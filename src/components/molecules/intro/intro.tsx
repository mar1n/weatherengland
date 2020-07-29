import React from "react";

import StyledIntro from "./intro.styles";
interface IntroProps {
  text: string;
  title: string;
  subtitle: string;
  cta: any;
}
const Intro: React.FC<IntroProps> = ({ cta, subtitle, text, title }) => (
  <StyledIntro className="intro">
    <div className="intro__contents">
      {subtitle && <h3 className="intro__subtitle">{subtitle}</h3>}
      {title && <h2 className="intro__title">{title}</h2>}
      {text && <p className="intro__text">{text}</p>}
      {cta && (
        <a className="intro__cta" href={cta.href} target={cta.target}>
          {cta.label}
        </a>
      )}
    </div>
  </StyledIntro>
);

export default Intro;
