/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styles from "./scanner.module.css";
import { GlobalContext } from "../../../utils/context/globalContext";
import EquipmentDetail from "../details";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export const Scan = () => {
  const [result, setResult] = useState("No result");
  const [allowScan, setAllowScan] = useState(false);
  const {equipmentDetails,setEquipmentDetails} = useContext(GlobalContext);

  let handleScan = data => {
    if (data) {
      setResult(data);
      setEquipmentDetails(data)
    }
  };

  useEffect(()=>{
    if(!equipmentDetails.length > 0){
      setResult("No result")
    }
  },[equipmentDetails])

  let handleError = err => {
    // alert(err);
  };

  return (
    <>
        {equipmentDetails.length>0 && allowScan ? <EquipmentDetail/>:<></>}
        <div className={styles.qrContainer}>
        
          {allowScan ? <>
          <h4>Please Scan the QR</h4>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
            facingMode="environment"
          />
          {result !== "No result" ? <p>{result}</p> : <p className={styles.scanningMessage}>Scanning please wait..<Spin indicator={antIcon} /> </p>}
          </>:
          <section className={styles.permission}>
            <p>Enable Camera Permission to Start Scanning</p>  
            <span>
              <button onClick={()=>{setAllowScan(false)}}>No</button>
              <button onClick={()=>{setAllowScan(true)}}>Yes</button>
            </span>
          </section>}
        </div>
    </>
  );
}
