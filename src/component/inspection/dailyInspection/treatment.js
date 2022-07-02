/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./daily.module.css"
import { Input } from 'antd';
import UploadComp from './uploadFile';
import { InspectionDetail } from '.';
import { InspectionItem } from './inspection';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

export const Treatment = () => {
    const route = useNavigate()
    const handleSubmit = () =>{
        route("/report")
    }

  return (
    <section className={styles.treatmentDetails}>
    <p><b>Inspection StartTime :</b> <span>14/20/2022 14.02</span></p>
    <p><b>Inspection EndTime :</b> <span>14/20/2022 18.00</span></p>
    <InspectionDetail  />
    
    <InspectionItem />
    <p>Inspection Result : <b>Defective</b></p>

   
    <section className={styles.radioDetails}>
        <input className={styles.radio} type={"radio"} />
        <label>Treatment Completed</label>
        <br/>
        <input className={styles.radio} type={"radio"} />
        <label>Treatment Not Possible</label>
        <br/>
        <TextArea placeholder='Remarks' rows={4} />
        <UploadComp  />
        <h4>Part Used</h4>
        <input className={styles.radio} type={"radio"} />
        <label>Yes</label>
        <br/>
        <input className={styles.radio} type={"radio"} />
        <label>No</label>
        <br/>
        <button className={styles.startInspectButton} onClick={handleSubmit}>Treatment Completed</button>
    </section>
   </section>
  )
}
