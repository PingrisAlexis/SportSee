import React from 'react';
import styles from './ObjectiveScore.module.scss';
import {RadialBarChart,PieChart,Pie, PolarAngleAxis, Cell,ResponsiveContainer, Label, RadialBar} from 'recharts';


export const data = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.2,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    }
]

const ObjectiveScore = () => {
    const userScore =  data[0].todayScore

    const scoreValueScale = [{
        value: userScore * 100
    }]
    const currentUserScore = userScore * 100

    return <div className={styles.objective_score_container}>
                <h2>Score</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart data={scoreValueScale}
                                    innerRadius={80}
                                    barSize={10}
                                    startAngle={90}
                                    endAngle={450}
                                    fill={'#E60000'}
                    >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            tick={false}
                        />
                        <RadialBar
                            dataKey="value"
                            cornerRadius={5}
                            background
                        />
                        <text
                            x="50%"
                            y="45%"
                            textAnchor="middle"
                            fontSize="26"
                            fontWeight="700"
                            fill="black"
                        >
                            {currentUserScore}%
                        </text>
                        <text x="50%" y="55%" textAnchor="middle" fontSize="16" fill="gray" fontWeight="500">
                            de votre  objectif
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
}

export default ObjectiveScore;