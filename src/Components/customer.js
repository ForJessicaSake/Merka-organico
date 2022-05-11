import React from 'react';
import './customer.css';
import customer2 from '../Images/happycustomer2.png'
import customer3 from '../Images/happycustomer3.png';



function Customer() {
    return (
        <section className='customer-wrapper' id='customer-reviews'>
            <h1>Customer Reviews</h1>
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
                <p className='review'> Thanks to Merka, I don't have to stress get groceries.</p>
            </div>
        </section>
    )
}

export default Customer;