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
    <div className='container-fluid'>
   <h3  className='fw-bold'>  Your Donation Makes a Difference in our Nation</h3>
    <ul>
      <li className='m-3'>
      <span className='fw-bold h5 pe-2'> Direct Impact:  </span> Your donation goes directly to supporting the cause you care about. Whether it's funding scholarships, providing medi/cal supplies, or planting trees, you'll see the tangible results of your generosity.
      </li>
      <li className='m-3'>
        <span className='fw-bold h5 pe-2' >Empowering Communities:</span>
        Together, we uplift those in need. Your contribution helps us provide crucial services and opportunities, fostering a brighter future for vulnerable communities.
      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-1' > Investing in Potential: </span>
        We believe in empowering individuals. Your donation allows us to offer skills training, educational resources, or microloans, equipping people with the tools they need to build a better life. 

      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' > Transparency You Can Trust:</span>
        We are committed to open communication. You'll have access to detailed reports on our website or annual updates showcasing how your donation is used.
      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' >Tax Advantage:</span>
         Your generosity is rewarded. The Indian government offers tax deductions for donations made to registered trusts under Section 80G of the Income Tax Act.

      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' > Creating Lasting Change:</span>
        Your contribution has a ripple effect. It could fund a program that educates future leaders, equip healthcare workers, or safeguard endangered species for generations to come.
      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' >    Become a Changemaker: </span>
     You're not just a donor, you're a partner in progress. By supporting our trust, you actively contribute to building a more just and equitable society.
      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' > Every Rupee Counts: </span>
        No contribution is too small. Together, your collective generosity allows us to achieve our ambitious goals. Every rupee you donate makes a difference!
      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' > Building a Stronger India:</span>
         Your support empowers us to invest in the future. By focusing on education and healthcare, we're building a healthier, more skilled workforce for a prosperous India.
      </li>

      <li className='m-3'>
        <span className='fw-bold h5 pe-2' >  The Power of Giving:</span>
        Thank you for believing in our work. Your act of giving is incredibly rewarding. You're making a positive impact and creating a better future for all.
      </li>

    </ul>
   </div>



  </div>
  )
}

export default DonateUs