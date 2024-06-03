import React from 'react'

import actImg1 from "../../assets/Covid19/Act1.jpg"

import actImg2 from "../../assets/Covid19/Act2.jpg"
import actImg3 from "../../assets/Covid19/Act3.jpg"

import actImg4 from "../../assets/Covid19/Act4.jpg"

import actImg5 from "../../assets/Covid19/Act5.jpg"

import actImg6 from "../../assets/Covid19/Act6.jpg"

import actImg7 from "../../assets/Covid19/Act7.jpg"

import actImg8 from "../../assets/Covid19/Act8.jpg"

import actImg9 from "../../assets/Covid19/Act9.jpg"

import actImg10 from "../../assets/Covid19/Act10.jpg"


import '../Activites.css'
import { useTranslation} from "react-i18next";


const Covid19 = () => {
 

  const {t} = useTranslation();
  const {Act1,Act2,Act3,Act4,Act5,Act6,Act7,Act8,
    Act9,Act10} = t("Covid19")

   const cardData =[
    {
      id:1,
      content :Act1,
      images :[actImg1]
    
    },
    {
      id:2,
      content :Act2,
      images :[ actImg2]
    },
    {
      id:3,
      content :Act3,
      images:[actImg3]
   
    },
{
  id:4,
  content :Act4,
  images:[actImg4]

},
{
  id:5,
  content :Act5,
  images:[ actImg5]
  
},{
  id:6,
  content :Act6,
  images:[actImg6]
  
},
   {
    id:7,
    content :Act7,
    images: [actImg7]
    
   },
    {
      id:8,
      content :Act8,
      images:[actImg8]
  
    },
    {
      id:9,
      content :Act9,
      images:[actImg9]
      
    },
   {
    id:10,
  content :Act10,
    images: [actImg10]
    
   }
   
   ] 
  return (
    <div className="container-fluid my-5" >
      <div className='container p-2 mt-5 'style={{backgroundColor:"grey"}}>
      {cardData.map((item) => (
      <div key={item.id} className="row align-items-center m-4 p-5 shadow-box " style={{backgroundColor:"#1a3a6a", borderRadius:"20px"}}>
        <div className="col-md-6">
          <img src={item.images} alt={item.description} className="img-fluid" style={{borderRadius:"10px"}}/>
        </div>
        <div className="col-md-6 ">
          <p className='text-white'>{item.content}</p>
        </div>
      </div>
    ))}
      </div>
   
  </div>
  )
}

export default Covid19