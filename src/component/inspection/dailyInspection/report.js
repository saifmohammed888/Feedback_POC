/* eslint-disable react/prop-types */
import { Select } from 'antd';

import React from 'react'
import TableComp from '../../common/utlity/table';
import styles from "./daily.module.css"
import UploadComp from './uploadFile'

export const Report = () => {
   


  return (
    <section className={styles.treatmentDetails}>
    <p><b>Inspection EndTime :</b> <span>14/20/2022 18.00</span></p>
    <h4>Breakdown Reason</h4>
    <input placeholder='Enter Breakdown reason'></input>
    <h4>Working Condition Post Treatment </h4>
    <UploadComp />
    <h4>Cause </h4>
    <SelectItem/>
    <h4>Used Part List </h4>
    <TableComp/>
    <WorkDetails/>
    <section className={styles.buttons}>
        <button>Save in Draft</button>
        <button>Complete</button>
    </section>
   </section>
  )
}

export const SelectItem = () =>{
    const { Option } = Select;
    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };

    return (
        <>
        <Select
                labelInValue
                defaultValue={{
                value: 'lucy',
                label: 'Lucy (101)',
                }}
                style={{
                width: 120,
                }}
                onChange={handleChange}
            >
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
        </Select>
        </>
    )
}

export const WorkDetails = () => {
    return (
        <div className={styles.workDetails}>
            <p>
                Working Hours : <span>2hr 25m 14s</span>
            </p>
            <p>
                Man Hours : <span>2hr 25m 14s</span>
            </p>
            <p>
                Total spare parts Cost : <span>¥123,123</span>
            </p>
            <p>
                On-Call cost occured : <span>
                    <input type={"radio"}></input>Yes
                    <input type={"radio"}></input>No
                </span>
            </p>
            <p>
                Total security fee : <span>¥123,123</span>
            </p>
            <h4>
                Needs Measures to prevent occurance
            </h4>
        </div>
    )
}
