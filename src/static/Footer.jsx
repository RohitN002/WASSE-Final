import React from 'react'


import {useTranslation} from "react-i18next";

import ContactUs from '../pages/ContactUs';
import './Footer.css'
const Footer = () => {
  const {t} = useTranslation();

  const {WASSETRUST} =t("Navbar")
  return (
    
    
<div className=" m-0 pt-5" >
 
  <footer
          className=" p-0 m-0 text-white"
          style={{backgroundColor:"#4a4e69"}}
          >
  <h3 className='p-5 mx-5'>
            <p className='kural'>
            பிணியின்மை செல்வம் விளைவின்பம் ஏமம்  <br />
அனியென்ப நாட்டிவ் வைத்து
            </p>
            </h3>
    <hr />
      <section className="">
      
        <div className="row">
         
          <div className="col-md-3 col-lg-3 col-xl-4 mx-auto mt-5 ">
            
          
            
        
            <h5 className="text-uppercase mb-4 fw-bold pt-5">
              {WASSETRUST}
            </h5>
           
          </div>
          
{/* 
          <hr class="w-100 clearfix d-md-none" /> */}
{/* 
          <div className='justify-content-end'> */}
<ContactUs/>
</div>
        {/* </div> */}

         
          
         

        
          <hr className="w-100 clearfix d-md-none" />

         
       
      </section>
    

      <div className="my-3">

    
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
         
          <div className="col-md-7 col-lg-8 text-center text-md-start">
          
            <div className="p-3">
              © 2024 Copyright:
              <a className="text-white" href="https://wassetrust.org/"
                 >wassetrust.org</a
                >
            </div>
            
          </div>
          
          
         
        </div>
      </section>
   
    </div>
  


  </footer>
 
</div>

  


    
  
  )
}

export default Footer