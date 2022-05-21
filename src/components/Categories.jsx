import { IoIosArrowDropleft, IoIosArrowDropright, IoMdCart } from "react-icons/io"
import '../styles/allCss.css';
// import AddToCart from "./AddToCart"
import data from '../db.json'
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const products = data.products;
    const categories = data.categories;
    const navigate = useNavigate()
    return (
        <div className="categori">
            <div className="slider">
                <img src="images/categories/sliderBanner.jpg" alt="" />
                <div className="btns">
                    <IoIosArrowDropleft />
                    <IoIosArrowDropright />
                </div>
                <div className="txt">
                    <h1>The Best Cheap Drink Tea ,Coffe</h1>
                    <button className="watch-Now">Whatch Now</button>
                </div>
            </div>
            <div className="categories">
                {
                    categories.map((category) => {
                        return (

                            <div className="category">
                                <img src={category.image_url} alt="" />
                                <h3>{category.categoryName}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <div className="AllProducts">
                {
                    products.map((product) => {

                        return (
                            <div onClick={() => navigate("/add")} className="prroduct">
                                <img src={product.img_url} alt="" />
                                <h3>{product.title}</h3>
                                <p>{product.discription}</p>
                                <h3>{product.price}$</h3>
                                <button onClick={() => navigate("/add")} > Add To cart <IoMdCart></IoMdCart></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Categories;