import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headline } from './headline';
import styles from './review.module.scss';

export const Review = ({ review }) => {
	const {avatar, author, content, slug } = review;

	return (
		<Link to={slug} className={styles.review}>
			<img width={80} height={80} src={avatar} alt={author} />
			<Headline className={styles.review__author} title={author} align="left" priority={4} underlined />
			<p>{content}</p>
		</Link>
	);
};

Review.propTypes = {
	review: PropTypes.shape({
		avatar: PropTypes.string,
		author: PropTypes.string,
		content: PropTypes.string,
		slug: PropTypes.string
	}).isRequired
};
