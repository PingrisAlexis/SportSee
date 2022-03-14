import React from 'react';
import styles from './DailyKeyCard.module.scss';


const DailyKeyCard = (props) => {
    const {name, content, unity, icon} = props;

    const [dynamicClasses, setDynamicClasses] = React.useState([
        "dynamicClass1", "dynamicClass2"

    ]);

    if (name === "Calories") {


    }


    return <figure className={styles.daily_key_card_container}>
                <img  src={icon} alt=""/>
                <figcaption>
                    <span>{content} {unity}</span>
                    <h3>{name}</h3>
                </figcaption>
           </figure>

}
export default DailyKeyCard