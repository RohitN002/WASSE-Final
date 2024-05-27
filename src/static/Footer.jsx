import React from 'react'


import {useTranslation} from "react-i18next";

import ContactUs from '../pages/ContactUs';
import './Footer.css'
const Footer = () => {
  const {t} = useTranslation();

  const {WASSETRUST} =t("Navbar")
  return (
    
    
<div class=" m-0 pt-5" >
 
  <footer
          class=" p-0 m-0 text-white"
          style={{backgroundColor:"#0F56A4"}}
          >
  <h3 className='p-5 mx-5'>
            <p className='kural'>
            பிணியின்மை செல்வம் விளைவின்பம் ஏமம்  <br />
அனியென்ப நாட்டிவ் வைத்து
            </p>
            </h3>
    <hr />
      <section class="">
      
        <div class="row">
         
          <div class="col-md-3 col-lg-3 col-xl-4 mx-auto mt-5 ">
            
          
            
        
            <h5 class="text-uppercase mb-4 fw-bold pt-5">
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

         
          
         

        
          <hr class="w-100 clearfix d-md-none" />

         
       
      </section>
    

      <div class="my-3">

    
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
         
          <div class="col-md-7 col-lg-8 text-center text-md-start">
          
            <div class="p-3">
              © 2024 Copyright:
              <a class="text-white" href="https://wassetrust.org/"
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