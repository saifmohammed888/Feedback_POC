/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./daily.module.css"

export const CompletedInspection = ({handleComplete}) => {
  return (
    <section className={styles.breakageDetails}>
    <p><b>Inspection Result :</b> <span>Defective</span></p>
    <section className={styles.radioDetails}>
        <input className={styles.radio} type={"radio"} />
        <label>Treatment Completed</label>
        <input className={styles.radio} type={"radio"} />
        <label>Treatment Not Possible</label>
        <button onClick={handleComplete} className={styles.startInspectButton}>Treatment Completed</button>
      </section>
   </section>
  )
}
