import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './NavBar.css';




export default function NavBar() {
    // used to track page user is on and is set by user as well
    const [currentLink, setCurrentLink] = useState('home');


    // sets the current link when user clicks on nav buttons
    const updateLink = (link) => {
        setCurrentLink(link);
    }
    

    return (
      <Navbar expand="lg" >
        <Container>
          {/* Brand logo on the left */}
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
    
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
    
          <Navbar.Collapse className='main-nav'>
            {/* Links on the right */}
            <Nav>
              <Nav.Link href="#home" className={currentLink === 'home' ? 'current-link' : 'nav-link'} onClick={() => updateLink('home')}>Home</Nav.Link>
    
              <Nav.Link href="#about-me" className={currentLink === 'About Me' ? 'current-link' : 'nav-link'} onClick={() => updateLink('About Me')}>About Me</Nav.Link>
    
              <Nav.Link href="#skills" className={currentLink === 'Skills' ? 'current-link' : 'nav-link'} onClick={() => updateLink('Skills')}>Skills</Nav.Link>
    
              <Nav.Link href="#projects" className={currentLink === 'Projects' ? 'current-link' : 'nav-link'} onClick={() => updateLink('Projects')}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className='nav-btn'>Download CV</button>
          

        </Container>
        
        
      </Navbar>
    );
    
}


