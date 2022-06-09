import React from 'react'
import { Accordion } from 'react-bootstrap';

function NavMenu({ title, children, }) {
    const id = "accordionSideNavItem"+title;
    console.log(id);
  return (
    <Accordion.Item className='nav-menu' eventKey={title}>
        <Accordion.Header className='menu-title' variant='white'>
            {title}
        </Accordion.Header>
        <Accordion.Body className='' id={id}>
            { children }
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default NavMenu