import { IoMdCart, IoMdSearch } from "react-icons/io";
import SimpleImageSlider from "react-simple-image-slider";
import '../styles/allCss.css';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";



const images = [
    {
        "url": "images/categories/sliderBanner.jpg"
    },
    {
        "url": "images/categories/banner2.jpg"
    },
    {
        "url": "images/categories/banner3.jpg"
    },
    {
        "url": "images/categories/banner4.jpg"
    }
];

const Categories = () => {
    const navigate = useNavigate();
    const [Categories, setCategories] = useState()
    const [Products, setProducts] = useState()
    const [filterredProducts, setFilterredProducts] = useState()

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
                setFilterredProducts(products)
            })
    }
    
    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [])
   
    const addToCart = (prod) => {
        navigate('/cart')
        console.log(prod)
        fetch("http://localhost:4000/cart", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        })
            .then((res) => {
                console.log(res)
            })
    }
   
    //searchi function handler
    const searcgHandler = (e) => {
        const filteredArray = Products.filter((product) => product.title === e.target.value);
        if (filteredArray.length === 0) {
            setFilterredProducts(Products)
        } else {
            setFilterredProducts(filteredArray)
        }
    }
    const foundedList=filterredProducts ? filterredProducts.length : 0;;
    console.log(foundedList)
    
   
    const addToCartt = (filteredProduct) => {
        navigate(`/add/${filteredProduct.id}`)
    }
    const addToFavorites=(filteredProduct)=>{
        const userEmail =Cookies.get("userEmail")
        if(userEmail){
            fetch("http://localhost:4000/favorites", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filteredProduct)
        })
            .then((res) => {
                console.log(res)
            })
        }
        
    }

    return (
        <div className="categori">
            <div className="slider">
                <div>
                    <SimpleImageSlider
                        width={"100%"}
                        height={"60vh"}
                        images={images}
                        showBullets={true}
                        showNavs={true}


                    />
                </div>
            </div>


            <div className="categories">
                {Categories &&
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

                <div className="serachProducts">
                    <div className="number-of-filtered-products">
                        <p><span>{foundedList}</span> products</p>
                    </div>
                    <input id="search" type="text" placeholder="Search Product" onChange={searcgHandler} />
                    <button ><IoMdSearch /></button>

                </div>
                {
                    filterredProducts && filterredProducts.map((filteredProduct) => {

                        return (
                            <div className="prroduct" key={filteredProduct.id} >
                                <img src={filteredProduct.img_url} onClick={() => { addToCartt(filteredProduct) }} alt="" />
                                <div className="Product-info">
                                     <BiHeart onClick={()=>{addToFavorites(filteredProduct)}} className="heart-icon"/>
                                    <h3>{filteredProduct.title}</h3>
                                    <p>{filteredProduct.discription}</p>
                                    <h3>{filteredProduct.price}$</h3>
                                </div>
                                <button onClick={() => addToCart(filteredProduct)}>Add To cart <IoMdCart></IoMdCart></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Categories;