import React from 'react'
import payment1 from "../assets/Payment1.jpg"
import {useTranslation} from "react-i18next";
import './Donateus.css'
import Canaralogo from '../assets/canara.Logo.png'
import digitalRupee from '../assets/digitalRupee.Logo.png'
import PaymentLogo from '../assets/Digi.logo.png'
import PaymentUpi from '../assets/Payment.upi.logo.png'
import upi from "..//assets/upi.png"
const DonateUs = () => {
  const {t} = useTranslation();
  const {Line1,Line2}=t("Donateus")
  const {Contactnumber}=t("Contactnumber")
  const {Heading,Para1,ParaHeading1,Para2,ParaHeading2,Para3,ParaHeading3,Para4,ParaHeading4,Para5,ParaHeading5,Para6,ParaHeading6,Para7,ParaHeading7,Para8, ParaHeading8,Para9 ,ParaHeading9,Para10,ParaHeading10}=t("DonateUs")
  
  return (
   
    <div className='pt-5 pb-5 ' style={{backgroundColor:"#f9f9f9",}}  >
      
      <div className='mx-5 fw-bold'> 
      <span className='h4 fw-bold' style={{color:"#415a77"}}>{Line1} </span> <span className='h5 fw-bold' style={{color:"#778da9"}} >{Line2}</span><h2 className='fw-bold pt-2' style={{color:"#4a4e69"}}>{Contactnumber}</h2>
      </div>
  
    <div className="container p-5" style={{maxWidth:"450px"}}>


      <div className='' style={{borderRadius:"20px",
      backgroundColor:"#1a3a6a"}}>
       
<div className='d-flex justify-content-center align-items-center pt-4 '>
<img src={PaymentLogo} alt="" style={{maxHeight:"40px",}} className='text-white' />
</div>
<div className='d-flex justify-content-center align-items-center pb-2 '>
<img src={Canaralogo} alt="" style={{maxHeight:"40px",}} className='text-white' />
</div>
{/* <div className='d-flex justify-content-center align-items-center p-1 text-white'> <h6> 
UPI Payments accepted here </h6></div> */}


{/* <div className='d-flex justify-content-center align-items-center pt-1 pb-3 text-secondary'> scan qr to make payment</div> */}
<div className='d-flex p-3 ' >
<div className='mx-auto bg-white p-3 pb-5' style={{borderRadius:"30px", border:"1px solid grey"}}>
<h4 className='text-dark fw-bold mx-auto'>WASSE TRUST</h4>

<img src={payment1} alt="" className='mx-auto ' style={{maxHeight:"150px",
maxWidth:"150px",
outline:"",

}} />  <h6 className='pt-3 '>919443100006@cnrb</h6></div>

</div>
<div className='d-flex justify-content-center align-items-center  '>
<img src={PaymentUpi} alt="" style={{maxHeight:"40px",}} className='text-white' />
</div>
<div className='d-flex justify-content-center align-items-center pt-2  pb-5'>
<img src={digitalRupee} alt="" style={{maxHeight:"40px",}} className='text-white' />
</div>
  {/* d-flex justify-content-center align-items-center  */}
     
    </div>
   


    </div>
    <div className='container-fluid my-5'>
   <h3  className='fw-bold mb-3'style={{color:"#22223b"}}>  {Heading}</h3>
    <ul>
     

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' > {ParaHeading1}</span>
     {Para1}      
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' >{ParaHeading2}</span>
     {Para2}      
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' >{ParaHeading3} </span>
    {Para3}       
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' > {ParaHeading4}   </span>   {Para4}
   
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' >{ParaHeading5} </span>
    {Para5}     
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' >{ParaHeading6} </span>
    {Para6}       
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' > {ParaHeading7}</span>
     {Para7}    
      </li>
      <li className='m-3 h6'>
      <span className='fw-bold h5 pe-2'> {ParaHeading8}  </span>    {Para8}
      </li>
      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-2' >{ParaHeading9}</span>
     {Para9}     
      </li>

      <li className='m-3 h6'>
        <span className='fw-bold h5 pe-1' > {ParaHeading10} </span>
    {Para10}      

      </li>
    </ul>
   </div>



  </div>
  )
}

export default DonateUs