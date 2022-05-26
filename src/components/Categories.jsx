import { IoIosArrowDropleft, IoIosArrowDropright, IoMdCart } from "react-icons/io"
import '../styles/allCss.css';
import { useEffect, useState } from "react";

const Categories = () => {
    const [Categories, setCategories] = useState()
    const [Products, setProducts] = useState()
    // const [AddedProduct, setAddedProducts] = useState()



    const getCategories = () => {
        fetch("http://localhost:4000/categories")
        .then((res) => {
            return res.json()
        }).then(categories => {
            // console.log(categories)
            setCategories(categories)
        })
    }


    const getProducts = () => {
        fetch("http://localhost:4000/products")
        .then((res) => {
            return res.json()
        }).then(products => {
            // console.log(products)
            setProducts(products)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [])

    function AddToCart(){
        // console.log(Product.id)
    }
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
                { Categories &&
                    Categories.map((category) => {
                        return (

                            <div className="category" key={category.id}>
                                <img src={category.image_url} alt="" />
                                <h5 className="categoryName">{category.categoryName}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <div className="AllProducts">
                {
                    Products&& Products.map((product) => {

                        return (
                            <div className="prroduct">
                                <img src={product.img_url} alt="" />
                                <h3>{product.title}</h3>
                                <p>{product.discription}</p>
                                <h3>{product.price}$</h3>
                                <button onClick={AddToCart} > Add To cart <IoMdCart></IoMdCart></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Categories;