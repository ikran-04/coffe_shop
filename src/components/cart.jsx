import {AiOutlineDelete} from"react-icons/ai" ;

const Cart = () => {
    
    return ( 
    <div className="cart">
        <div className="orders">
            <div className="item">
                <div className="item-image">
                    <img src="images/products/pr7.jpg" alt="" />
                    <div className="item-detail">
                    <h2>ice coffe </h2>
                  </div>
                </div>
                <div className="price">
                    <p>29$</p>
                </div>
             
                <div className="delete"><AiOutlineDelete/></div>

            </div>

        </div>
     
    </div>
     );
}
 
export default Cart;