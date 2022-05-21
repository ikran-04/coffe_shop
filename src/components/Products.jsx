import  '../styles/allCss.css';
import {BiHeart,BiCartAlt} from"react-icons/bi" ;

const Products = () => {
    return ( 
        <div className="Products">
                <hr/>
            <div className="topCategories">
                <div>
                    <img src="images/coffe.jpg"alt="" />
                    <p>coffe</p>
                </div>
                <div>
                    <img src="images/iceCoffe.jpg" alt="" />
                    <p>tea</p>
                </div>
                <div>
                    <img src="images/tea.jpg" alt="" />
                    <p>cake</p>
                </div>
                <div>
                    <img src="images/cake.png" alt="" />
                    <p>iceCoffe</p>
                </div>
            </div>
            <h1 style={{textAlign:"center"}}>Popular Products</h1>
``             <div className="pr" style={{backgroundImage: `url(images/products/background.jpg)`,backgroundRepeat: 'no-repeat',  width: '100%',height: '50%'}}>
                    <div className="topProducts">                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button><BiHeart/></button>
                            <button><BiCartAlt/></button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>                
                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>                
                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src="images/products/pr5.jpg" alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                   </div>
            </div>
            
            
        </div>
     );
}

export default Products;