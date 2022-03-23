import React, {useEffect, useState} from 'react';
import styles from './Welcome.module.scss';
import PropTypes from 'prop-types';

/**
 * @name Welcome
 * @description This is the welcome card component.
 * @param {string}
 * @returns {JSX.Element}
 */

const Welcome = ({ user }) => {
    console.log(user)
    return <div className={styles.welcome_container}>
                <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
            </div>
}

 Welcome.propTypes = {
    user: PropTypes.object
 }

export default Welcome;