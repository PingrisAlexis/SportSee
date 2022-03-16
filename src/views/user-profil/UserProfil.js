import React from 'react';
import {DailyActivities,
    AverageSessionDuration,
    OverallPerformances,
    ObjectiveScore,
    DailyKeyCardContainer,
    Welcome
} from '../../components'
import styles from "./UserProfil.module.scss"

const UserProfil = () => {

    return <>
             <main className={styles.user_profil_container}>
                 <Welcome />
                 <div className={styles.charts_container}>
                     <DailyActivities />
                     <div className={styles.user_profil_bottom_part} >
                         <AverageSessionDuration />
                         <OverallPerformances />
                         <ObjectiveScore />
                     </div>
                 </div>
                 <DailyKeyCardContainer />
             </main>
        </>
}

export default UserProfil;