/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Select } from 'antd';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../common/loader';
import TableComp from '../../common/utlity/table';
import styles from "./daily.module.css"
import UploadComp from './uploadFile'

export const Report = () => {
   
  const [completed,setCompleted] = useState(false)
  const route = useNavigate();

  useEffect(()=>{
    if(completed){
        setTimeout(()=>{
            route("/inspectionList")
        },[2000])
    }
  },[completed])

  return (
    <>
    {!completed?
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
        <button type='button' onClick={()=>{setCompleted(true)}}>Completed</button>
    </section>
    </section>:
        <section className={styles.treatmentComplete}>
            <h2>
                <CheckCircleIcon className={styles.check} />
                Inspection Completed</h2>
                <Loader/>
        </section>
    }
    </>
  )
}

export const SelectItem = () =>{
    const { Option } = Select;
    const handleChange = (value) => {
        console.log(value); 
    };

    return (
        <section className={styles.select}>
        <Select
                labelInValue
                placeholder="Please Select Reason"
                defaultValue={{
                    value: 'partBroken',
                    label: 'Part Broken',
                }}
                style={{
                width: 320,
                }}
                onChange={handleChange}
            >
                <Option value="partBroken">Part Broken</Option>
                <Option value="short">Short Circuit</Option>
                <Option value="Oil">Oiling</Option>
        </Select>
        </section>
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
