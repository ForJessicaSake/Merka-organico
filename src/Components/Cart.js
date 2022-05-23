import React from "react";
import "./Cart.css";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Cart({ Lists }) {
  const { id } = useParams()
  return (
    <div className="cart-details">
      <h1>The cart page is still a work in progress... - {id}</h1>
      {Lists.map((List) => (
        List && { id } && <article key={List.id} className="cart">
          <img src={List.img} alt='case-images'></img>
          <p>{List.title}</p>
          <div className="cart-button">
            <button>-</button>
            <input type={Cart}></input>
            <button>+</button>
          </div>
          <p className='price'>{List.price}</p>
        </article>
      ))}
      <hr className="line"></hr>
      <section className="total">
        <Link to='/' > <button>Empty Cart</button></Link>
        <p>Total Price - $</p>
      </section>

    </div>
  );
}

export default Cart;
