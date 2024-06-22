import React from 'react'
import act1 from "../assets/act1.jpg"


import act3 from "../assets/act3.jpg"

import act4 from "../assets/act4.jpg"

import act5 from "../assets/act5.jpg"

import act6 from "../assets/act6.jpg"

import act7 from "../assets/act7.jpg"

import act8 from "../assets/act8.1.jpg"

import act9 from "../assets/act9.jpg"

import act10 from "../assets/act10.jpg"

import act11 from "../assets/act11.jpg"
import act14 from "../assets/act14.jpg"
import act13 from "../assets/act13.jpg"
import act12 from "../assets/act12.jpg"
import act2 from "../assets/act2.jpg"

import act15 from "../assets/act15.jpg"
import act16 from "../assets/act16.jpg"
import act17 from "../assets/act17.jpg"



import './Activites.css'
import { useTranslation} from "react-i18next";
const Activies = () => {
  const {t} = useTranslation();
  const {activity1,activity2,activity3,activity4,activity5,activity6,activity7,activity8,
    activity9,activity10,activity11,activity12,activity13,activity14,activity15,activity16,activity17} = t("activities")
const {Activities} = t('Navbar')
   const cardData =[
    {
      id:1,
      content :activity1,
      images :[act1]
    
    },
    {
      id:2,
      content :activity2,
      images :[ act2]
    },
    {
      id:3,
      content :activity3,
      images:[act3]
   
    },
{
  id:4,
  content :activity4,
  images:[act4]

},
{
  id:5,
  content :activity5,
  images:[ act5]
  
},{
  id:6,
  content :activity6,
  images:[act6]
  
},
   {
    id:7,
    content :activity7,
    images: [act7]
    
   },
    {
      id:8,
      content :activity8,
      images:[act8]
  
    },
    {
      id:9,
      content :activity9,
      images:[act9]
      
    },
   {
    id:10,
  content :activity10,
    images: [act10]
    
   },
   {
    id:11,
    content :activity11,
    images :[act11]
  
   },
    {
      id:12,
      content :activity12,
      images :[act12]
  
    },
    {
      id:13,
      content :activity13,
      images :[act13]
      
    },
   {
    id:14,
    content :activity14,
    images :[act14]
  
   },
   {
    id:15,
    content :activity15,
    images :[act15]
  
   },
   {
    id:16,
    content :activity16,
    images :[act16]
  
   },
   {
    id:17,
    content :activity17,
    images :[act17]
  
   }
   ] 



  return (
    
    <div className=" mt-5" >
      <div className='container  py-2  '>
        <h3 className='m-4'>{Activities}</h3>
      {cardData.map((item) => (
      <div key={item.id} className="row align-items-center mx-2 m-5 py-3  img-fluid hover-effect" style={{backgroundColor:"#A3DBA6", borderRadius:"20px"}}>
        <div className="col-md-6">
          <img src={item.images} alt={item.description} className="img-fluid" style={{borderRadius:"10px", maxHeight:"300px",width:"500px"}}/>
        </div>
        <div className="col-md-6 mt-4">
          <p className='fw-bold' style={{color:'#508837'}}>{item.content}</p>
        </div>
      </div>
    ))}
      </div>
   
  </div>
  )
  }

export default Activies
//


