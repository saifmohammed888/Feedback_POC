import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../utils/context/globalContext'
import SelectItem from './dropdown'
import styles from "./warehouse.module.css"


const WarehouseList = [
    "Go to Part Page",
    "Go to Inspection and Breakdown Page",
    "Go to Report Page"
]
export const Warehouse = () => {
  const {warehouse} = useContext(GlobalContext);
  const router = useNavigate()
  
  const handleBreakdown = () => {
    if(warehouse===""){
      toast.error("Please select a warehouse");
    }else{
      router("/inspection");
    }
  }

  return (
    <div className={styles.warehouse}>
        <h3>Warehouse <p>* Required</p> </h3>
        <span className={styles.select}>
        <SelectItem/>
        </span>
      
        <section className={styles.warehouseContainer}>
            {WarehouseList.map((item, index) => {
                return (
                    <div onClick={handleBreakdown} key={index} className={styles.warehouseCard}>
                        <h4>{item}</h4>
                    </div>
                )
            })}
        </section>
    </div>
  )
}
