import React, { useEffect } from 'react';
import { useState} from 'react';
// import Groceries from './Groceries';
import './Sales.css';


function Sales() {
    const [Lists, setLists] = useState(null);
 
useEffect(()=>{
    fetch("http://localhost:5000/List")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        setLists(data);
    });
}, []);
    return (
        <section className="sales-wrapper" id='Sale'>
            <article className='sales-subtitle'>Inventory</article>

            <main className="sales-items">
                { Lists && Lists.map((List) => (
                    <section className='groceries' key={List.id}>
                        <div className="image-box">
                            <img src={List.img} alt='case-images'></img>
                            <article className='details'>
                                <p>{List.title}</p>
                                <p className='price'>{List.price}</p>
                                <button>Add to Cart</button>
                            </article>
                        </div>
                    </section>
                ))}

            </main>
        </section>
    );
}
export default Sales