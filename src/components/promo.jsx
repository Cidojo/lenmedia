import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import parser from 'html-react-parser';
import { Headline, Button } from './parts';
import styles from './promo.module.scss';

export const Promo = ({ title, className, content }) => {
	return (
		<section className={classNames(styles.promo, className)}>
			<div className={styles.promo__inner}>
				{title.length > 0 && (<Headline priority={2} title={title} underlined className={styles.promo__headline} />)}
			</div>
			<div className={styles.promo__content}>
				{content.map((line, idx) => (
					// eslint-disable-next-line react/no-array-index-key
					<p key={idx}>{parser(line)}</p>
				))}
			</div>
			<Button label="Купить продукт" className={styles.promo__buyButton} />
		</section>
	);
};

Promo.defaultProps = {
	className: '',
	title: ''
};

Promo.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	content: PropTypes.arrayOf(PropTypes.string).isRequired
};
