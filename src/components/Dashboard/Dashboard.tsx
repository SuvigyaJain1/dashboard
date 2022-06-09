import React, { ReactElement } from 'react'

import NavBar from '../Navbar/Navbar'
import Sidebar from '../SideNav/SideNav'
import DashboardContent from './DashboardContent'

import '../../styles/Dashboard.scss';

function Dashboard() : ReactElement {
  return (
    <div className='container-fluid row page'>
      <div className='col-md-3 col-bg-3 col-sm-12 sidebar'>
        <Sidebar/>
      </div>
      <div className='col-md-9 col-bg-9 col-sm-12 right'>
        <div className='nav'>
          <NavBar />
          
        </div>
        <div className='dashboard'>
          <DashboardContent />
        </div>
      </div>
    </div>
  )
}

export default Dashboard