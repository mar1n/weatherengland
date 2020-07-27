import React from "react";
import { array, object, shape, string, arrayOf } from "prop-types";

import StyledRelated from "./related.styles";

import ParseHTML from "../../particles/parseHTML";

import Intro from "../../molecules/intro/intro";

interface RelatedProps {
	intro: any;
	items: string[];
	variant: string;
}

const Related: React.FC<RelatedProps> = ({ intro, items, variant }) => {
	if (!items) return null;
	if (!items.length) return null;
	return (
		<StyledRelated className="related" variant={variant}>
			<div className="related__contents">
				<Intro {...intro} />
				<div className="related__items">
					{items.map((item: any) => (
						<RelatedItem {...item} />
					))}
				</div>
			</div>
		</StyledRelated>
	);
};


Related.defaultProps = {
	items: [],
	variant: "posts"
};

interface RelatedItemProps {
	category: { href: string; label: string; };
	description: string;
	image: string | undefined;
	slug: string;
	title: string;
}

const RelatedItem: React.FC<RelatedItemProps> = ({
	category,
	description,
	image,
	slug,
	title
}) => (
	<div className="related-item">
		{image && slug && (
			<a href={`/${slug}`}>
				<div className="related-item__image">
					<img src={image} alt={title} />
				</div>
			</a>
		)}
		{category && category.href && category.label && (
			<h4 className="related-item__subtitle">
				<a href={category.href}>{category.label}</a>
			</h4>
		)}
		<h3 className="related-item__title">
			<a href={`/${slug}`}>{title}</a>
		</h3>
		<div className="related-item__description">{ParseHTML(description)}</div>
		<a href="#">View article</a>
	</div>
);

export default Related;