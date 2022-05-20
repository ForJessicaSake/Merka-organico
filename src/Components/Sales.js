import React, { useEffect } from 'react';
import { useState } from 'react';
import './Sales.css';


function Sales() {
    const [Lists, setLists] = useState([
        {
            id: 1,
            title: "Strawberry ",
            price: "$25",
            img: "../Images/strawberry.png"
        },
        {
            id: 2,
            title: "Banana",
            price: "$30",
            img: "../Images/banana.png"
        },

        {
            id: 3,
            title: "Coconut",
            price: "$40",
            img: "../Images/coconut.png"
        },
        {
            id: 4,
            title: "Orange",
            price: "$10 ",
            img: "../Images/orange.png"
        },
        {
            id: 5,
            title: "Lime",
            price: "$5 ",
            img: "../Images/lime.png"
        },
        {
            id: 6,
            title: "Pineapple",
            price: "$60",
            img: "../Images/pineapple.png"
        },
        {
            id: 7,
            title: "Carrot",
            price: "$15",
            img: "../Images/carrot.png"
        },
        {
            id: 8,
            title: "Onion",
            price: "$10",
            img: "../Images/onion.png"
        },
        {
            id: 9,
            title: "Avocado",
            price: "$25 ",
            img: "../Images/avocado.png"
        },
        {
            id: 10,
            title: "Tomato",
            price: "$15",
            img: "../Images/tomato.png"
        },
        {
            id: 11,
            title: "Egg",
            price: "$5",
            img: "../Images/egg.png"
        },
        {
            id: 12,
            title: "Green Pepper",
            price: "$10",
            img: "../Images/greenpepper.png"
        },
        {
            id: 13,
            title: "Apple",
            price: "$70",
            img: "../Images/apple.png"
        },
        {
            id: 14,
            title: "Grape",
            price: "$100",
            img: "../Images/grape.png"
        },
        {
            id: 15,
            title: "Watermelon",
            price: "$20",
            img: "../Images/watermelon.png"
        }
    ]);


    useEffect(() => {
        console.log('useEffect is active')
        // setTimeout(() => {
        //     fetch('http://localhost:4000/List')
        //         .then(res => {
        //             return res.json();
        //         })
        //         .then(data => {
        //             setLists(data);
        //         });
        // }, 5000);
    }, []);
    return (
        <section className="sales-wrapper" id='Sale'>
            <article className='sales-subtitle'>Inventory</article>

            <main className="sales-items">
                { Lists.map((List) => (
                    <section className='groceries' key={List.id}>
                        <div className="image-box">
                            <img src={List.img} alt='case-images'></img>
                            <article className='details'>
                                <p>{List.title}</p>
                                <p className='price'>{List.price}</p>
                                <button className='salesbtn'>Add to Cart</button>
                            </article>
                        </div>
                    </section>
                ))}

            </main>
        </section>
    );
}
export default Sales