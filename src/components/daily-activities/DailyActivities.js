import React from 'react';
import styles from './DailyActivities.module.scss'
import {BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend} from 'recharts';

const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip_container}>
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}Kcal</p>
            </div>
        );
    }
    return null;
};

const DailyActivities = () => {
    return  <div className={styles.daily_activities_container}>
        
                <h2>Activité quotidienne</h2>
                <ResponsiveContainer title="Activité quotidienne" width="100%" height={250}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5}}
                    >
                        <XAxis dataKey="NbrOfDay"
                                tickLine={false} />
                        <YAxis orientation="right"
                               yAxisId="kilogram"
                               dataKey="kilogram"
                               align="right"
                               tickLine={false}
                               axisLine={false}
                               tick={{ fontSize: 20, fill: '#74798c'}}
                               tickCount={4}
                               domain={['dataMin - 1', 'dataMax + 1']}
                        />
                        <YAxis
                            yAxisId="calories"
                            orientation="right"
                            tick={{ fontSize: 18, fill: '#74798c', strokeWidth: 6}}
                            tickLine={false}
                            dataKey="calories"
                            hide={true}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <CartesianGrid strokeDasharray="3" vertical={false} />
                        <Legend  marginBottom="10"
                                 wrapperStyle={{fontSize: "1.6rem", position: "relative", bottom: "27.5rem"}}
                                 verticalAlign="top"
                                 align="right"
                                 iconType="circle"
                                 iconSize="10"
                        />
                        <Bar dataKey="kilogram"
                             yAxisId="kilogram"
                             name="Poids (kg)"
                             barSize={7}
                             fill="#020203"
                             radius={[50, 50, 0, 0]}
                        />
                        <Bar dataKey="calories"
                             yAxisId="calories"
                             name="Calories brûlées (kCal)"
                             barSize={7}
                             fill="#E60000"
                             radius={[50, 50, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
}

export default DailyActivities