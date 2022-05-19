import react from 'react';
import tea from '../images/coffe.jpg';
import coffe from '../images/tea.jpg';
import background from '../images/products/background.jpg';
import cake from '../images/cake.png';
import iceCoffe from '../images/iceCoffe.jpg';
import productOne from '../images/products/pr1.jpg';
import  '../styles/allCss.css'

const Products = () => {
    return ( 
        <div className="Products">
                <hr/>
            <div className="topCategories">
                <div>
                    <img src={coffe}alt="" />
                    <p>coffe</p>
                </div>
                <div>
                    <img src={tea} alt="" />
                    <p>tea</p>
                </div>
                <div>
                    <img src={cake} alt="" />
                    <p>cake</p>
                </div>
                <div>
                    <img src={iceCoffe} alt="" />
                    <p>iceCoffe</p>
                </div>
            </div>
            <h1 style={{textAlign:"center"}}>Popular Products</h1>
``             <div className="pr" style={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',  width: '100%',height: '50%'}}>
                    <div className="topProducts">                
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>                
                
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>                
                
                    <div className="product">
                        <img src={productOne} alt="" />
                        <p>Lorem ispum super cake</p>
                        <div className="btns">
                            <button>love</button>
                            <button>left</button>
                        </div>
                    </div>
                
                    <div className="product">
                        <img src={productOne} alt="" />
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