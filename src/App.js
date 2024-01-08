 import React from 'react'
 import './App.css'
 
 import {Footer, Blog, Possibility, Features, WhatGTP3, Header} from './containers'
 import {Brand, Cta, Navbar} from './components'
 
 const App = () => {
   return (
     <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGTP3/>
      <Features/>
      <Possibility/>
      
      <Cta/>
      <Blog/>
      <hr></hr>
        <h1 style={{color:"#fff"}}>footer at 02:55 </h1>
      <hr></hr>
      <Footer/>
      
        </div>
   )
 }
 export default App


 /*
          
 
 
 
 */