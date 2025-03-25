import React from 'react'
import DashboardProvider from './Provider'
function Dashboardlayout({children}) {
  return (
    <div>
        <DashboardProvider>
        {children}
        </DashboardProvider>
      
    </div>
  )
}

export default Dashboardlayout
