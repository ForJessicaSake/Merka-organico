import React from "react";
import "./Services.css";
import servicesimg from '../Images/service.png';

function Services() {
  return (
    <section className="services-wrapper" id="Services">
        <main className="services-text">
              <article className="services-subtitle">
                  <h1>Why Choose Us?</h1>
              </article>
              <article className="services-title-text">
                  <div className="box">
                      <h3><i class="fa-solid fa-square-check"></i></h3>
                      <h2>Easy to order</h2>
                      <p>With one click  you can get any inventory of your choice in less than 30 minutes</p>
                  </div>
                  <div className="box">
                      <h3><i class="fa-solid fa-square-check"></i></h3>
                      <h2>Fast Delivery</h2>
                      <p>At Merka, we offer you the fastest delivery you'd ever experience in a lifetime.</p>
                  </div>
                  <div className="box">
                      <h3><i class="fa-solid fa-square-check"></i></h3>
                      <h2>Secure Payments</h2>
                      <p>All our payment platforms are secure, safe and easy to use.</p>
                  </div>
              </article>
        </main>
        <aside>
            <img src={servicesimg} alt='women'></img>
        </aside>
    </section>
  );
}
export default Services;
