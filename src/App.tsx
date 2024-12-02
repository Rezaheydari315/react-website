import { Footer } from './components/Footer/Footer.tsx'
import { Home } from './components/Home/Home.tsx'
import  Login  from './components/Login/Login'
import {Product} from './components/Product/Product.tsx'

import { Routes ,Route } from 'react-router-dom'




import './App.css'




function App() {
 
  return (
    <>
    <div> 
     
    <Routes>
      <Route path='/' element={ <Home></Home>}></Route>
      <Route path='/Home' element={ <Home></Home>}></Route>
      <Route path='/Login' element={<Login></Login> }> </Route>
      <Route path='/Product' element={ <Product></Product> }> </Route>
    </Routes>

     <Footer/>
    </div>
    </>
  )
}

export default App
