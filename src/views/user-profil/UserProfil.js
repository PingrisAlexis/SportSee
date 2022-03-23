import React, {useEffect, useState} from 'react';
import {DailyActivities,
    AverageSessionDuration,
    OverallPerformances,
    ObjectiveScore,
    DailyKeyCardContainer,
    Welcome,
    LoaderSpinner
} from '../../components';
import styles from './UserProfil.module.scss';
import {useParams} from "react-router-dom";
import {Api} from "../../services/api";
import {service} from "../../services/service";
import {NotFound} from "../index";


/**
 * @name UserProfil
 * @description This is the user profil page.
 * @returns {JSX.Element}
 */

const UserProfil = () => {
    const { id } =  useParams();
    const [userId, setUserId] = useState([])
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState([]);
    const [performance, setPerformance] = useState([]);
    const [activity, setActivity] = useState([]);
    const [averages, setAverages] = useState([]);
    const [score, setScore] = useState([]);
    const [dailyKeyCards, setDailyKeyCards] = useState([]);
    const api = new Api;

    useEffect(() => {
        const timer = setTimeout(() => {
            (() => {
                const getUser  =  api.getUser(id);
                const getPerformance  =  api.getPerformances(id);
                const getDailyActivity  =  api.getDailyActivities(id);
                const getAverage  =  api.getAverageSessionDuration(id);

                Promise.all([getUser, getPerformance, getDailyActivity, getAverage])
                    .then(([userResult,performanceResult, activityResult, averageResult], ) => {
                        setUserId(userResult.id)
                        setFirstName(userResult.userInfos.firstName);
                        setScore(userResult.todayScore);
                        setDailyKeyCards(userResult.keyData);
                        setPerformance(performanceResult);
                        setActivity(activityResult);
                        setAverages(averageResult);
                        setLoading(false)
                    })
                    .catch(err => console.log(err));
            })();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    // if ( parseInt(id) == userId) {
    //     return  <NotFound/>


    return loading ?  <LoaderSpinner /> :

        <main className={styles.user_profil_container}>
            <Welcome firstName={firstName} />

            <div className={styles.main_container}>
                <div className={styles.charts_container}>

                    <DailyActivities activities={activity} />
                    <div className={styles.user_profil_bottom_part} >
                        <AverageSessionDuration averages={averages} />
                        <OverallPerformances performance={performance} />
                        <ObjectiveScore score={score}/>
                    </div>

                </div>
                <DailyKeyCardContainer dailyKeyCards={dailyKeyCards} />
            </div>
        </main>
    




}

export default UserProfil;