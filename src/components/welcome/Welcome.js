import React from 'react';
import styles from './Welcome.module.scss';
import PropTypes from 'prop-types';

/**
 * @name Welcome
 * @description This is the welcome card component.
 * @param {string}
 * @returns {JSX.Element}
 */

const Welcome = ({firstName}) => {
   console.log({firstName})
    return <div className={styles.welcome_container}>
                <h1>Bonjour <span>{firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
            </div>
}

Welcome.propTypes = {
    firstName: PropTypes.string.isRequired
}
 
export default Welcome;
