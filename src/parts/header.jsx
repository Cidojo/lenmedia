import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/image/logo.svg';
import styles from './header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <Link to="/">
            <Logo title="logo" />
        </Link>
    </header>
);
