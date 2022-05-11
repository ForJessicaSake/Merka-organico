import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sales from './Components/Sales';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Customer from './Components/customer';

function App(){
        return (
            <div className='App'>
                <Navbar />
                <Hero />
                <Sales/>
                <Services/>
                <Customer/>
                <Footer />
            </div>     
        );
    }

export default App;