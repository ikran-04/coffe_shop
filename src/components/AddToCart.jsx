import {IoMdArrowDropup,IoMdArrowDropdown} from"react-icons/io" ;
import { useNavigate } from "react-router-dom";
const AddToCart = () => {
    const navigate=useNavigate()
    return ( 
        <div className="addToCart">
            <div className="product-image">
                <img src="images/products/pr4.jpg" alt="" />
             
            </div>
            <div className="details">
                <div className="name">
                    <h1>Ice Coffe</h1>
                </div>
                <div className="price">
                    <h3>2$</h3>
                </div>
                <div className="reviews">
                    ####
                </div>
                <div className="desciption">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, sit laboriosam possimus nemo atque a totam architecto 
                        temporibus officiis vitae iusto eaque repellendus fuga ratione?</p>
                    <div className="quantity">
                        <h4>quantity</h4>
                        <button>0
                            <div className="btns">
                                <IoMdArrowDropup/><IoMdArrowDropdown/>
                                 </div></button>
                    </div>
                    <button onClick={()=> navigate("/cart")} className="Add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default AddToCart;