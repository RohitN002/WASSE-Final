import Carousel from 'react-bootstrap/Carousel';
import water from "../assets/water.jpg"
import air from "../assets/air.jpg"
import sun from "../assets/sun.jpg"
import sky from "../assets/sky.jpeg"
import earth from "../assets/earth.jpg"
import './Imageslider.css'


function ImageSlider() {
  const image1 = water
  const image2 = air
  const image3 = sun
  const image4 = sky
  const image5 = earth
  return (
    <Carousel className='fixed-image' style={{position:"sticky"}} >
      <Carousel.Item interval={2000} className='' >
        <img src={image1}  text="First slide" className='img img-fluid'/>
        <Carousel.Caption>
          <h3 className='fw-bold'>Water</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={image2} text="Second slide" width={"900px"} className='img'/>
        <Carousel.Caption>
          <h3 className='fw-bold'>Air</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={image3} text="Third slide" className='img'/>
        <Carousel.Caption>
          <h3 className='fw-bold'>Sun</h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500} >
        <img src={image4}  text="First slide" className='img'/>
        <Carousel.Caption>
          <h3 className='fw-bold'>Sky</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500} >
        <img src={image5}  text="First slide" className='img' />
        <Carousel.Caption>
          <h3 className='fw-bold'>Earth</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
