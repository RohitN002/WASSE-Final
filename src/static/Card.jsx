import React from 'react'

const Card = () => {
  return (
    <div className="card text-center mt-5 m-5 mx-auto" style={{maxWidth:"700px"}} >
  <div className="row g-0">
    <div className="col-md-4" >
      <img src="https://i2.wp.com/hindupad.com/wp-content/uploads/Thiruvalluvar.jpg?fit=1054%2C1190&ssl=1" className="img-fluid rounded" alt="valluvar img"/>
    </div>
    <div className="col-md-8 text-center" style={{backgroundColor:"#0F56A4"}}>
      <div className="card-body">
        <h5 className="card-title fw-bold text-white pt-4">திருக்குறள்</h5>
        <div className="card-text text-white">
           <p className=" mt-5 mb-3">
    பிணியின்மை செல்வம் விளைவின்பம் ஏமம்  
அனியென்ப நாட்டிவ் வைத்து </p> <br />
<p className=''>
நோய் இல்லாமை , செல்வம் , விளைச்சல் , மகிழ்ச்சி , நல்ல காவல் இவை ஐந்தும் ஒரு நாட்டிற்கு அழகு.</p>

       
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Card