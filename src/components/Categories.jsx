import productImg from '../images/products/pr2.jpg';
import  '../styles/allCss.css'

const Categories = () => {
    return ( 
        <div className="categories">
            <div className="category">
                <img src={productImg} alt="" />
                <h3>Teas</h3>
            </div>
            <div className="category">
                <img src={productImg} alt="" />
                <h3>Teas</h3>
            </div>
            <div className="category">
                <img src={productImg} alt="" />
                <h3>Teas</h3>
            </div>
            <div className="category">
                <img src={productImg} alt="" />
                <h3>Teas</h3>
            </div>
            <div className="category">
                <img src={productImg} alt="" />
                <h3>Teas</h3>
            </div>
            <div className="category">
                <img src={productImg} alt="" />
                <h3>Teas</h3>
            </div>
        </div>
     );
}
 
export default Categories;