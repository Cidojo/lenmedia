import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/image/logo.svg';
import { Navigation } from './navigation';
import styles from './header.module.scss';

export const Header = () => (
	<header className={styles.header}>
		<div className={styles.header__logo}>
			<Link to="/">
				<Logo title="logo" />
			</Link>
		</div>
		<Navigation className={styles.header__navigation} />
	</header>
);
