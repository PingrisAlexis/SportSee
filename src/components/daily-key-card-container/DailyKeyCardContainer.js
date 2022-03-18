import React, {useEffect, useState} from 'react';
import {DailyKeyCard} from "../index";
import styles from './DailyKeyCardContainer.module.scss';
import {Mock} from "../../services/mock";
import calorie from '../../assets/calorie.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import axios from "axios";
import {Api} from "../../services/api";

const DailyKeyCardContainer = () => {
    const [dailyKeyCards, setDailyKeyCards] = useState([]);

    useEffect(() => {
        (async () => {
            const response  = await new Api().getUser()
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