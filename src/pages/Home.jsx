import React,{useState, createContext, } from 'react'
import { useTranslation} from "react-i18next";
import ImageSlider from '../static/ImageSlider';

import './Home.css'
import Card from '../static/Card';


const Home = () => {
  const MyContext = createContext();
  const [selectedCategory, setSelectedCategory] = useState('motive');
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const {t} = useTranslation();
  const {line1, line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17} = t("description");
  const {description}=t("homedescription")
const Text = [line1, line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17]
const {motive,motiveDes}=t("motive")
const {namereason}=t("namereason")
const {nametitle,motivetitle}=t("name")

// const paragraphs ={
//   motive:[motive],namereason:[namereason]
// }




  
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setCurrentParagraphIndex(0); // Reset index when category changes
//   };



  return (
    <>
   <ImageSlider/>
    <div  className='py-5 my-5'>
      
<div className='container mt-5 mx-auto   fw-bold' style={{outline:"2px solid ",borderRadius:"40px",backgroundColor:"#1a3a6a"
}}>
<div className='p-3'>
<Card/>
  <p  className='text'> {description}</p>
</div>
<div className='text-white p-3'>
  <h5 className='fw-bold text-white'>{motivetitle} :</h5>
  <p className='text'>{motive}</p>
  <div className='d-flex'>
  <p className='mx-auto'>{motiveDes}</p>
  </div>

</div>
<div className='pb-5  p-3'>
  <h5 className='fw-bold text-white' style={{color:""}}>{nametitle} :</h5>
  <p className='text p-2'>{namereason}</p>
</div>

 
    </div>

 </div>

 </>
  )}
  export default Home
    

