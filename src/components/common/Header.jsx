// export default Header
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled more than 80px, update state
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditionally set classes based on scroll state.
  const navbarClasses = scrolled
    ? "fixed-top py-3 bg-dark navbar-dark shadow rounded"
    : "fixed-top py-3 bg-light navbar-light";

  return (
    <>
      <Navbar expand="lg" className={`${navbarClasses} transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''} navbar-custom`}>
        <div className="container">
          <Navbar.Brand href="/" className="logo">
            Quiz <span className="highlighted-text">Gen</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
              {/* <Nav.Link href="/about" className="nav-link">About Us</Nav.Link> */}
              <Nav.Link href="/service" className="nav-link">Our Product</Nav.Link>
              {/* <Nav.Link href="#" className="nav-link">Projects</Nav.Link> */}
              {/* <Nav.Link href="#b" className="nav-link">Blogs</Nav.Link>
              <Nav.Link href="#" className="nav-link">Contact Us</Nav.Link> */}
              <Nav.Link href="\admin\login" className="nav-link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* 
        The rest of your page content goes here.
        IMPORTANT: add top padding/margin so content doesn't hide behind the navbar.
      */}
      <div style={{ marginTop: '80px' }}>
        {/* Page content */}
      </div>
    </>
  );
};

export default Header;
