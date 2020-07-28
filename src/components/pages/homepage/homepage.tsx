import React from "react"

import Banner from "../../organisms/banner/banner"
import Carousel from "../../organisms/carousel/carousel"
import Footer from "../../organisms/footer/footer"
import Header from "../../organisms/header/header"

interface HomepageProps {
    banner: any;
    carousel: any;
    footer: any;
    header: any;
}
const Homepage: React.FC<HomepageProps> = ({ banner, carousel, footer, header }) => (
  <>
    <Header {...header} />
    <Banner {...banner} />
    <Carousel {...carousel} />
    <Footer {...footer} />
  </>
)
export default Homepage