/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./daily.module.css"

export const StartInspectComp = ({handleStart}) => {
  return (
    <section className={styles.executer}>
            <p>Executer Amount<span>* Required</span></p>
            <input placeholder='Enter Amount' type={"number"} min={0}/>
            <span className={styles.buttons}>
              <button>Reset</button>
              <button onClick={handleStart}>Start Inspection</button>
            </span>
          </section>
  )
}
