import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import Layout from '../src/Component.jsx/Layout'
import Header from '../src/Component.jsx/Header'
import Footer from '../src/Component.jsx/Footer'
import Everything from'../src/pages/Everything'
import Groceries from'../src/pages/Groceries'
import Juice from'../src/pages/Juice'
import About from'../src/pages/About'
import Contact from'../src/pages/Contact'
import Price from'../src/pages/Price'
import AddCart from'../src/pages/AddCart'
import Login from'../src/pages/Login'
import Provider from './Component.jsx/Provider'
import ProductCount from './SubPages.jsx/ProductCount'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Provider>
    <Header></Header>
       <Routes>
         <Route path="/" element={<Layout/>}/>
         <Route path="/Everything" element={<Everything />}/>
         <Route path="/Groceries" element={<Groceries />/>
         <Route path="/Juice" element={<Juice/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Price" element={<Price/>}/>
         <Route path="/AddCart" element={<AddCart/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/ProductCount" element={<ProductCount/>}/>
       </Routes>
       <Footer></Footer>
       </Provider>
    </BrowserRouter>
   
    </>
  )
}

export default App
