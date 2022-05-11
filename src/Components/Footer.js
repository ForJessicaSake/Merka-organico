import React from "react";
import './Footer.css';

function Footer() {
    return (

        <section className="footer-wrapper" id="Footer">
            <h1><span>Me</span>rka</h1>

            <div className="footer-text">
                <div>
                    <h1>Main Menu</h1>
                    <p><a href="#Home">Merka</a></p>
                    <p><a href="#Cart">Cart</a></p>
                    <p><a href="#Sale">Items</a></p>
                    <p><a href="#Services">Services</a></p>
                    <p><a href="#Footer">Contact</a></p>

                </div>
                <div>
                    <h1>Quick Links</h1>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                </div>
                <div>
                    <h1>Search</h1>
                    <p>Inventory</p>
                    <p>Food ingredients</p>
                    <p>Fruits</p>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <p>Contact</p>
                    <p>Mail to jessicajoseph2019@yahoo.com</p>
                    <p>Lagos, Nigeria</p>
                    <div className='icons'>
                        <a href="https://github.com/ForJessicaSake "><i class="fa-brands fa-github"></i></a>
                        <a href="https://twitter.com/forJessica_sake"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/jessica-joseph-79629a218/ "><i
                            class="fa-brands fa-linkedin"></i></a>
                    </div>

                </div>
            </div>


        </section>

    )
}

export default Footer;