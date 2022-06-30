
import { XCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import styles from "./sidebar.module.css"

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <XCircleIcon className={styles.close} />
    </div>
  )
}
