import React from 'react'
import orgStructure2 from "../../assets/org-structure.png"
import orgStructure1 from "../../assets/org-structure 1.png"

import { useTranslation} from "react-i18next";
//org-structure 1
const OrgStructure = () => {
  const {t} = useTranslation();
  const {OrgStructure,Para,H1 } = t("OrganisationalStructure");
  return (
    <div className='m-5'>
      <div className='container-fluid'>
      <h3 className='mb-3'>{OrgStructure} </h3>
     <div className='containter'>


      <p className='h6'>{Para}</p>
      <div className='m-5'>
      <div className="bg-secondary d-flex p-3  mx-auto" style={{maxWidth:"700px",borderRadius:"50px"}}>

<img src={orgStructure1} alt="" className='mx-auto'/>
</div >
      </div>
     
     
      <p className='h6 fw-bold '>{H1} </p>
      <div className='m-5'> 
      <div className='bg-success d-flex p-3 m-3 mx-auto'style={{maxWidth:"700px",borderRadius:"50px"}}> 

<img src={orgStructure2} alt="" className='mx-auto' />
</div>
      </div>
      
      
    </div>
    </div>
    </div>
  )
}

export default OrgStructure