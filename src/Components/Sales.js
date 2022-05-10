import React from 'react';
import Groceries from './Groceries';
import List from './data';
import './Sales.css';


function Sales() {
    return (
        <section className="sales-wrapper">
            <article className='sales-subtitle'> Our Top Selling Items This Month</article>

            <main className="sales-items">
                {List.map((item) => (
                    <Groceries key={item.id} item={item} />
                ))}
            </main>
        </section>
    );
}
export default Sales;