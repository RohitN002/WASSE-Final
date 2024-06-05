import React from 'react'
import { useTranslation} from "react-i18next";
const FuturePlan = () => {
  const {t} = useTranslation();
  const {Heading,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15 } = t("FuturePlan");
  return (
    <div className='m-3'>
    <div className='container'>
    <h3 className='mb-4 fw-bold'>{Heading}</h3> 
      <ul>

  
      <h3 className='fw-bold'></h3>
      <li className='my-3'>{P1}</li>
<li className='my-3'>{P2}</li>
<li className='my-3'>{P3}</li>


<li className='my-3'>{P4} </li>
<li className='my-3'>{P5} </li>

<li className='my-3'>{P6}</li>

<li className='my-3'>{P7}
</li>
<li className='my-3'>{P8}</li>



<li className='my-3'>{P9}</li>

<li className='my-3'>{P10}</li>

<li className='my-3'>{P11}</li>
<li className='my-3'> {P12}</li>


<li className='my-3'>{P13}</li>

<li className='my-3'>{P14}</li>
<li className='my-3'>{P15}</li>
</ul>


      </div></div>
  )
}

export default FuturePlan