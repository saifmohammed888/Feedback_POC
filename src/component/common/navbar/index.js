import React, { useState } from 'react'
import {InformationCircleIcon, MenuIcon } from '@heroicons/react/solid'
import styles from "./navbar.module.css"
import { Sidebar } from '../sidebar'

export const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)

return (
    <nav className={styles.nav}>
          <h2><MenuIcon onClick={()=>{setIsOpen(!isOpen)}} className={styles.menuIcon} />Material Handling Center</h2>
          <span className={styles.border}>
            <InformationCircleIcon className={styles.circle}   />
          </span>
          {isOpen ?  <Sidebar setIsOpen={setIsOpen}/> : null}
    </nav>)
}
