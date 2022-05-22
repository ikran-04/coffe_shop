import { useState } from "react";
import {IoMdArrowDropup,IoMdArrowDropdown} from"react-icons/io" ;
import data from '../db.json'

const AddToCart = () => {
    // const navigate=useNavigate()
    const products = data.products;
    const found =products.find(product => product.id===1);
    const [counter, setCounter] = useState(0);

    function AddToCartHandler(){
        // const [orderedProduct,setOrderedProduct]=useState()
    }
    function increase() {
        setCounter(count => count + 1);
      };
      const decrease = () => {
        setCounter(count => count - 1);
      };

    return ( 
        <div className="addToCart">
        <div className="product-image">
            <img src={found.img_url} alt="" />
         
        </div>
        <div className="details">
            <div className="name">
                <h1>{found.title}</h1>
            </div>
            <div className="price">
                <h3>{found.price}$</h3>
            </div>
            <div className="reviews">
                ####
            </div>
            <div className="desciption">
                <p>{found.discription}</p>
                <div className="quantity">
                    <h4>quantity</h4>
                    <button ><span id="quantity">{counter}</span>
                        <div className="btns">
                            <IoMdArrowDropup onClick={()=> {increase()}}/>
                            <IoMdArrowDropdown onClick={()=> {decrease()}}/>
                             </div></button>
                </div>
                <button onClick={()=>{AddToCartHandler()}} className="Add-to-cart">Add to Cart</button>
            </div>
        </div>
    </div>

     );
}
 
export default AddToCart;