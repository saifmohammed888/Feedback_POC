/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../utils/context/globalContext';
import styles from './daily.module.css'

export const DailyInspection = () => {
  const {equipmentDetails} = useContext(GlobalContext);
  const [startInspection,setStartInspect] = useState(false);
  const equipment = JSON.parse(equipmentDetails);

  const handleStart = () => {
    setStartInspect(true);
  }

  return (
    <div className={styles.inspection}>
      <h4>Equipment Information</h4>
      <p><b>Inspection StartTime :</b> <span>14/20/2022 14.02</span></p>
      <section className={styles.details}>
            {Object.keys(equipment).map(function(key, index) {
                return <p key={index}>{key}: <span>{equipment[key]}</span> </p>
            })}
      </section>
     
      <section className={styles.inspection}>
        <p><b>Inspection Items :</b> <sm>Pre Inspection preparation</sm></p>
      </section>
      <section className={styles.executer}>
        <p>Executer Amount<span>* Required</span></p>
        <input placeholder='Enter Amount' type={"number"} min={0}/>
        <span className={styles.buttons}>
          <button>Reset</button>
          <button onClick={()=>{handleStart}}>Start Inspection</button>
        </span>
      </section>
    </div>
  )
}
