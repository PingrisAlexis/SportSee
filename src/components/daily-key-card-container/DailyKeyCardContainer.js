import React, {useEffect, useState} from 'react';
import {DailyKeyCard} from '../index';
import {Api} from '../../services/api';
import {useParams} from 'react-router-dom';
import styles from './DailyKeyCardContainer.module.scss';
import calorie from '../../assets/calorie.svg';
import chicken from '../../assets/chicken.svg';
import apple from '../../assets/apple.svg';
import cheeseburger from '../../assets/cheeseburger.svg';


/**
 * @name DailyKeyCardContainer
 * @description This component is a container to the daily key cards for a specific user.
 * @returns {JSX.Element}
 */

const DailyKeyCardContainer = () => {
    const [dailyKeyCards, setDailyKeyCards] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const response  = await new Api().getUser(id)
            setDailyKeyCards(response.keyData);
        })();
    }, []);

    return   <div className={styles.daily_key_figures_container}>
                <DailyKeyCard name="Calories" icon={calorie} content={dailyKeyCards.calorieCount} unity="kCal"/>
                <DailyKeyCard name="Proteines" icon={chicken} content={dailyKeyCards.proteinCount} unity="g"/>
                <DailyKeyCard name="Glucides" icon={apple} content={dailyKeyCards.carbohydrateCount} unity="g"/>
                <DailyKeyCard name="Lipides" icon={cheeseburger} content={dailyKeyCards.lipidCount} unity="g"/>
            </div>
}
export default DailyKeyCardContainer;