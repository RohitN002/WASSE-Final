import React from 'react'
import progStructure from "../../assets/prog-structure.png"
import { useTranslation} from "react-i18next";
const ProStructure = () => {
  const {t} = useTranslation();
  const {ProStructure,para  } = t("ProgramStructure");

  return (
    <div className='container-fluid py-3'>
        <h3 className='fw-bold py-2' style={{color:"#1F4F21"}}>{ProStructure}</h3>
      <p className=' pb-3' style={{color:"#3d652a"}}>{para}</p>
      <div className='d-flex  mx-auto' style={{maxWidth:'500px', boxShadow:"0px 2px 5px black", borderRadius:"20px"}}> 
      <img src={progStructure} alt="" className='justify-content-center mx-auto p-3'  />
      </div>
     
    </div>
  )
}

export default ProStructure