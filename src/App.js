import React from 'react';
import './App.css';
import Header from './Coponents/JSX Files/Header';
import Home from './Coponents/JSX Files/Home';
import Checkout from './Coponents/JSX Files/Checkout';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
          <Route path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/checkout">
              <Checkout></Checkout>
          </Route>
      </Routes>
      </div>
  );
}

export default App;
