import React from 'react';
import Groceries from './Groceries';
import List from './data';
import './Sales.css';


function Sales() {
    return (
        <section className="sales-wrapper" id='Sale'>
            <article className='sales-subtitle'>Inventory</article>

            <main className="sales-items">
                {List.map((item) => (
                    <Groceries key={item.id} item={item} />
                ))}
            </main>
        </section>
    );
}
export default Sales