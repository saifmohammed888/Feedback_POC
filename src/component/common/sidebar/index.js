
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Button } from 'antd';
import React, { useContext } from 'react'
import { GlobalContext } from '../../../utils/context/globalContext';
import styles from "./sidebar.module.css"
import { UserOutlined ,HomeOutlined} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
export const Sidebar = (props) => {

  const router = useNavigate();
  const {isLoggedIn,employee,warehouse,setIsLoggedIn} = useContext(GlobalContext);

  return (
    <div className={styles.sidebar}>
      <header className={styles.sideHeader}>
        <h2>Menu</h2>
        <ChevronDoubleLeftIcon onClick={()=>{props.setIsOpen(false)}} className={styles.close} />
      </header>
      {isLoggedIn? 
        <section className={styles.loggedIn}>
          <p>Logged In as</p>
          <p className={styles.button}><UserOutlined/> <span>{employee.username}</span></p>
         
          <span className={styles.change}>
            <p>Warehouse</p>
            <Link to="/warehouse">Change</Link>
          </span>
          <p className={styles.button}><HomeOutlined/> <span>{warehouse}</span></p>
          <Button className='primary' onClick={()=>{
            localStorage.setItem('isLoggedIn', false);
            setIsLoggedIn(false);
            router("/", { replace: true })
          }} danger>Logout</Button>
         
        </section>
        :
        <section className={styles.loginMessage}>
            <p>Login to proceed further</p>
            <Button onClick={()=>{
              window.location.href = "/";
            }} className='primary' danger>Login</Button>
        </section>
      }
    </div>
  )
}
