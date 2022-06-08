import '../styles/favoritePage.css';
import {FiLogOut} from"react-icons/fi"
import{useEffect,useState} from 'react';
import { BiHeart, BiCartAlt } from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";
import {IoIosRemoveCircle} from "react-icons/io";
import {MdShoppingCart} from "react-icons/md";
import Cookies from "js-cookie";



// import { IoMdSearch } from "react-icons/io";


const Favorites = () => {
    const userEmail =Cookies.get("userEmail")
    
    const [Products, setProducts] = useState()

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
    useEffect(() => {
        getProducts()
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
        window.location.reload(true);

    }
    return ( 
        <div className="favorites">
            <div className="my-account">
                <div className="profile">
                    <div><img src="images/tea.jpg" alt="" /></div>
                    <div>
                        <h4>user name</h4>
                        <p>user@gmail.com</p>
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
                                    <button><BiCartAlt /></button>
                                    <button onClick={()=>{removeFavorite(product)}}><IoIosRemoveCircle /></button>
                                </div>
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
