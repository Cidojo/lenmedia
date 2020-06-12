import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { CloseButton } from './parts/close-button';
import { useOnClickOutside, useBodyScrollLock } from '../hooks';
import styles from './navigation.module.scss'

import { navListData } from '../mock-data'

export const Navigation = ({ className }) => {
	const [isActive, setIsActive] = useState(false);
	const sideBarRef = useRef(null);

	useBodyScrollLock(isActive);
	useOnClickOutside(sideBarRef, () => setIsActive(false));

	return (
		<div className={classNames(styles.navigation, className)}>
			<button type="button" className={styles.navigation__hamburger} onClick={() => setIsActive(true)}>
				<i className="visually-hidden">open menu</i>
				<span/>
				<span/>
				<span/>
			</button>
			<aside className={classNames(styles.navigation__sidebar, { [styles['navigation__sidebar--active']]: isActive })}>
				<nav className={styles.navigation__inner} ref={sideBarRef}>
					<CloseButton
						className={styles.navigation__close}
						onClose={() => setIsActive(false)}
					/>
					<ul>
						{navListData.map(({ slug, label }, idx) => (
							// eslint-disable-next-line react/no-array-index-key
							<li key={idx}>
								<Link to={slug} >
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</div>
	);
};

Navigation.defaultProps = {
	className: ''
};

Navigation.propTypes = {
	className: PropTypes.string
};
