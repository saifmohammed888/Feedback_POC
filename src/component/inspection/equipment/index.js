import React, { useContext, useState } from 'react'
import styles from "./equipment.module.css"
import {UserOutlined} from "@ant-design/icons"
import { GlobalContext } from '../../../utils/context/globalContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const ChooseEquipment = () => {

  const [equipment,setEquipment] = useState(null)
  const [disable,setDisable] = useState(false)
  const {setEquipmentId,setEquipmentDetails} = useContext(GlobalContext);
  const [error,setError] = useState(false)

  const route = useNavigate();

  const handleSubmit = ()=>{
    console.log(equipment)
    if(equipment!==null && equipment!==""){
        setEquipmentId(equipment)
        setDisable(true)
        toast.success("Equipment Id Saved")
        setEquipmentDetails({
          "EquipmentId": "123456YYY", 
          "Warehouse":"ICHIKAWA II",
         "Floor":"2nd Floor",
         "Equipment":"PIB Unit",
         "Model":"XC060",
         "Vendor":"Daifuku"
         })
        route("/dailyInspection");
    }else{
      setError(true)
    }
  }

  const handleScan = ()=>{
    route("/scan")
  }

  return (
    <div className={styles.equipment}>
         <button onClick={handleScan} className={styles.button}>Scan</button>
        <label>Enter Equipment Id</label>
        <span className={!disable?styles.inputContainer:styles.disabled}>
        <UserOutlined/>
         <input className={styles.input} value={equipment} onChange={(e)=>{setEquipment(e.target.value)}} placeholder={"Enter Equipment Id"}></input>
        
        </span>
        {error ? <p className={styles.error}>please enter equipment id</p>:null}
        <button className={styles.button} onClick={handleSubmit}>Submit</button>
       
    </div>
  )
}
