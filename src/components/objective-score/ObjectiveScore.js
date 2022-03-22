import React, {useEffect, useState} from 'react';
import styles from './ObjectiveScore.module.scss';
import {RadialBarChart, PolarAngleAxis, ResponsiveContainer, RadialBar} from 'recharts';
import {Api} from '../../services/api';
import {useParams} from 'react-router-dom'

/**
 * @name ObjectiveScore
 * @description This component will render the percentage of activities objective for a specific user.
 * @returns {JSX.Element}
 */

const ObjectiveScore = () => {
    const [score, setScore] = useState("");
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const response  = await new Api().getUser(id)
            setScore(response.todayScore);
        })();
    }, []);

    const scoreValueScale = [{
        value: score * 100
    }]
    const currentUserScore = score * 100

    return <>
             <div className={styles.objective_score_container}>
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
    </>
}
export default ObjectiveScore;