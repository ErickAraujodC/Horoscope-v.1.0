import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import './App.css'

function App() {
 return(
    <div className="app">
        <Header />
        <div className="back-img">
            <Cards />
        </div>
        <Footer/>
    
    </div>
 )

  
}

export default App
