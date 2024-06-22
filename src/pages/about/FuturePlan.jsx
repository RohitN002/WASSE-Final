import React from 'react'
import { useTranslation} from "react-i18next";
import { MdArrowRight } from "react-icons/md";
import './FututrePlan.css'
const FuturePlan = () => {
  const {t} = useTranslation();
  const {Heading,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15 } = t("FuturePlan");
  return (
    <div className='m-3'>
    <div className='container-fluid'>
    <h3 className='mb-4 fw-bold heading'>{Heading}</h3> 
      <ul>

  
  
      <h3 className='fw-bold'></h3>
      <li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P1}</li>
<li className='my-3 li-st'><MdArrowRight className="icon col" />{P2}</li>

<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P3}</li>



<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P4} </li>

<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P5} </li>


<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P6}</li>


<li className='my-3 li-st'><MdArrowRight className="icon col" />{P7}
</li>

<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P8}</li>




<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P9}</li>


<li className='my-3 li-st'><MdArrowRight className="icon col" />{P10}</li>


<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P11}</li>

<li className='my-3 li-st'> <MdArrowRight  className="icon col"/>{P12}</li>



<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P13}</li> 


<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P14}</li>

<li className='my-3 li-st'><MdArrowRight  className="icon col"/>{P15}</li>
</ul>


      </div></div>
  )
}

export default FuturePlan