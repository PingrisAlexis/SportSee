import React, {useEffect, useState} from 'react';
import styles from './DailyKeyCard.module.scss';
import {Mock} from "../../services/mock";

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
export default DailyKeyCard