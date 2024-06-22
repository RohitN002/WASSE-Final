import React from 'react'
import orgStructure2 from "../../assets/org-structure.png"
import orgStructure1 from "../../assets/org-structure 1.png"
import './OrgStructure.css'
import { useTranslation} from "react-i18next";
//org-structure 1
const OrgStructure = () => {
  const {t} = useTranslation();
  const {OrgStructure,Para,H1 } = t("OrganisationalStructure");
  return (
    <div className='m-3'>
      <div className='container'>
      <h3 className='mb-3 Heading'>{OrgStructure} </h3>
     <div className='containter'>


      <p className='h6 Para' style={{color:"#f4a261"}}>{Para}</p>
      <div className='m-5'>
      {/* style={{maxWidth:"700px",borderRadius:"50px"}} */}
      <div className=" d-flex p-3  mx-auto shadow-box" style={{maxWidth:'500px', boxShadow:"0px 2px 5px black", borderRadius:"20px"}}>

<img src={orgStructure1} alt="" className='mx-auto img-org'/>
</div >
      </div>
     
     
      <p className='h6 fw-bold ParaHeading' style={{color:"#dc2f02"}}>{H1} </p>
      <div className='m-5'> 
      <div className=' d-flex p-3 m-3 mx-auto shadow-box'style={{maxWidth:'500px', boxShadow:"0px 2px 5px black", borderRadius:"20px"}}> 

<img src={orgStructure2} alt="" className='mx-auto img-org' />
</div>
      </div>
      
      
    </div>
    </div>
    </div>
  )
}

export default OrgStructure