/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Headline, Review } from './parts';
import styles from './reviews.module.scss';

export const Reviews = ({ reviews }) => (
	<section className={styles.reviews}>
		<Headline priority={3} title="Отзывы наших покупателей" className={styles.reviews__headline} />
		<ul className={styles.reviews__list}>
			{reviews.map((review, idx) => (
				<li key={idx}>
					<Review
						review={review}
					/>
				</li>

			))}
		</ul>
	</section>
);

Reviews.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string,
			author: PropTypes.string,
			content: PropTypes.string,
			slug: PropTypes.string
		})
	).isRequired
};
