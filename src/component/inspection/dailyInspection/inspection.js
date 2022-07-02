/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./daily.module.css"

export const Inspection = ({handleComplete}) => {
  return (
    <section className={styles.breakageDetails}>
     <InspectionItem/>
    <section className={styles.radioDetails}>
        <input className={styles.radio} type={"radio"} />
        <label>Good</label>
        <input className={styles.radio} type={"radio"} />
        <label>Defective</label>
      <button onClick={handleComplete} className={styles.startInspectButton}>Complete Inspection</button>
    </section>
  
  </section>
  )
}

export const  InspectionItem = () => {
    return(
        <section>
              <p><b>Inspection Items :</b> <span>Pre Inspection preparation</span></p>
              <p>Belt :<b>No Breakage, Dirt of Foreign matter</b></p>
        </section>
    )
}