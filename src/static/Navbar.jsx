import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {  useState,} from 'react'
import logo from '../assets/logo.png'
import {useTranslation} from "react-i18next";
import LanguageSelector from '../components/LanguageSelector'; 
import  './Navbar.css'


function NavbarContainer(){
 
  const [navbar,setNavbar]=useState(false)
  const {t} = useTranslation();
  const {WASSETRUST,Home,Activities,DonateUs} = t("Navbar");
  const changeBackground =()=>{
    if(window.scrollY>=80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener("scroll",changeBackground)

  return (
   
    
        <Navbar expand="lg"sticky='top'  className={navbar? "navbar active text-dark":"navbar text-white"} style={{zIndex:1,borderRadius:""}}>
           

          <Container>
          <img src={logo} style={{
maxWidth:'70px',
maxHeight:"100px",

}} className='pe-3'/>
            <Navbar.Brand href="#home" className={navbar ? "navbar active":"navabar"}>{WASSETRUST}</Navbar.Brand>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Container>
              <Nav className="justify-content-end">
              <Nav.Link href="/" className={navbar ? "navbar text-white active":"navabar"}>{Home}</Nav.Link>
              <Nav.Link href="/Activities" className={navbar ? "navbar text-white active":"navabar"}>{Activities}</Nav.Link>
             
              <Nav.Link href="/DonateUs" className={navbar ? "navbar text-white active":"navabar"}>{DonateUs}</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown" className='text-dark'>
              <NavDropdown.Item href="#action/3.1">Trustee</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Structure
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Planning</NavDropdown.Item>
           
              <NavDropdown.Item href="#action/3.4">10 Commands</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.5">Community welbening</NavDropdown.Item>
         
             
            </NavDropdown>
            <LanguageSelector/>
              </Nav>
              </Container>
         
           
            </Navbar.Collapse>
           
          </Container>
       
        </Navbar>
        
      );
    }
    
    


  
 


export default NavbarContainer
// className={navbar ? "navbar active": "navbar"} 
{/* <Navbar expand="lg" className="active justify-content-end positon-relative"sticky='top' >
   
<div className='ps-3'  >
  <img src={logo} style={{
maxWidth:'100px',
maxHeight:"100px",

}} className='p-3 ml-3'/> </div>
  <Navbar.Brand href="#home" className='text-white fw-bold'>{WASSETRUST}</Navbar.Brand>
  <div className='d-flex justify-content-end'>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className=' d-flex justify-content-end'>
    
    <Navbar className="justify-content-end" >
      
      <div className=''> 
      <Nav.Link href="/" className='px-2 ps-5 ms-5 text-white'>{Home}</Nav.Link>
      </div>
      <div>
      <Nav.Link href="/Activities" className=' px-2 text-white'>{Activities}</Nav.Link>
      </div>
      <div>
      <Nav.Link href="/AboutUs" className=' px-2 text-white'>{AboutUs}</Nav.Link>
      </div>
      <div className='justify-content-end' >
      <Nav.Link href="/DonateUs" className=' px-2 text-white '>{DonateUs}</Nav.Link>
      </div>
      
      
      <div className='justify-content-end' >
      <LanguageSelector/>

      </div>

    </Navbar>
  </Navbar.Collapse>
  </div>
</Navbar> */}

