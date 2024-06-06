import React from 'react'
import progStructure from "../../assets/prog-structure.png"
import { useTranslation} from "react-i18next";
const ProStructure = () => {
  const {t} = useTranslation();
  const {ProStructure,para  } = t("ProgramStructure");

  return (
    <div className='container py-3'>
        <h3 className='fw-bold py-2' style={{color:"#e63946"}}>{ProStructure}</h3>
      <p className=' pb-3' style={{color:"#1d35579"}}>{para}</p>
      <div className='d-flex bg-secondary'> 
      <img src={progStructure} alt="" className='justify-content-center mx-auto p-3'  />
      </div>
     
    </div>
  )
}

export default ProStructure