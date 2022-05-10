import React from "react";


const Groceries= ({ item }) => {
    const {id, title, price, img } = item;
    return (
        <main className="groceries-wrapper">
            <section className="groceries">
                <div className="image-box">
                    <img src={img} alt='case-images'></img>
                </div>
                <article className="details">
                    <p>{title}</p>
                    <p>{price}</p>
                    <button>Add to Cart</button>
                </article>
            </section>
        </main>

    )
}

export default Groceries;