import React from 'react'
import { Accordion, Nav, NavbarBrand } from 'react-bootstrap'

import NavMenu from '../SideNav/NavMenu'


function Sidebar() {
  return (
    <div className='navbar-dark'>
        <Accordion className='accordion-dark navbar-nav' defaultActiveKey={"Menu"}>
          <NavbarBrand>Brand Name</NavbarBrand> 
          <NavMenu title='Menu' key='1'> 
            <ul className="menu-list">
              <li className='menu-item'> Dashboard <i className='bi bi-house'></i> </li>
              <li className='menu-item'> Calendar <i className='bi bi-calendar'></i></li>
              <li className='menu-item'> Projects <i className='bi bi-journal-text'></i></li>
              <li className='menu-item'> Tasks <i className='bi bi-card-list'></i></li>
              <li className='menu-item'> Invoices <i className='bi bi-receipt'></i></li>
            </ul>
          </NavMenu>
          <NavMenu title='Components' key='2'> 
            <ul className="menu-list">
              <li className='menu-item'> Dashboard </li>
              <li className='menu-item'> Calendar </li>
              <li className='menu-item'> Projects </li>
              <li className='menu-item'> Tasks </li>
              <li className='menu-item'> Invoices </li>
            </ul>
          </NavMenu>
          <NavMenu title='Pages' key='3'>
            <ul className="menu-list">
              <li className='menu-item'> Dashboard </li>
              <li className='menu-item'> Calendar </li>
              <li className='menu-item'> Projects </li>
              <li className='menu-item'> Tasks </li>
              <li className='menu-item'> Invoices </li>
            </ul>
          </NavMenu>
        </Accordion>
    </div>
  )
}

export default Sidebar