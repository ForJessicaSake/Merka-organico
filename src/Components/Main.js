import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Cart from './Cart';

function Main() {

    const Lists =[
        {
            id: 1,
            title: "Strawberry",
            price: "$9",
            img: "../Images/strawberry.png"
        },
        {
            id: 2,
            title: "Banana",
            price: "$5",
            img: "../Images/banana.png"
        },

        {
            id: 3,
            title: "Coconut",
            price: "$7",
            img: "../Images/coconut.png"
        },
        {
            id: 4,
            title: "Orange",
            price: "$3",
            img: "../Images/orange.png"
        },
        {
            id: 5,
            title: "Lime",
            price: "$4",
            img: "../Images/lime.png"
        },
        {
            id: 6,
            title: "Pineapple",
            price: "$10",
            img: "../Images/pineapple.png"
        },
        {
            id: 7,
            title: "Carrot",
            price: "$6",
            img: "../Images/carrot.png"
        },
        {
            id: 8,
            title: "Onion",
            price: "$2",
            img: "../Images/onion.png"
        },
        {
            id: 9,
            title: "Avocado",
            price: "$10 ",
            img: "../Images/avocado.png"
        },
        {
            id: 10,
            title: "Tomato",
            price: "$3",
            img: "../Images/tomato.png"
        },
        {
            id: 11,
            title: "Egg",
            price: "$1",
            img: "../Images/egg.png"
        },
        {
            id: 12,
            title: "Green Pepper",
            price: "$2",
            img: "../Images/greenpepper.png"
        },
        {
            id: 13,
            title: "Apple",
            price: "$10",
            img: "../Images/apple.png"
        },
        {
            id: 14,
            title: "Grape",
            price: "$10",
            img: "../Images/grape.png"
        },
        {
            id: 15,
            title: "Watermelon",
            price: "$5",
            img: "../Images/watermelon.png"
        }
    ];

    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home Lists={Lists}/>
                    </Route>
                        <Route exact path='/Cart/:id'>
                            <Cart Lists = {Lists}/>
                        </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Main;