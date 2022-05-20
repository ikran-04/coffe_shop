import productImg from '../images/products/pr2.jpg';
import banner from '../images/categories/sliderBanner.jpg';
import productImage from '../images/products/pr4.jpg';
import {IoIosArrowDropleft,IoIosArrowDropright,IoMdCart} from"react-icons/io" 
import  '../styles/allCss.css'

const Categories = () => {
    return (    
        <div className="categori">
             <div className="slider">
                 <img src={banner} alt="" />
                 <div className="btns">
                    <IoIosArrowDropleft/>
                    <IoIosArrowDropright/>
                 </div>
                 <div className="txt">
                     <h1>The Best Cheap Drink Tea ,Coffe</h1>
                 </div>
             </div>
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
           <div className="AllProducts">
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage}alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage}alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
               <div className="prroduct">
                   <img src={productImage} alt="" />
                   <h3>ICE COFFE</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur </p>
                   <h3>$2</h3>
                   <button>Add To cart <IoMdCart></IoMdCart></button>
               </div>
           </div>
        </div>
        
     );
}
 
export default Categories;