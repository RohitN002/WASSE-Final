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
  const {Heading,Para1,ParaHeading1,Para2,ParaHeading2,Para3,ParaHeading3,Para4,ParaHeading4,Para51,Para52,ParaHeading5,Para6,ParaHeading6,Para7,ParaHeading7,Para8, ParaHeading8,Para9 ,ParaHeading9,Para10,ParaHeading10}=t("DonateUs")
  
  return (
   
    <div className='pt-5 pb-5 '  >
      
      <div className='mx-5 fw-bold'> 
      <span className='h4 fw-bold DDes-Hea ' style={{color:'#1F4F21'}}>{Line1} </span> <span className='h5 fw-bold DDes-subHea' style={{color:"#508837"}} >{Line2}</span><h2 className='fw-bold pt-2 D-phNo' >{Contactnumber}</h2>
      </div>
  
    <div className="container p-5" style={{maxWidth:"450px"}}>


      <div className='' style={{borderRadius:"20px",
      backgroundColor:"#1F4F21"}}>
       
<div className='d-flex justify-content-center align-items-center pt-4 '>
<img src={PaymentLogo} alt="" style={{maxHeight:"40px",}} className='text-white' />
</div>
<div className='d-flex justify-content-center align-items-center pb-2 '>
<img src={Canaralogo} alt="" style={{maxHeight:"40px",}} className='text-white' />
</div>

<div className='d-flex p-3 ' >
<div className='mx-auto bg-white p-3 pb-5' style={{borderRadius:"30px", border:"1px solid grey", backgroundColor:"#F2FAF2"}}>
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
  
    </div>
   


    </div>
    <div className='container-fluid my-5'>
   <h3  className=' mb-3 fw-bold 'style={{color:"#1F4F21"}}>  {Heading}</h3>
    <ul>
     

      <li className='m-4 h6'>
        <h5 className='  pe-2 paraHeading fw-bold' > {ParaHeading1}</h5>
    <h6 className='mt-2 DPara'>{Para1}   </h6>     
      </li>

      <li className='m-4 h6'>
        <h5 className='pe-2 paraHeading fw-bold' >{ParaHeading2}</h5>
     <h6 className='mt-2 DPara'>{Para2} </h6>      
      </li>

      <li className='m-4 h6'>
        <h5 className=' pe-2 paraHeading fw-bold' >{ParaHeading3} </h5>
    <h6 className='mt-2 DPara'>{Para3}  </h6>      
      </li>

      <li className='m-4 h6'>
        <h5 className='  pe-2 paraHeading fw-bold' > {ParaHeading4}   </h5>  <h6 className='mt-2 DPara'>  {Para4}</h6>
   
      </li>

      <li className='m-4 h6'>
        <h5 className='  pe-2 paraHeading fw-bold' >{ParaHeading5} </h5> 
   <h6 className='mt-2 DPara' ><span className='fw-bold'>{Para51}  </span>{Para52}    </h6> 
  
      </li>

      


      <li className='m-4 h6'>
        <h5 className=' pe-2 paraHeading fw-bold' > {ParaHeading6}</h5>
    <h6 className='mt-2 DPara'>{Para6}    </h6>
      </li> 


      <li className='m-4 h6'>
        <h5 className=' pe-2 paraHeading fw-bold' > {ParaHeading7}</h5>
    <h6 className='mt-2 DPara'> {Para7}     </h6>
      </li>
      <li className='m-4 h6'>
      <h5 className=' pe-2 paraHeading fw-bold'> {ParaHeading8}  </h5> <h6 className='mt-2 DPara'> {Para8} </h6>  
      </li>
      <li className='m-4 h6'>
        <h5 className='  pe-2 paraHeading  fw-bold' >{ParaHeading9}</h5>
     <h6 className='mt-2 DPara'>{Para9}   </h6>   
      </li>

      <li className='m-4 h6'>
        <h5 className='  pe-1 paraHeading fw-bold' > {ParaHeading10} </h5>
   <h6 className='mt-2 DPara'>  {Para10}  </h6>    

      </li>
    </ul>
   </div>



  </div>
  )
}

export default DonateUs