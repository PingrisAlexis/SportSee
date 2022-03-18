import React, {useEffect, useState} from 'react';
import styles from './Welcome.module.scss';
import {Mock} from "../../services/mock";

const Welcome = () => {
    const [firstname, setfirstname] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response  = await new Mock().getUser()
            setfirstname(response[0].userInfos.firstName);
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