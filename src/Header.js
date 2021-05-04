import { Fragment, useState } from "react";
import { Navbar, Nav, NavDropdown, Collapse } from "react-bootstrap";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <i className="fa fa-car"></i> Car Gadgets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" active>
              Home
            </Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Gadgets</Nav.Link>
            <NavDropdown
              title="More About"
              aria-controls="example-collapse-text"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
            >
              <Collapse in={open} timeout="100">
                <div id="example-collapse-text">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </div>
              </Collapse>
            </NavDropdown>
          </Nav>
          <Nav variant="pills" defaultActiveKey="#login">
            <Nav.Link href="#login" style={{ textAlign: "center" }}>
              Login
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#signup"
              style={{ textAlign: "center" }}
            >
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
