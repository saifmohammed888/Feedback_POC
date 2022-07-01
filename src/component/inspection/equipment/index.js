import React, { useContext, useState } from 'react'
import styles from "./equipment.module.css"
import {UserOutlined} from "@ant-design/icons"
import { GlobalContext } from '../../../utils/context/globalContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const ChooseEquipment = () => {

  const [equipment,setEquipment] = useState(null)
  const [disable,setDisable] = useState(false)
  const {setEquipmentId} = useContext(GlobalContext);
  const route = useNavigate();

  const handleSubmit = ()=>{
    if(equipment!==null || equipment!==""){
        setEquipmentId(equipment)
        setDisable(true)
        toast.success("Equipment Id Saved")
    }
  }

  const handleScan = ()=>{
    route("/scan")
  }

  return (
    <div className={styles.equipment}>
        <label>Enter Equipment Id</label>
        <span className={!disable?styles.inputContainer:styles.disabled}>
        <UserOutlined/>
         <input disabled={disable}  className={styles.input} value={equipment} onChange={(e)=>{setEquipment(e.target.value)}} placeholder={"Enter Equipment Id"}></input>
        </span>
     
        {!disable?<button className={styles.button} onClick={handleSubmit}>Submit</button>:<button onClick={handleScan} className={styles.button}>Scan</button>}
    </div>
  )
}
