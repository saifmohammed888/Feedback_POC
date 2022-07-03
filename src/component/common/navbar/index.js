import React, { useContext } from 'react'
import {MenuIcon } from '@heroicons/react/solid'
import styles from "./navbar.module.css"
import { Sidebar } from '../sidebar'
import { GlobalContext } from '../../../utils/context/globalContext';


const titleMapper = {
  "/": "Material Handling Equipment",
  "/warehouse": "Function Selection",
  "/inspection": "Inspection and Breakdown",
  "/chooseEquipment":  "Choose Equipment",
  "/scan": "Scan Equipment",
  "/dailyInspection": "Daily Inspection",
  "/treatment": "Daily Inspection Treatment",
  "/report": "Daily Inspection Report",
}
export const Navbar = () => {

const {isOpen,setIsOpen}  = useContext(GlobalContext);

return (
    <nav className={styles.nav}>
          <MenuIcon onClick={()=>{setIsOpen(!isOpen)}} className={styles.menuIcon} />
          <h2>{titleMapper[location.pathname]}</h2>
          <span className={styles.border}>
            <img src='/images/united-kingdom.png' alt='uk' />
          </span>
          {isOpen ?  <Sidebar setIsOpen={setIsOpen}/> : null}
    </nav>)
}
