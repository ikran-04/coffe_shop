import '../styles/favoritePage.css';
import {FiLogOut} from"react-icons/fi"
import{useEffect,useState} from 'react';
import { BiHeart, BiCartAlt } from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";
import {IoIosRemoveCircle} from "react-icons/io";
import {MdShoppingCart} from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";



// import { IoMdSearch } from "react-icons/io";


const Favorites = () => {
    const navigate =useNavigate()
    const userEmail =Cookies.get("userEmail")
    
    const [Products, setProducts] = useState()
    const [ordered, setOrdered] = useState()
    const userId= Cookies.get("userId")

    const getProducts = () => {
        if(userEmail)
        fetch("http://localhost:4000/favorites")
        .then((res) => {
            return res.json()
        }).then(products => {
            // console.log(products)
            setProducts(products)
        })
    }
    const getOrdered = () => {
        if(userEmail)
        fetch("http://localhost:4000/orders")
        .then((res) => {
            return res.json()
        }).then(ordered => {
            // console.log(products)
            setOrdered(ordered)
        })
    }
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        getOrdered()
    }, [])

    const removeFavorite =(product)=>{
        fetch("http://localhost:4000/favorites/" + product.id, {
            method: 'DELETE',
        })
        .then((res) => {
           console.log(product)
        })
        window.location.reload(false);
    }
    const logout=()=>{
        Cookies.remove("userEmail");
        Cookies.remove("userId");
        Cookies.remove("userPassword");
        Cookies.remove("userName");
        window.location.reload(true);

    }
    const addToCart = (product) => {
        
        navigate('/cart')
        console.log(product)
        product["userId"] = userId

        fetch("http://localhost:4000/cart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((res) => {
                console.log(res)
            })
        
        
    }
    return ( 
        <div className="favorites">
            <div className="my-account">
                <div className="profile">
                    <div className='img'></div>
                    <div>
                        <h4>{Cookies.get("userName")}</h4>
                        {/* <p>{Cookies.get("userEmail")}</p> */}
                    </div>
                </div>
                <div>
                <ul>
                    <li>
                        <AiFillHeart/>
                        <a href="">Favorites</a></li>
                    <li>
                        <MdShoppingCart/>
                        <a href="">Orders</a></li>
                </ul>
                </div>
                
                <button className='logout' onClick={()=>{logout()}}><FiLogOut/>LOgout</button>
            </div>
            <div className="favorite-items">
              <div className='fav-seacrhing'>
                  <div>
                  <h1>Favorites</h1>
                  <p>find your saved items and get ready to order them</p>
                  </div>
                    <div className="search">
                        <input type="text" placeholder='search...' />
                    </div>
              </div>
              <div className='favorite-products'>
              {
                   Products && Products.map((product)=> {
                        return (
                            <div key={product.id}  className="product">
                                <img src={product.img_url} alt="" />
                                <p>{product.discription}</p>
                                <div className="btns">
                                    <button onClick={() =>{addToCart(product)}}><BiCartAlt /></button>
                                    <button onClick={()=>{removeFavorite(product)}}><IoIosRemoveCircle /></button>
                                </div>
                            </div>
                        )
                    })                                                                                                                                                                                       
                }
              </div>
              <h1>Ordered items</h1>
              <div className='ordered-products'>
              {
                   ordered && ordered.map((order)=> {
                        return (
                            <div key={order.id}  className="product">
                                <img src={order.img_url} alt="" />
                                <h4>{order.title}</h4>
                            </div>
                        )
                    })                                                                                                                                                                                       
                }
              </div>
            </div>
        </div>
     );
}
 
export default Favorites;
