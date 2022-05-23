import React from "react"
import {BsFillHandbagFill,BsCupFill} from"react-icons/bs"
import {AiOutlineBars} from"react-icons/ai"
// import { useNavigate } from "react-router-dom"
import  '../styles/allCss.css'

// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Navbar = () => {

    return ( 
        <div className="navbar">
           
            <h1><BsCupFill/> coffe</h1>
            <ul className="lists">
                <li><a href="/">home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/tables">Tables</a></li>
                {/* <li><a href="/contact us">Contact us</a></li> */}
                <li><a href="/help">Help</a></li>
            </ul>
            <div className="btns">
                <button className="shop-btn"><BsFillHandbagFill/></button>
                <button className="login">Login</button>
            </div>
            <div className="menu-btn">
                <AiOutlineBars/>
            </div>
        </div>
     );

}
 
export default Navbar;