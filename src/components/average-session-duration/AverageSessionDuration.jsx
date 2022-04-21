import React, {useEffect, useState} from 'react';
import styles from './AverageSessionDuration.module.scss';
import {Tooltip, ResponsiveContainer, XAxis, YAxis,Line, LineChart} from 'recharts';
import PropTypes from "prop-types";

/**
 * @name CustomTooltip
 * @description - This component will render session duration by hover effect.
 * @returns {JSX.Element}
 */

//ToolTip for the recharts graph
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.average_session_duration_tooltip}>
                <p>{payload[0].value}min</p>
            </div>
        );
    }
    return null;
};

/**
 * @name AverageSessionDuration
 * @description - This component will render weekly sessions duration for a specific user.
 * @param {array} averages
 * @param {string} averages.day
 * @param {number} averages.sessionLength
 * @returns {JSX.Element}
 */

const AverageSessionDuration = ({averages}) => {

    return  <div className={styles.average_session_duration_container}>
                <h2>Durée moyenne des <br/>sessions</h2>
                <ResponsiveContainer title="Durée moyenne des sessions" width="100%" height="100%">
                        <LineChart width={730} height={250} data={averages}
                           margin={{ top: 40, right: 10, left: 10, bottom: 80 }}>
                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={{
                                    height: 0,
                                    stroke: 'rgba(0, 0, 0, 0.1)',
                                    strokeWidth: 0
                                }}
                            />
                            <XAxis dataKey="day"
                                   stroke="rgba(255, 255, 255, 0.6)"
                                   axisLine={false}
                                   dy={15}
                                   tickLine={false}
                                   tick={{fill : "white", fontSize: 12, fontWeight: 500
                                   }}
                            />
                            <YAxis  dataKey="sessionLength" hide={true}  domain={[0, "dataMax"]}/>
                            <Line type="natural"
                                  strokeWidth={2}
                                  dataKey="sessionLength"
                                  stroke="#ffffff"
                                  dot={false}
                                  activeDot={{stroke: "rgba(255,255,255, 0.6)", strokeWidth: 10, r: 5
                                  }}
                            />
                        </LineChart>
                </ResponsiveContainer>
            </div>
}

AverageSessionDuration.propTypes = {
    averages : PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            sessionLength: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default AverageSessionDuration;