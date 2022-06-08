import react from 'react'
import { useState } from "react";
import {BsFillHandbagFill,BsCupFill} from"react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineBars} from"react-icons/ai"
import {BiHeart} from"react-icons/bi"
import Modal from 'react-modal';
import  '../styles/allCss.css'
import Cookies from "js-cookie";
import {useEffect} from "react";
import { useNavigate, useRoutes } from "react-router-dom";
const Navbar = () => {
  // const navigate =useNavigate();
  // const route = useRoutes()

    let subtitle;
    const [modalIsOpen, setIsOpen] =useState(false);
    const[users ,setUsers]=useState();
    const goToCart =()=>{
      // navigate('/cart')
    }
    const goToFavorites=()=>{
      // navigate('/add ')

    }
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
  const getUser = () => {
    fetch("http://localhost:4000/users")
    .then((res) => {
        return res.json()
    }).then(users => {
        setUsers(users)
    })
  }
    useEffect(() => {
      getUser()
  }, [])

  const loginHandler=(e)=>{
    const foundEmail = users.find(user => user.email === e.target.Email.value)
    e.preventDefault();
    if(foundEmail.email===e.target.Email.value){
       Cookies.set("userEmail",foundEmail.userName)
       window.location.reload(false);

    }
    else{
      console.log('we don get it')
    }
  }

  const userEmail =Cookies.get("userEmail")
  console.log(userEmail)

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
                <button className="shop-btn"><a href='/favorites' ><BiHeart/></a></button>
               <button className="shop-btn"><a href='/cart' ><BsFillHandbagFill/></a></button>
                { userEmail ?<div className="user-account"><div className="image"></div> <a href="/">{userEmail}</a></div> : <button className="login" onClick={openModal}>Login</button>}
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
                    <form onSubmit={(e)=> loginHandler(e)}>
                    <h1 style={{textAlign:"center"}}>LOGIN</h1>
                      <label htmlFor="email">Email or Phone</label>
                      <input type="text" name="email" id="Email" />
                      <label htmlFor="password">Paswsord</label>
                      <input type="password" name="password" id="password" />
                      <a href="/">forget Password</a>
                      <button type="submit">LOGIN</button>
                      <p  style={{textAlign:"center"}}>not a member? <a href="/registration" >SIGN UP</a></p>
                    </form>
                  </Modal>
                     </div>
    </>
        
     );

}
 
export default Navbar;