import React, { useContext } from 'react'
import {InformationCircleIcon, MenuIcon } from '@heroicons/react/solid'
import styles from "./navbar.module.css"
import { Sidebar } from '../sidebar'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../utils/context/globalContext';


const titleMapper = {
  "/": "Material Handling Equipment",
  "/warehouse": "Function Selection",
  "/inspection": "Inspection and Breakdown",
  "/chooseEquipment":  "Choose Equipment",
}
export const Navbar = () => {

const {isOpen,setIsOpen}  = useContext(GlobalContext);
const location = useLocation()

return (
    <nav className={styles.nav}>
          <MenuIcon onClick={()=>{setIsOpen(!isOpen)}} className={styles.menuIcon} />
          <h2>{titleMapper[location.pathname]}</h2>
          <span className={styles.border}>
            <InformationCircleIcon className={styles.circle}   />
          </span>
          {isOpen ?  <Sidebar setIsOpen={setIsOpen}/> : null}
    </nav>)
}
