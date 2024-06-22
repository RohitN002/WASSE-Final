import React,{useState, createContext, } from 'react'
import { useTranslation} from "react-i18next";
import ImageSlider from '../static/ImageSlider';

import './Home.css'
import Card from '../static/Card';


const Home = () => {
 
  const {t} = useTranslation();

const {motive,motiveDes}=t("motive")
const {namereason}=t("namereason")
const {nametitle,motivetitle}=t("name")
const {linee1, linee2,linee3,linee4,linee5,linee6,linee7,linee8,linee9,linee10,linee11,linee12,linee13,linee14,linee15,linee16,linee17} = t("homedescription");




  return (
    <>
   <ImageSlider/>
    <div  className='py-5 my-5'>
      
<div className='container mt-5 mx-auto   fw-bold' style={{outline:"2px solid green ",borderRadius:"40px",backgroundColor:"#A3DBA6"
}}>
<div className='p-3'>
<Card/>
</div>
<div className=' text-content '><p className="text ">{linee1}</p>
  <p className="text ">{linee2}</p>
  <p className="text ">{linee3}</p>
  <p className="text ">{linee4}</p>
  <p className="text ">{linee5}</p>
  <p className="text ">{linee6}</p>
  <p className="text ">{linee7}</p>
  <p className="text ">{linee8}</p>
  <p className="text ">{linee9}</p>
  <p className="text ">{linee10}</p>
  <p className="text ">{linee11}</p>
  <p className="text ">{linee12}</p>
  <p className="text ">{linee13}</p>
  <p className="text ">{linee14}</p>
  <p className="text ">{linee15}</p>
  <p className="text ">{linee16}</p>
  <p className="text mb-5">{linee17}</p>

</div>



<div className='text-white p-3 mt-5'>

  <span className='fw-bold text-white h5 heading-home p-2  ' style={{outline:"2px solid greeen"}}>{motivetitle} :</span>


  <p className=' text- pt-4 ps-3 mb-3'>{motive}</p>
  <div className='d-flex'>
  <span className='mx-auto  motive-des p-2 mb-4'>{motiveDes}</span>
  </div>

</div>
<div className='pb-5  p-3'>
  <span className='fw-bold text-white h5 p-2 heading-home' style={{color:""}}>{nametitle} :</span>
  <p className='text- p-2 ps-3 pt-4'>{namereason}</p>
</div>

 
    </div>

 </div>

 </>
  )}
  export default Home
    

