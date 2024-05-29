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
   
    
        <Navbar expand="lg"sticky='top'  className={navbar? "navbar active ":"navbar "} style={{zIndex:1,borderRadius:"", }}>
           
           {/* {navbar? "navbar active text-dark":"navbar text-secondary"} */}
          <Container className= {navbar? "navbar active bg px-3 shadow-box text-dark":"navbar px-3"} style={{borderRadius:"40px"}}>
          <img src={logo} style={{
maxWidth:'50px',
maxHeight:"50px",

}} className='pe-2'/>
            <Navbar.Brand href="#home" className={navbar ? "navbar  active":"navabar"}>{WASSETRUST}</Navbar.Brand>
            {/* {navbar ? "navbar active":"navabar"} */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Container>
              <Nav className="justify-content-end">
              <Nav.Link href="/" className={navbar ? "navbar  active":"navabar"} >{Home}</Nav.Link>
              {/* {navbar ? "navbar text-white active":"navabar"} */}
              <Nav.Link href="/Activities" className={navbar ? "navbar  active":"navabar"}>{Activities}</Nav.Link>
              {/* {navbar ? "navbar text-white active":"navabar"} */}
              <Nav.Link href="/DonateUs" className={navbar ? "navbar  active":"navabar"}>{DonateUs}</Nav.Link>
              {/* {navbar ? "navbar text-white active":"navabar"} */}
              <NavDropdown title="About" id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="/Trustee">Trustee</NavDropdown.Item>
              <NavDropdown.Item href="/Structure">
                Structure
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Planning</NavDropdown.Item>
           
              <NavDropdown.Item href="#action/3.4">10 Commands</NavDropdown.Item>
              
              <NavDropdown.Item href="/CommunityWelbeing">Community welbening</NavDropdown.Item>
              <NavDropdown.Item href="/FuturePlan">Future Plan</NavDropdown.Item>
              <NavDropdown.Item href="/Covid19">Covid 19</NavDropdown.Item>
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

