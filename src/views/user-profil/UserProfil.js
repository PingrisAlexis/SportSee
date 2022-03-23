import React, {useEffect, useState} from 'react';
import {DailyActivities,
    AverageSessionDuration,
    OverallPerformances,
    ObjectiveScore,
    DailyKeyCardContainer,
    Welcome} from '../../components';
import styles from './UserProfil.module.scss';
import {useParams} from "react-router-dom";
// import {service} from "../../services/service";
import {Api} from "../../services/api";
import {service} from "../../services/service";

/**
 * @name UserProfil
 * @description This is the user profil page.
 * @returns {JSX.Element}
 */

const UserProfil = () => {
    const { id } =  useParams()
    const [firstName, setFirstName] = useState([])
    const [performance, setPerformance] = useState([])
    const [activity, setActivity] = useState([])
    const [averages, setAverages] = useState([]);
    const [score, setScore] = useState([]);
    const [dailyKeyCards, setDailyKeyCards] = useState([]);

    useEffect(() => {
        (async () => {
            const getUser  = await new Api().getUser(id);
            const getPerformance  = await new Api().getPerformances(id);
            const getDailyActivity  = await new Api().getDailyActivities(id);
            const getAverage  = await new Api().getAverageSessionDuration(id);

            Promise.all([getUser, getPerformance, getDailyActivity, getAverage])
                .then(([userResult,performanceResult, activityResult, averageResult]) => {
                    setFirstName(userResult.userInfos.firstName);
                    setScore(userResult.todayScore);
                    setDailyKeyCards(userResult.keyData);
                    setPerformance(performanceResult);
                    setActivity(activityResult);
                    setAverages(averageResult);
                })
                .catch(error => console.log(`Error in promises ${error}`))
        })();
    }, []);
    
    return  <main className={styles.user_profil_container}>
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
                     <DailyKeyCardContainer dailyKeyCards={dailyKeyCards}/>
                 </div>
             </main>
}

export default UserProfil;