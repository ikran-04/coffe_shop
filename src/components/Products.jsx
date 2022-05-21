import '../styles/allCss.css';
import { BiHeart, BiCartAlt } from "react-icons/bi";
import data from '../db.json'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const products = data.products;
    const categories = data.categories;
    return (
        <div className="products">
            <div className="topCategories">
                {
                    categories.map((category) => {
                        return (

                            <div>
                                <img src={category.image_url} alt="" />
                                <p>{category.categoryName}</p>
                            </div>
                        )
                    })
                }
            </div>
            <h1 style={{ textAlign: "center" }}>Popular Products</h1>
            <div className="topProducts">
                {
                    products.map((product) => {

                        return (

                            <div onClick={() => navigate("/add")} className="product">
                                <img src="images/products/pr5.jpg" alt="" />
                                <p>{product.discription}</p>
                                <div className="btns">
                                    <button><BiHeart /></button>
                                    <button><BiCartAlt /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;