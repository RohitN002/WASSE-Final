import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import {useTranslation} from "react-i18next";
import './ContactUs.css'
const ContactUs = () => {
  const {t} = useTranslation();
  const {ContactUs,DNo,Street,Area,Dist,State } = t("ContactUs");
  return (

    <div className="container  mt-5 "  style={{maxWidth:"700px",
  }} >
  <div className="row "  >
    
 
        <div className='col p-0 m-0 mx-auto'>

       
  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.2625540515965!2d76.9684653750454!3d11.018917089144974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzA4LjEiTiA3NsKwNTgnMTUuOCJF!5e0!3m2!1sen!2sin!4v1711488766792!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
height={'300px'} width={'400px'} ></iframe>
    </div>
    
    <div className="col card-color " >
      <div className="card-body">
        <div>
        <h5 className="card-title text-center text-white pb- sans-serif fw-bold ">{ContactUs} </h5>
        </div>
        
        <div className="card-text ">
          <ul>
            <li className="li"><p className="  mt-4 pl-5  text-white pb-3 ">
          <FaLocationDot className='white icon-location icon '/> 
          <span>{DNo}</span><br /> 
          <span className='mx-4 text-white'>{Street}</span><br />
          <span className='mx-4 text-white'>{Area}</span><br />
          <span className='mx-4 text-white'>{Dist}</span><br /> 
          <span className='mx-4 text-white'>{State}</span></p>
</li>
            <li className=" li pb-3"><p className="text-white" ><IoCall color='' className=' icon  icon-contact text-4xl'/> 944-310-0006</p>
</li>
            <li className="text-white li pb-3 "><MdEmail className='text-start icon icon-mail white' /> wassetrust@gmail.com
            </li>
          </ul>
          
  </div>
  
       </div>
      </div>
    </div>
    
  </div>


    
  )
}

export default ContactUs
