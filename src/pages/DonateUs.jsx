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
  
  return (
   
    <div className='pt-5 pb-5 ' style={{backgroundColor:"#f9f9f9",}}  >
      
      <div className='mx-5 fw-bold'> <span className='h4 fw-bold' style={{color:"#13213c"}}>{Line1} </span> <span className='h5 fw-bold' style={{color:"#192c4f"}} >{Line2}</span><h2 className='fw-bold pt-2'>{Contactnumber}</h2>
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
<div className='mx-auto bg-white p-3' style={{borderRadius:"30px", border:"1px solid grey"}}>
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
  </div>
  )
}

export default DonateUs