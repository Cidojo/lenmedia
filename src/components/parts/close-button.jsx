import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './close-button.module.scss';

export const CloseButton = ({ onClose, className }) => (
	<button type="button" onClick={onClose} className={classNames(styles.closeButton, className)}>
		<span className="visually-hidden">Close</span>
	</button>
);

CloseButton.defaultProps = {
	className: ''
};

CloseButton.propTypes = {
	onClose: PropTypes.func.isRequired,
	className: PropTypes.string
};
