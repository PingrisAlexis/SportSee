import React from 'react';
import styles from './OverallPerformances.modules.scss';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Radar, Legend} from 'recharts';

const performances = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    }
    ]

const OverallPerformances = () => {
    return <div className={styles.overall_performances_container}>
        <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    data={performances}
                    outerRadius={"70%"}
                >
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis
                        dataKey="subject"
                        stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />
                    <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
        </ResponsiveContainer>
            </div>
}

export default OverallPerformances;