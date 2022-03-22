import React from 'react';
import styles from './DailyKeyCard.module.scss';

/**
 * @name DailyKeyCard
 * @description This component will render daily key cards.
 * @returns {JSX.Element}
 */

const DailyKeyCard = (props) => {
    const {name, content, unity, icon} = props;

    return   <>
                <figure className={styles.daily_key_card_container}>
                    <img src={icon} alt=""/>
                    <figcaption>
                        <span>{content} {unity} </span>
                        <h3>{name}</h3>
                    </figcaption>
                </figure>
    </>
}
export default DailyKeyCard;