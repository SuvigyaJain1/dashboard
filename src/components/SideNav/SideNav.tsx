import React, { ReactElement } from 'react'
import { Accordion } from 'react-bootstrap'
import MenuItem from './MenuItem'


function SubMenu({item}: {item: MenuItem}): ReactElement {
  return (
    <Accordion className='accordion-dark navbar-nav' alwaysOpen flush>
      <Accordion.Item eventKey={"_parent"+item.title} className='nav-menu'>
        <Accordion.Header className='menu-title'>
          {item.title}
        </Accordion.Header>
        <Accordion.Body>
          <ul className='menu-list'>
            {item.children.map((child, index) => 
              <li key={index}>
                {(child.children.length == 0)?
                  <span className='menu-item'>{child.title}</span>
                :(
                  <SubMenu item={child}></SubMenu>
                )}
              </li>
            )}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function Sidebar({items}: {items: MenuItem[]}): ReactElement {
  return (
    <div className='navbar-dark'>
        <Accordion className='accordion-dark navbar-nav' alwaysOpen defaultActiveKey={"_parent"} flush>
          <Accordion.Item eventKey="_parent" className='nav-menu'>

          <Accordion.Header style={{"display":"none"}}>
            <h2>Heading</h2>
          </Accordion.Header>

          <Accordion.Body>
            <ul className='menu-list'>
              {items.map((item, index) => 
                <li key={index}>
                  {(item.children.length == 0)?
                    <span className='menu-item'>{item.title}</span>
                  :(
                    <SubMenu item={item}></SubMenu>
                  )}
                </li>
              )}
            </ul>
          </Accordion.Body>

        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Sidebar