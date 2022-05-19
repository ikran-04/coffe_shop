import React from "react";
import {BsFillHandbagFill,BsCupFill} from"react-icons/bs"
import {FaSearch} from"react-icons/fa"
import  '../styles/allCss.css'

// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1><BsCupFill/> coffe</h1>
            <ul className="lists">
                <li><a href="/">home</a></li>
                <li><a href="/Products">Products</a></li>
                <li><a href="/Tables">Tables</a></li>
                <li><a href="/Contact us">Contact us</a></li>
                <li><a href="/Help">Help</a></li>
            </ul>
            <div className="btns">
                <button className="shop-btn"><BsFillHandbagFill/></button>
                <button className="search-btn"><FaSearch/></button>
            </div>
        </div>
     );

}
 
export default Navbar;