import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './headline.module.scss';

export const Headline = ({ title, align, priority, className, underlined }) => {
	const HTag = `h${priority}`;

	return (
		<HTag align={align} className={classNames(styles.headline, className)}>
			{title}
			{underlined && <span/>}
		</HTag>
	);
};

Headline.defaultProps = {
	align: 'center',
	className: '',
	underlined: false
};

Headline.propTypes = {
	title: PropTypes.string.isRequired,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	priority: PropTypes.number.isRequired,
	className: PropTypes.string,
	underlined: PropTypes.bool
};
