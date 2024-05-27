import React from 'react'
import cwb1 from '../../assets/CWB-1.png'
import cwb3 from '../../assets/CWB-2-1.png'
import cwb2 from '../../assets/CWB-2.png'
const CommunityWelbeing = () => {
  return (
    <div>
        <h2>Community Wellbeing at Keystone</h2>
        <p>The programmes and interventions are designed by viewing “wellbeing” as a concept beyond the set parameters of Human Development Index and through various lenses like livelihood outcomes and political autonomy and its implications on traditional knowledge systems and cultural practices as well as on the mental and physical health of indigenous communities.  </p>
        <h2>Components</h2>
        <p>Community wellbeing is achieved only when the economic, social, physical, psychological, political and cultural conditions of every individual in the community are satisfied. The programme components represent these elements of wellbeing and interventions are designed accordingly by prioritising gender inclusivity, climate change and sustainable outcomes.</p>

        <div>
<img src={cwb1} alt="" />
<p>Facilitating farm- and forest-based livelihoods for indigenous communities. Pro-environment and gender-inclusive approaches contribute to food, economic security as well as enabling farmer linkages to local enterprise and market opportunities. Designing farm-based livelihood options for landless farmers and creating local economies, short supply chains through bio-input production and centralised, cluster-level nurseries that can raise cash crop saplings.</p>
        </div>
        <div>
<img src={cwb2} alt="" />
<p>Based on the belief that land tenure and property rights are paramount to sustainable livelihoods, wellbeing and pro-conservation outcomes, the programme identifies and nurtures local leadership, develop capacities to govern and make decisions that have long-term socio-economic and political implications for the communities, facilitate Forest Rights Act claims and develop capacities for advocacy by strengthening community voices.

</p>
        </div>
        <div>
<img src={cwb3} alt="" />
<p>Ensuring improved health outcomes among communities through preventive health care by promoting better nutritional practices, bridging the gap in accessing timely health care and awareness generation through community health workers. We also identify and train frontline health workers to develop local capacities for sustained efforts on preventive health interventions.

</p>
        </div>
            </div>
  )
}

export default CommunityWelbeing