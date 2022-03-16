import React from 'react';
import styles from './VerticalNavbar.module.scss'
import Meditation from '../../assets/meditation.svg'
import Swim from '../../assets/swim.svg'
import Bike from '../../assets/bike.svg'
import Alter from '../../assets/alter.svg'

const VerticalNavbar = () => {
   return   <>
               <div className={styles.vertical_navbar_container}>
                   <ul>
                       <li>
                           <img src={Meditation} alt={"meditation logo"}/>
                       </li>
                       <li>
                            <img src={Swim} alt={"swimming logo"}/>
                       </li>
                       <li>
                           <img src={Bike} alt={"biker logo"}/>
                       </li>
                       <li>
                           <img src={Alter} alt={"alter logo"}/>
                       </li>
                   </ul>
                   <div>
                       <span>
                           Copyright, SportSee 2020
                       </span>
                   </div>
               </div>
           </>
}

export default VerticalNavbar;