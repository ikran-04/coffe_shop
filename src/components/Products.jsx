import{useEffect,useState} from 'react';
import '../styles/allCss.css';
import { BiHeart, BiCartAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
// import { json } from 'express';


export const addToCart =(product)=>{
    // console.log(product.id)
    // const productId=product.id;
    // const productImg=product.image_url;
    // const productTitle=product.title;
    // const productDiscription=product.discription;
    // const productPrice=product.price;
}
const Products = () => {
    const navigate = useNavigate();
    const [Categories, setCategories] = useState()
    const [Products, setProducts] = useState()

    const getProducts = () => {
        fetch("http://localhost:4000/products")
        .then((res) => {
            return res.json()
        }).then(products => {
            // console.log(products)
            setProducts(products)
        })
    }
    const getCategories = () => {
        fetch("http://localhost:4000/categories")
        .then((res) => {
            return res.json()
        }).then(categories => {
            // console.log(categories)
            setCategories(categories)
        })
    }
    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <div className="products">
            <div className="categories" style={{padding:"5em 0"}}>
                {
                    Categories &&
                    Categories.map((category) => {
                        return (

                            <div className='category' key={category.id}>
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
                   Products && Products.map((product)=> {
                        return (
                            <div key={product.id}  className="product">
                                <img src={product.img_url} onClick={() => navigate("/add")} alt="" />
                                <p>{product.discription}</p>
                                <div className="btns">
                                    <button><BiHeart /></button>
                                    <button onClick={() =>{addToCart(product)}}><BiCartAlt /></button>
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