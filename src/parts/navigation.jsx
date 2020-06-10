import React from "react"
import { Link } from "react-router-dom"
import { navListData } from "../mock-data/nav-list"
import styles from "./navigation.module.scss"

export const Navigation = () => (
    <div className={styles.navigation}>
        <nav className={styles.navigation__inner}>
            {navListData.map(({ slug, label }, idx) => (
            // eslint-disable-next-line react/no-array-index-key
                <Link to={slug} key={idx}>
                    {label}
                </Link>
        ))}
        </nav>
    </div>
);
