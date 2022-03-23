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

    const [user, setUser] = useState(null)
    const [performance, setPerformance] = useState(null)
    const [activity, setActivity] = useState(null)

    useEffect(() => {
        const getUser = service.getUser(id)
        const getPerformance = service.getPerformances(id)
        const getActivity = service.getDailyActivities(id)
        Promise.all([getUser, getPerformance, getActivity])
               .then(([userResult, performanceResult, activityResult]) => {
                   setUser(userResult)
                   setPerformance(performanceResult)
                   setActivity(activityResult)
        })
    }, null);


    if (!user) {
        return null;
    }

    // return  <main className={styles.user_profil_container}>
    //              <Welcome user={user} />
    //              <div className={styles.main_container}>
    //                  <div className={styles.charts_container}>
    //                      <DailyActivities activities={activity} />
    //                      <div className={styles.user_profil_bottom_part} >
    //                          <AverageSessionDuration />
    //                          <OverallPerformances performance={performance} />
    //                          <ObjectiveScore />
    //                      </div>
    //                  </div>
    //                  <DailyKeyCardContainer />
    //              </div>
    //          </main>
}

export default UserProfil;