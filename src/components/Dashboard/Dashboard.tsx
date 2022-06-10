import React, { ReactElement } from 'react'

import NavBar from '../Navbar/Navbar'
import Sidebar from '../SideNav/SideNav'
import DashboardContent from './DashboardContent'

import '../../styles/Dashboard.scss';
import MenuItem from '../SideNav/MenuItem';

function Dashboard() : ReactElement {
  const items: MenuItem[] = [
    {
      title: "Item1",
      children: [
        {
          title: "Item1.1",
          children: []
        },{
          title: "Item1.2",
          children: []
        },
      ]
    },{
      title: "Item2",
      children: [
        {
          title: "Item2.1",
          children: []
        },{
          title: "Item2.2",
          children: [
            {
              title: "Item2.2.1",
              children: []
            },{
              title: "Item2.2.2",
              children: []
            },
          ]
        },{
          title: "Item2.3",
          children: []
        },
      ]
    },{
      title: "Item3",
      children: []
    },
  ]; 
  return (
    <div className='container-fluid row page'>
      <div className='col-md-3 col-bg-3 col-sm-12 sidebar'>
        <Sidebar items={items}/>
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