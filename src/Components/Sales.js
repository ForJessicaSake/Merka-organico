import './Sales.css';
import { Link } from 'react-router-dom';



function Sales({Lists}) {
   
    return (
        <section className="sales-wrapper" id='Sale'>
            <article className='sales-subtitle'>Inventory</article>


            <main className="sales-items">
                {Lists.map((List) => (
                    <section className='groceries' key={List.id}>
                        <div className="image-box">
                            <img src={List.img} alt='case-images'></img>
                            <article className='details'>
                                <p>{List.title}</p>
                                <p className='price'>{List.price}</p>
                              <Link to ={`/Cart/ ${List.id}`}><button className='salesbtn'>Add to Cart</button></Link>
                            </article>
                        </div>
                    </section>
                ))}

            </main>
        </section>
    );
}
export default Sales