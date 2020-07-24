import React from 'react'
import './../CSS Files/Header.css'
import Logo from './../logo.jpg'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className="header">
            <Link to="/home">
                <img src={Logo} alt="Logo Image" className="header__image"/>
           </Link>
           <div className="header__search">
               <input type="text" className="header__searchBar"/>
               <SearchIcon className="header__searchIcon"></SearchIcon>
           </div>
           <div className="header__info">
               <div className="header__signIn">
                   <span>Hello</span>
                   <span>Sign In</span>
               </div>
               <Link to="/checkout">
                <div className="header__basket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span>{basket?.length}</span>
               </div>
               </Link>
           </div>
        </nav>
    )
}

export default Header;
