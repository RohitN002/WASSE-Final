import React from 'react'
import orgStructure2 from "../../assets/org-structure.png"
import orgStructure1 from "../../assets/org-structure 1.png"


//org-structure 1
const OrgStructure = () => {
  return (
    <div>
      <div className='container'>
      <h3> Organisational Structure</h3>
     <div className='containter'>


      <p>Keystone’s team is over 150 members strong, including our board of trustees and resource persons, who bring valuable insights from tribal communities across the Nilgiris and Central/Eastern India, as well as marginalized communities in Coimbatore district. Our programme working group members map out workflow and streamline task schedules for each project within the seven programmes (see below). For a full list of ongoing projects, visit our individual programme pages.</p>
      <img src={orgStructure1} alt="" />
     
      <p> Each role is assigned various levels of responsibility, according to the following colour key:</p>
<img src={orgStructure2} alt="" />
      
    </div>
    </div>
    </div>
  )
}

export default OrgStructure