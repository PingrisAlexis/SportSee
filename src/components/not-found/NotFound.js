import React, { Component } from 'react';
import styles from "./NotFound.module.scss";
import {NavLink} from "react-router-dom";

export default class NotFound extends Component {
    render() {
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
}