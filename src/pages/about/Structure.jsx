import React from 'react'
import orgStructure2 from "../../assets/org-structure.png"
import orgStructure1 from "../../assets/org-structure 1.png"
import progStructure from "../../assets/prog-structure.png"

//org-structure 1
const Structure = () => {
  return (
    <div>
      <h3> Organisational Structure</h3>
     <div className='containter'>


      <p>Keystone’s team is over 150 members strong, including our board of trustees and resource persons, who bring valuable insights from tribal communities across the Nilgiris and Central/Eastern India, as well as marginalized communities in Coimbatore district. Our programme working group members map out workflow and streamline task schedules for each project within the seven programmes (see below). For a full list of ongoing projects, visit our individual programme pages.</p>
      <img src={orgStructure1} alt="" />
     
      <p> Each role is assigned various levels of responsibility, according to the following colour key:</p>
<img src={orgStructure2} alt="" />
      <h3>Programme Structure</h3>
      <p>Keystone operates its eco-development work across the following seven thematic areas or ‘programmes’. Teams under all programme include roles mentioned in the organisational structure. Each programme works to achieve a mix of several of the United Nations Sustainable Development Goals listed below. All programmes are approached in an intersectional manner, with cross-sectoral activities mindfully planned to meet goals, be it through consulting barefoot expertise for building tribal archives within the People and Nature Collectives programme, adopting a gender justice lens within the Climate Change programme, or prioritising disaster responsiveness within the Organisational Development programme.</p>
      <img src={progStructure} alt="" />
    </div>
    </div>
  )
}

export default Structure