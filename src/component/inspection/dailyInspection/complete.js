/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./daily.module.css"
import { Input } from 'antd';
import UploadComp from './uploadFile';

const { TextArea } = Input;

export const CompletedInspection = ({handleComplete}) => {
  return (
    <section className={styles.breakageDetails}>
    <p><b>Inspection Result :</b> <span>Defective</span></p>
    <section className={styles.radioDetails}>
        <input className={styles.radio} type={"radio"} />
        <label>Treatment Completed</label>
        <input className={styles.radio} type={"radio"} />
        <label>Treatment Not Possible</label>
        <TextArea placeholder='Remarks' rows={4} />
        <UploadComp  />
        <h4>Part Used</h4>
        <input className={styles.radio} type={"radio"} />
        <label>Yes</label>
        <input className={styles.radio} type={"radio"} />
        <label>No</label>
        <button onClick={handleComplete} className={styles.startInspectButton}>Treatment Completed</button>
      </section>
   </section>
  )
}
