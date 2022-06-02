import React from "react"
import {BsFillHandbagFill,BsCupFill} from"react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineBars} from"react-icons/ai"
import Modal from 'react-modal';
import  '../styles/allCss.css'

// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Navbar = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return ( 
        <>
        <div className="navbar">
            <h1 ><BsCupFill/> coffe</h1>
            <ul className="lists">
                <li><a href="/">home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
            <div className="nav-btns">
                <button className="shop-btn"><BsFillHandbagFill/></button>
                <button className="login" onClick={openModal}>Login</button>
            </div>
            <div className="menu-btn">
                <AiOutlineBars/>
            </div>
            </div>
                  <div >
                  <Modal  className={"modal"}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                  >
                    <button className="close-btn" onClick={closeModal}><AiOutlineClose/></button>
                    {/* <div>I am a modal</div> */}
                    <form>
                    <h1 style={{textAlign:"center"}}>LOGIN</h1>
                      <label htmlFor="email">Email or Phone</label>
                      <input type="text" name="Email" id="Email" />
                      <label htmlFor="password">Paswsord</label>
                      <input type="password" name="password" id="password" />
                      <a href="/">forget Password</a>
                      <button>LOGIN</button>
                      <p  style={{textAlign:"center"}}>not a member? <a href="/registration" >SIGN UP</a></p>
                    </form>
                  </Modal>
                     </div>
    </>
        
     );

}
 
export default Navbar;