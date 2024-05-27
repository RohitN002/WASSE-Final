import AboutUs from './pages/AboutUs'
import Activies from './pages/Activies'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './static/Navbar'

import {Routes,Route} from 'react-router-dom'
import Footer from './static/Footer'
import "./App.css";
import "./index.css"
import DonateUs from './pages/DonateUs'



const App = () => {


  
  return (
    
      <BrowserRouter>
       
    <Navbar/>
    
   
    <Routes>
      <Route path='/' element={<Home />} ></Route>  
          <Route path='/AboutUs' element={<AboutUs />} ></Route>
      <Route path='/Activities' element={<Activies />} ></Route>
      <Route path='/ContactUs' element={<ContactUs />} ></Route>
    <Route  path='/DonateUs' element={<DonateUs/>} ></Route>
    
    </Routes>
   
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App