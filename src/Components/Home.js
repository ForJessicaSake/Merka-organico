import React from 'react';
import Hero from './Hero';
import Sales from './Sales';
import Services from './Services';
import Footer from './Footer';
import Customer from './customer';

function Home() {
    return (
            <div className='Home'>
                    <Hero />
                    <Sales/>
                    <Services/>
                    <Customer/>
                    <Footer/>
            </div>
    );
}

export default Home;