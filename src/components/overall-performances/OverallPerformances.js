import React, {useEffect, useState} from 'react';
import styles from './OverallPerformances.module.scss';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Radar, Legend} from 'recharts';
import {Mock} from "../../services/mock";

const OverallPerformances = () => {
    const [performances, setperformances] = useState([]);

    useEffect(() => {
        (async () => {
            const response  = await new Mock().getPerformances()
            setperformances(response[0].data);
        })();
    }, []);

    return <>
            <div className={styles.overall_performances_container} >
                <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90}  data={performances}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="subject"
                        tickSize={10}
                        tick={{
                            fill: 'white',
                            fontSize: 10,
                            fontWeight: 500,
                            y: 200,
                        }}
                    />
                    <Radar dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
                    </ResponsiveContainer>
            </div>
    </>
}

export default OverallPerformances;