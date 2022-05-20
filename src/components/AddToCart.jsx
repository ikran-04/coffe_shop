const AddToCart = () => {
    return ( 
        <div className="addToCart">
            <div className="product-image">
                <img src="images/products/pr4.jpg" alt="Product-image" />
                {/* <div className="otherSides">
                    <img src="images/products/pr1.jpg" alt="" />
                    <img src="images/products/pr1.jpg" alt="" />
                    <img src="images/products/pr1.jpg" alt="" />
                </div> */}
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
                        <h4>Quantity <span>0</span></h4>  
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default AddToCart;