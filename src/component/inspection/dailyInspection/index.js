/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../utils/context/globalContext';
import { Loader } from '../../common/loader';
import { CompletedInspection } from './complete';
import { Inspection } from './inspection';
import { StartInspectComp } from './start';
import styles from './daily.module.css'

export const DailyInspection = () => {
  const {equipmentDetails} = useContext(GlobalContext);
  const [startInspection,setStartInspect] = useState(false);
  const [completeInspection,setCompleteInspection] = useState(false);
  const [isLoading,setLoading] = useState(false);
  
  const handleStart = () => {
    
    setLoading(true);
    setTimeout(() => {
      setStartInspect(true);
      setLoading(false);
    }, 2000);

    console.log(startInspection)
  }

  const handleComplete = () => {
    
    setLoading(true);
    setTimeout(() => {
      setCompleteInspection(true);
      setLoading(false);
    }, 2000);
  }

  const equipment = JSON.parse(equipmentDetails)
  return (
      <>
      {isLoading? <Loader/> : null}
      <div className={styles.inspection}>
        <h4>Equipment Information</h4>
        <p><b>Inspection StartTime :</b> <span>14/20/2022 14.02</span></p>
        <section className={styles.details}>
              {Object.keys(equipment).map(function(key, index) {
                  return <p key={index}>{key}: <span>{equipment[key]}</span> </p>
              })}
        </section>
        {!startInspection ?<StartInspectComp handleStart={handleStart} /> :<>{!completeInspection ?<Inspection handleComplete={handleComplete} />:<CompletedInspection handleComplete={handleComplete} />}</>}
      </div>
      </>
  )
}
