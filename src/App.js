import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sales from './Components/Sales';
import Services from './Components/Services'
import Footer from './Components/Footer'

function App(){
        return (
            <div className='App'>
                <Navbar />
                <Hero />
                <Sales/>
                <Services/>
                <Footer />
            </div>     
        );
    }


export default App;