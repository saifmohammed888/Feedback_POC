import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./inspection.module.css"

const WarehouseList = [
    "Go to Unexpected Page Breakdown",
    "Go to Daily Inspection Page",
    "Go to Periodic Inspection Page",
    "Go to Vender Inspection Page",
    "Go to List Page"
]

export const Inspection = () => {

  const route = useNavigate();
 
  const handleBreakdown = (item) => {
    if(item === "Go to Daily Inspection Page"){
        route("/chooseEquipment");
    }  
    else if(item === "Go to List Page"){
        route("/inspectionList");
    }   
  }

  return (
    <div className={styles.warehouse}>
        <section className={styles.warehouseContainer}>
            {WarehouseList.map((item, index) => {
                return (
                    <div  onClick={()=>{handleBreakdown(item)}} key={index} className={styles.warehouseCard}>
                        <h4>{item}</h4>
                    </div>
                )
            })}
        </section>
    </div>
  )
}
