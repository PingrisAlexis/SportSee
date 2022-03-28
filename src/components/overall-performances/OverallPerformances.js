import React from 'react';
import styles from './OverallPerformances.module.scss';
import {RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar} from 'recharts';
import PropTypes from "prop-types";
/**
 * @name OverallPerformances
 * @description This component will render the global performance for a specific user.
 * (energy, cardio, endurance, strength, speed ans intensity)
 * @returns {JSX.Element}
 */

const OverallPerformances = ( {performance}) => {

    return  <div className={styles.overall_performances_container} >
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90}  data={performance}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickSize={10}
                    tick={{
                        fill: "white",
                        fontSize: 10,
                        fontWeight: 500,
                        y: 200,
                    }}
                />
                <Radar dataKey="performanceValue" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    </div>

};

OverallPerformances.propTypes = {
    performance : PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.string,
        })
    ).isRequired,
};

export default OverallPerformances;