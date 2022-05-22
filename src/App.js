import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                        <Route exact path='/Cart'>
                            <Cart />
                        </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;