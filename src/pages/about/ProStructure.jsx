import React from 'react'
import progStructure from "../../assets/prog-structure.png"
import { useTranslation} from "react-i18next";
const ProStructure = () => {
  const {t} = useTranslation();
  const {ProStructure,para  } = t("ProgramStructure");

  return (
    <div className='container-fluid py-5'>
        <h3 className='fw-bold p-2'>{ProStructure}</h3>
      <p className='h6 pb-3'>{para}</p>
      <div className='d-flex bg-secondary'> 
      <img src={progStructure} alt="" className='justify-content-center mx-auto p-3'  />
      </div>
     
    </div>
  )
}

export default ProStructure