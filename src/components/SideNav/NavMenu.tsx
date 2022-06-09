import React, { ReactNode } from 'react'
import { Accordion } from 'react-bootstrap';

function NavMenu({ title, children, }: {title: string; children: ReactNode}) {
  const id = "accordionSideNavItem"+title;

  return (
    <Accordion.Item className='nav-menu' eventKey={title}>
        <Accordion.Header className='menu-title'>
            {title}
        </Accordion.Header>
        <Accordion.Body className='' id={id}>
            { children }
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default NavMenu