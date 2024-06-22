import React from 'react'
import cwb1 from '../../assets/CWB-1.png'
import cwb3 from '../../assets/CWB-2-1.png'
import cwb2 from '../../assets/CWB-2.png'
import { useTranslation} from "react-i18next";
import './CommunityWelbeing.css'
const CommunityWelbeing = () => {
        const {t} = useTranslation();
  const {Heading,p1,Heading2,p2,p3,p4,p5 } = t("CommunityWelbeing");
  return (
    <div className='my-4 p-1'>
        <div className='container-fluid '>

   
        <h2 className='my-3'style={{color:"#1F4F21"}}>{Heading}</h2>
        <p style={{color:"#3d652a"}}> {p1}</p>
        <h2 style={{color:"#1F4F21"}}>{Heading2}</h2>
        <p className='m-3 mb-4' style={{color:"#3d652a"}}>{p2}</p>

<div className='row d-flex  mt-3'style={{border:"5px solid green "}}>

        <div className=' col col-md-4 col-sm-12'style={{border:" 5px solid green "}}>
                <div className='d-flex m-4'> 
                <img src={cwb1} alt="" className='mx-auto' />
                </div>

<p className='color '>{p3}</p>
        </div>
        <div className=' col col-md-4 sm-12 ' style={{border:" 5px solid green "}}>
                <div className='d-flex m-3'>
                <img src={cwb2} alt="" className='m-2 mx-auto'/>
                </div>

<p className='color'>
{p4}
</p>
        </div>
        <div className='col col-md-4 sm-12 ' style={{border:" 5px solid green "}}> 
        <div className='d-flex m-4'>
        <img src={cwb3} alt="" className='mx-auto' />
        </div>

<p className='color'>
{p5}
</p> 
</div>
</div>
        </div>
            </div>     
  )
}

export default CommunityWelbeing