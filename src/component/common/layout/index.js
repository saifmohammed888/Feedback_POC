import React from 'react'
import { Navbar } from '../navbar'

// eslint-disable-next-line react/prop-types
export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
