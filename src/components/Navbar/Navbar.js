import React from 'react'
import { Navbar, Container, Form, Button } from 'react-bootstrap'

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="bg" className='navbar-top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Dashboard
          </Navbar.Brand>
          <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="dark" collapseOnSelect expand="bg" className='navbar-bottom'>
        <Container className='nav-profile'>
          <div className='nav-profile-pic'>
            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"/>
          </div>
          <div className='nav-profile-name'>
            <b>Anna Adame</b>
            <p>Founder</p>
          </div>
        </Container>
        <Container className='nav-icons'>
          <i className='bi bi-moon'></i>
          <i className='bi bi-bell'></i>
          <i className='bi bi-bag'></i>
          <i className='bi bi-bounding-box'></i>
        </Container>
      </Navbar>
    </>
  )
}
