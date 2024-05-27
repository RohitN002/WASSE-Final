import React from 'react'
import Card from '../static/Card'
import {useTranslation} from "react-i18next";
import ContactUs from './ContactUs';
const AboutUs = () => {
  const {t} = useTranslation();
  const {line1, line2,line3,line4,line5,line6,line7,line8} = t("aboutus1");
  const {aim}=t("aim")
  const {line11, line21,line31,line41,line51,line61,line71,line81,line91,line101,line111,line121} = t("aboutus2");
  const ai = {aim}
  const Text2 = [line11, line21,line31,line41,line51,line61,line71,line81,line91,line101,line111,line121]
  const Text = [line1, line2,line3,line4,line5,line6,line7,line8]
  return (
    <div className='container font-weight-bold  pb-5 mb-5'>
      
    <Card/>
    <h3 className="text-center mt-5 pt-5 fw-bold">{aim}</h3>
    <div className="text-center p-5">
    {
  Text.map((Text)=>(
    <div className='p-1 fw-bold' key={Text}>
    <span >{Text}</span>
    <br/>
    </div>
  ))
  }
    </div>
   
  <div className='text-center p-5'>
  {
  Text2.map((Text)=>(
    <div className='p-1 fw-bold' key={Text}>
    <span >{Text}</span>
    <br/>
   
    </div>
  ))
  }
  </div>
  
  </div>
    
  )
}

export default AboutUs