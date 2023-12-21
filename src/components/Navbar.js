import {Navbar, Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    // used to track page user is on and is set by user as well
    const [currentLink, setCurrentLink] = useState('home');
    // used to change colour when user scrolls
    const [scrolled, setScrolled] = useState(false);

    // runs when a user scrolls
    useEffect(() => {
        const whenScrolled = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false)
            }
        }

        // event listener active when component mounted
        window.addEventListener("scroll", whenScrolled);
        // remove evebt listener when component removed
        return () => window.removeEventListener("scroll", whenScrolled);
    }, [])

    // sets the current link when user clicks on nav buttons
    const updateLink = (link) => {
        setCurrentLink(link);
    }
    

    return(
        
    <Navbar expand="lg" className={scrolled ? "scrolled" : "bg-body-tertiary"} >
      <Container>
        <Navbar.Brand href="#home">Rainie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* main links inside nav bar */}
            <Nav.Link href="#home" className={currentLink === 'home' ? 'current-link' : 'nav-link'} onClick={() => updateLink('home')}>Home</Nav.Link>

            <Nav.Link href="#link" className={currentLink === 'About Me' ? 'current-link' : 'nav-link'} onClick={() => updateLink('About Me')}>About Me</Nav.Link>

            <Nav.Link href="#link" className={currentLink === 'Skills' ? 'current-link' : 'nav-link'} onClick={() => updateLink('Skills')}>Skills</Nav.Link>

            <Nav.Link href="#link" className={currentLink === 'Projects' ? 'current-link' : 'nav-link'} onClick={() => updateLink('Projects')}>Projects</Nav.Link>


            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className='navText'>
            <div className='socials'>
                {/* links for social media */}
                {/* <a href='#' src={} alt=""></a>
                <a href='#' src={} alt=""></a>
                <a href='#' src={} alt=""></a> */}
            </div>
            <button className='contact-form' onClick={() => {console.log('contact')}}>Let's Connect</button>
          </span>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

