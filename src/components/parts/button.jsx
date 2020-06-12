import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

export const Button = ({ className, label, onClick}) => (
	<button className={classNames(styles.button, className)} type="button" onClick={onClick}>
		{label}
	</button>
);

Button.defaultProps = {
	onClick: () => {},
	className: ''
};

Button.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string.isRequired,
	className: PropTypes.string
};
