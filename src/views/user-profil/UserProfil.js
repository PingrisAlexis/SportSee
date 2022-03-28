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
import {Redirect, useLocation, useParams} from "react-router-dom";
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

    const [loading, setLoading] = useState(true);
    const [error404, setError404] = useState(false);
    const [firstName, setFirstName] = useState([]);
    const [performance, setPerformance] = useState([]);
    const [activity, setActivity] = useState([]);
    const [averages, setAverages] = useState([]);
    const [score, setScore] = useState([]);
    const [dailyKeyCards, setDailyKeyCards] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            (() => {
                const getUser  =  service.getUser(id);
                const getPerformance  =  service.getPerformances(id);
                const getDailyActivity  =  service.getDailyActivities(id);
                const getAverage  =  service.getAverageSessionDuration(id);

                Promise.all([getUser, getPerformance, getDailyActivity, getAverage])
                    .then(([userResult,performanceResult, activityResult, averageResult] ) => {
                        setFirstName(userResult.userInfos.firstName);
                        setScore(userResult.todayScore);
                        setDailyKeyCards(userResult.keyData);
                        setPerformance(performanceResult);
                        setActivity(activityResult);
                        setAverages(averageResult);
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log(error)
                        setError404(true);
                    })

            })();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {(() => {
                if (error404 === true) {
                    return <Redirect to={NotFound} />
                }  else {
                    return loading ? <LoaderSpinner/> :

                        <main className={styles.user_profil_container}>
                            <Welcome firstName={firstName}/>

                            <div className={styles.main_container}>
                                <div className={styles.charts_container}>

                                    <DailyActivities activities={activity}/>
                                    <div className={styles.user_profil_bottom_part}>
                                        <AverageSessionDuration averages={averages}/>
                                        <OverallPerformances performance={performance}/>
                                        <ObjectiveScore score={score}/>
                                    </div>

                                </div>
                                <DailyKeyCardContainer dailyKeyCards={dailyKeyCards}/>
                            </div>
                        </main>
                }
            })()}
        </>
    )
}

export default UserProfil;