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

import { useState } from 'react';

import './Activites.css'
import { useTranslation} from "react-i18next";
const Activies = () => {
  const {t} = useTranslation();
  const {activity1,activity2,activity3,activity4,activity5,activity6,activity7,activity8,
    activity9,activity10,activity11,activity12,activity13,activity14,activity15,activity16,activity17} = t("activities")

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

// const MAX_CONTENT_LENGTH = 100;

  // const cardElements = cardData.map((card, index) => {
  //   const content = card.content;
  //   const isContentTruncated = content.length > MAX_CONTENT_LENGTH;
  //   const truncatedContent = content.substring(0, MAX_CONTENT_LENGTH) + "...";
  //   const [isContentExpanded, setIsContentExpanded] = useState(false);

    // const handleReadMore = (event) => {
    //   event.preventDefault(); // Prevent default form submission behavior
    //   setIsContentExpanded(!isContentExpanded);
    // };

  //   return (
  //     <div className="col-lg-6 col-md-6 col-sm-12 mb-5 p-2 pt-3 hover " key={index}  >
  //       <div className="card shadow border-0 rounded-lg overflow-hidden " style={{borderRadius:"10px"}}>
  //         <div className="card-body p-2 d-flex flex-column justify-content-between" style={{background:"#F2F2F2"}} >
  //           <img src={card.images[0]} className="card-img-top img-fluid mb-2"  style={{  maxHeight: '290px',maxWidth:"650px" }}/>
  //           <p className="card-text p-color">
  //             {isContentTruncated && !isContentExpanded ? truncatedContent : content}
  //             {isContentTruncated && (
  //               <a href="#" className="  " style={{ textDecoration:"none"}}onClick={handleReadMore}>
  //                 {isContentExpanded ? "Show Less" : "Read More"}
  //               </a>
  //             )}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    // <div className=" container border border-primary my-5 p-4 "  style={{background:"#0F56A4", }}>
    //   <div className="row">{cardElements}</div>
    // </div>
    <div className="container-fluid mt-5" >
      <div className='container p-2 'style={{backgroundColor:"grey"}}>
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

export default Activies
//


