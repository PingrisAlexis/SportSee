import React from 'react';
import styles from './DailyKeyCard.module.scss';
import PropTypes from "prop-types";

/**
 * @name DailyKeyCard
 * @description This component will render daily key cards.
 * @param {string} name
 * @param {number} content
 * @param {string} unity
 * @param {string} icon
 * @returns {JSX.Element}
 */

const DailyKeyCard = ({name, content, unity, icon}) => {

    return   <figure className={styles.daily_key_card_container}>
                <img src={icon} alt=""/>
                <figcaption>
                    <span>{content} {unity} </span>
                    <h3>{name}</h3>
                </figcaption>
            </figure>
};

DailyKeyCard.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
    unity: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default DailyKeyCard;