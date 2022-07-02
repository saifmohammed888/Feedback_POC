/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../utils/context/globalContext';
import { Loader } from '../../common/loader';
import { CompletedInspection } from './complete';
import { Inspection } from './inspection';
import { StartInspectComp } from './start';
import styles from './daily.module.css'
import { useNavigate } from 'react-router-dom';

export const DailyInspection = () => {
 
  const [startInspection,setStartInspect] = useState(false);
  const [completeInspection,setCompleteInspection] = useState(false);
  const [isLoading,setLoading] = useState(false);
  const route = useNavigate()
  
  const handleStart = () => {
    
    setLoading(true);
    setTimeout(() => {
      setStartInspect(true);
      setLoading(false);
    }, 1000);

    console.log(startInspection)
  }

  const handleComplete = () => {
    
    setLoading(true);
    setTimeout(() => {
      setCompleteInspection(true);
      setLoading(false);
      route("/treatment")
    }, 2000);
  }


  return (
      <section className={styles.dailyInspection}>
      {isLoading? <Loader/> : null}
      <div className={styles.inspection}>
        <p><b>Inspection StartTime :</b> <span>14/20/2022 14.02</span></p>
        <InspectionDetail />
        {!startInspection ?<StartInspectComp handleStart={handleStart} /> :<Inspection handleComplete={handleComplete} />}
      </div>
      </section>
  )
}

export const InspectionDetail = () =>{
   const {equipmentDetails} = useContext(GlobalContext);
   const equipment = JSON.parse(equipmentDetails)

  return (
    <section className={styles.details}>
    <h4>Equipment Information</h4>
    {Object.keys(equipment).map(function(key, index) {
        return <p key={index}>{key}: <span>{equipment[key]}</span> </p>
    })}
    </section>
  )
}