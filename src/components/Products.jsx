import{useEffect,useState} from 'react'
import '../styles/allCss.css';
import { BiHeart, BiCartAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
// import Categories from './Categories';

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

                            <div className='category'>
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
                   Products&& Products.map((product) => {

                        return (

                            <div onClick={() => navigate("/add")} className="product">
                                <img src={product.img_url} alt="" />
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