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
import {Redirect, useParams} from "react-router-dom";
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
    const [performances, setPerformances] = useState([]);
    const [activities, setActivities] = useState([]);
    const [averages, setAverages] = useState([]);
    const [score, setScore] = useState([]);
    const [dailyKeyCards, setDailyKeyCards] = useState([]);

    useEffect(() => {
                const getUser  =  service.getUser(id);
                const getPerformances  =  service.getPerformances(id);
                const getDailyActivities  =  service.getDailyActivities(id);
                const getAverages  =  service.getAverageSessionDuration(id);

                Promise.all([getUser, getPerformances, getDailyActivities, getAverages])
                    .then(([userResult,performancesResult, activitiesResult, averagesResult] ) => {
                        setFirstName(userResult.userInfos.firstName);
                        setScore(userResult.todayScore || userResult.score);
                        setDailyKeyCards(userResult.keyData);
                        setPerformances(performancesResult);
                        setActivities(activitiesResult);
                        setAverages(averagesResult);
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log(error)
                        setError404(true);
                        setLoading(false)
                    })
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

                                    <DailyActivities activities={activities}/>
                                    <div className={styles.user_profil_bottom_part}>
                                        <AverageSessionDuration averages={averages}/>
                                        <OverallPerformances performances={performances}/>
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