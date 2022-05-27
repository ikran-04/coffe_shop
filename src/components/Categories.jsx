import { IoMdCart ,IoMdSearch} from "react-icons/io";
import SimpleImageSlider from "react-simple-image-slider";
import '../styles/allCss.css';
import { useEffect, useState } from "react";
// import { faChessBishop } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    const [Categories, setCategories] = useState()
    const [Products, setProducts] = useState()
    const [filterredProducts,setFilterredProducts]=useState()
    const [images,setImages]=useState()
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
            setFilterredProducts(products)
        })
    }
    const getImages = () => {
        fetch("http://localhost:4000/images")
        .then((res) => {
            return res.json()
        }).then(images => {
            // console.log(products)
            setImages(images)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        getImages()
    }, [])

    // function AddToCart(id){
        
    //     // setAddedProducts(
    // }
    //searchi function handler
    const searcgHandler= (e)=>{
        const filteredArray=Products.filter((product)=> product.title === e.target.value);
        console.log(filteredArray)
        if(filteredArray.length === 0){
           setFilterredProducts(Products)
        }else{
        setFilterredProducts(filteredArray)
        console.log(filterredProducts)
        }
      }
    
   
   
    return (
        <div className="categori">
            <div className="slider">
               <div>
                    {/* <SimpleImageSlider
                        width={1200}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    /> */}
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
            <div className="serachProducts">
                    <input id="search" type="text" placeholder="Search Product" onChange={searcgHandler} />
                    <button ><IoMdSearch/></button>
                </div>
                {
                    filterredProducts && filterredProducts.map((filteredProduct) => {

                        return (
                            <div className="prroduct" >
                                <img src={filteredProduct.img_url} alt="" />
                                <h3>{filteredProduct.title}</h3>
                                <p>{filteredProduct.discription}</p>
                                <h3>{filteredProduct.price}$</h3>
                                <button>Add To cart <IoMdCart></IoMdCart></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Categories;