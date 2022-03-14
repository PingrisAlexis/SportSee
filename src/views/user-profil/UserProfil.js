import React from 'react';
import {DailyActivities, AverageSessionDuration, OverallPerformances, ObjectiveScore, DailyKeyCard} from '../../components'
import styles from "./UserProfil.module.scss"
import calorie from '../../assets/calorie.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

export const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    }
]

const UserProfil = () => {
     return    <main className={styles.user_profil_container}>
                    <div className={styles.charts_container}>
                        <DailyActivities />
                        <div className={styles.user_profil_bottom_part} >
                            <AverageSessionDuration />
                            <OverallPerformances />
                            <ObjectiveScore />
                        </div>
                    </div>
                    <div className={styles.daily_key_figures_container}>
                        <DailyKeyCard name="Calories" icon={calorie} content={USER_MAIN_DATA[0].keyData.calorieCount} unity="kCal"/>
                        <DailyKeyCard name="Proteines" icon={chicken} content={USER_MAIN_DATA[0].keyData.proteinCount} unity="g"/>
                        <DailyKeyCard name="Glucides" icon={apple} content={USER_MAIN_DATA[0].keyData.carbohydrateCount} unity="g"/>
                        <DailyKeyCard name="Lipides" icon={cheeseburger} content={USER_MAIN_DATA[0].keyData.lipidCount} unity="g"/>
                    </div>
               </main>
}

export default UserProfil;