import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Increase from "./components/Increase"
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
     <Header /> 
     <ImageSlider />
    <Increase /> 
    
  
  </div>
)
