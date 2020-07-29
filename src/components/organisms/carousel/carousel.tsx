import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SyledCarousel, { SyledCarouselItem } from "./carousel.styles";

import ParseHTML from "../../particles/parseHTML";

import Intro from "../../molecules/intro/intro";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CarouselProps {
  intro: any;
  items: string[];
  type?: string;
}

const Carousel: React.FC<CarouselProps> = ({ intro, items, type }) => {
  if (!items) return null;
  if (!items.length) return null;
  items = [...items, ...items];
  return (
    <SyledCarousel className="carousel" type={type}>
      {intro && <Intro {...intro} />}
      <Slider className="carousel__slider" {...settings}>
        {items.map(
          (item, index) =>
            type && <CarouselItem {...item} index={index} type={type} />
        )}
      </Slider>
    </SyledCarousel>
  );
};
interface CarouselItemProps {
  category?: { label: string };
  description?: string;
  image?: string;
  index: number;
  productCategories?: string;
  shortDescription?: string;
  slug?: string;
  title?: string;
  type: string;
}
const CarouselItem: React.FC<CarouselItemProps> = ({
  category,
  description,
  image,
  index,
  productCategories,
  shortDescription,
  slug,
  title,
  type,
}) => (
  <SyledCarouselItem className="carousel__item" index={index} type={type}>
    {image && slug && (
      <a href={`/${slug}`}>
        <div className="carousel__item__image">
          <img src={image} alt={title} />
        </div>
      </a>
    )}
    {category && category.label && (
      <h4 className="carousel__item__subtitle">{category.label}</h4>
    )}
    {title && (
      <a href={`/${slug}`}>
        <h3 className="carousel__item__title">{title}</h3>
      </a>
    )}
    <div className="carousel__item__description">{ParseHTML(description)}</div>
  </SyledCarouselItem>
);

export default Carousel;
