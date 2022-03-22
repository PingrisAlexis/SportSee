import React from 'react';
import styles from './NotFound.module.scss';
import {NavLink} from 'react-router-dom';

/**
 * @name NotFound
 * @description This is the error 404 page.
 * @returns {JSX.Element}
 */

const NotFound = () => {

        return (
            <main className={styles.NotFound_container}>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/" className={styles.nav_link}>
                    Retourner sur la page d'accueil
                </NavLink>
            </main>
        );
}
export default NotFound;