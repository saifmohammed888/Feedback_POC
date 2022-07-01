/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [warehouse, setWarehouse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [equipmentId, setEquipmentId] = useState(null);
  const [equipmentDetails, setEquipmentDetails] = useState({});
  const Employee = {username: 'admin', password: 'admin@123'};
  const router = useNavigate();


  useEffect(()=>{
    if(localStorage.getItem('isLoggedIn')){
      setIsLoggedIn(true);
    }
  },[])

  useEffect(()=>{
    if(!isLoggedIn){
      router("/", { replace: true })
    }
  },[isLoggedIn])

  return (
    <GlobalContext.Provider 
       value={
        {
          employee:Employee,
          isLoggedIn,
          isLoading,
          warehouse,
          isOpen,
          equipmentId,
          equipmentDetails,
          setIsOpen,
          setIsLoggedIn,
          setLoading,
          setWarehouse,
          setEquipmentId,
          setEquipmentDetails
        }
       }
    >
    {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider