import React, {useEffect, useState} from 'react';
import styles from './Welcome.module.scss';
import {Api} from '../../services/api';
import {useParams} from "react-router-dom";


/**
 * @name Welcome
 * @description This is the welcome card component.
 * @returns {JSX.Element}
 */

const Welcome = () => {
    const [firstname, setFirstname] = useState("");
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const response  = await new Api().getUser(id)
            setFirstname(response.userInfos.firstName);
        })();
    }, []);

    return <>
                <div className={styles.welcome_container}>
                    <h1>Bonjour <span>{firstname}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
                </div>
          </>
}
export default Welcome;