/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styles from "./daily.module.css"

export const StartInspectComp = ({handleStart}) => {

  const [error,setError] = useState(false)

  return (
    <section className={styles.executer}>
            <p>Executer Amount<span>* Required</span></p>
            <input id="price" onChange={(e)=>{
              if(e.target.value.includes("-") ){
                setError(true)
              }else{setError(false)}
            }} placeholder='Enter Amount' type="number" min="0"/>
            {error?<p className={styles.error}>Please enter valid amount</p>:null}
            <span className={styles.buttons}>
              <button>Reset</button>
              <button onClick={()=>{
                let price = document.getElementById("price").value;
                console.log(price)
                if(price!=="" && price!==null){
                  handleStart(price)
                }else{
                  setError(true)
                }
              }}>Start Inspection</button>
            </span>
          </section>
  )
}
