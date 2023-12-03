// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="fixed-top" expanded={expanded}>
        <div className="container">
          <Link to="/" className="navbar-brand bg-danger p-2 rounded">
            Don't Pay For Genocide
          </Link>
          <Navbar.Toggle aria-controls="navbar" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="nav-link" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link" onClick={() => setExpanded(false)}>
                Contribute
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
