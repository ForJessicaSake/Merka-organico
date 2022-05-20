import React from 'react';
import './customer.css';
import customer2 from '../images/happycustomer2.png'
import customer3 from '../images/happycustomer3.png';



function Customer() {
    return (
        <section className='customer-wrapper' id='customer-reviews'>
            <h1 className='subtitle'> Say Hi To Our Happy Customers</h1>
            <div className='carousel'>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={customer3} alt="customer"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={customer2} alt="customer"></img>
                        </div>
                    </div>
                </div>
                <p className='review'> Thanks to Merka, I don't stress to get groceries.</p>
            </div>
        </section>
    )
}

export default Customer;