import React, { useState } from 'react'
import {InformationCircleIcon, MenuIcon } from '@heroicons/react/solid'
import styles from "./navbar.module.css"
import { Sidebar } from '../sidebar'
import { useLocation } from 'react-router-dom';


const titleMapper = {
  "/": "Material Handling Equipment",
  "/warehouse": "Function Selection",
}
export const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)
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
