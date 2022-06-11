import { IoMdCart, IoMdSearch } from "react-icons/io";
import SimpleImageSlider from "react-simple-image-slider";
import '../styles/allCss.css';
import Cookies from "js-cookie";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"




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
    const userEmail =Cookies.get("userEmail")

    let subtitle;
    const [modalIsOpen, setIsOpen] =useState(false);

    const navigate = useNavigate();
    const [Categories, setCategories] = useState()
    const [Products, setProducts] = useState()
    const [filterredProducts, setFilterredProducts] = useState()
    const[users ,setUsers]=useState();
    // const [userId,setUserId]=useState();
    const userId= Cookies.get("userId")
    const [error, setError]=useState()

    // console.log(userId)


    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
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
        if(userEmail){
            navigate('/cart')
        console.log(prod)
        prod["userId"] = userId

        fetch("http://localhost:4000/cart",{
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
        }else{
            openModal()
        }
        
    }
   
    // searchi function handler
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
    const getUser = () => {
        fetch("http://localhost:4000/users")
        .then((res) => {
            return res.json()
        }).then(users => {
            setUsers(users)
        })
      }
        useEffect(() => {
          getUser()
      }, [])
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
        }else{
            openModal()
        }
        
    }
    const loginHandler=(e)=>{
        const foundEmail = users.find(user => user.email === e.target.Email.value)
        e.preventDefault();
        if(foundEmail.email===e.target.Email.value &&foundEmail.password===e.target.password.value){
           Cookies.set("userEmail",foundEmail.email)
           Cookies.set("userId",foundEmail.id)
           Cookies.set("userName",foundEmail.userName)
           Cookies.set("userPassword",foundEmail.password)
           window.location.reload(false);
    
        }
        else{
          setError("some thing wrong pls check your email or password")
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
                                    <h3>{filteredProduct.title}</h3>
                                    <p>{filteredProduct.discription}</p>
                                    <h3>{filteredProduct.price}$</h3>
                                    <BiHeart onClick={()=>{addToFavorites(filteredProduct)}} className="heart-icon"/>

                                </div>
                                
                                <button onClick={() => addToCart(filteredProduct)}>Add To cart <IoMdCart></IoMdCart></button>
                            </div>
                        )
                    })
                    
                }
                <div >
                  <Modal  className={"modal"}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                  >
                    <button className="close-btn" onClick={closeModal}><AiOutlineClose/></button>
                    {/* <div>I am a modal</div> */}
                    <form onSubmit={(e)=> loginHandler(e)}>
                    <h1 style={{textAlign:"center"}}>LOGIN</h1>
                    <p className="error">{error}</p>
                      <label htmlFor="email">Email or Phone</label>
                      <input type="text" name="email" id="Email" />
                      <label htmlFor="password">Paswsord</label>
                      <input type="password" name="password" id="password" />
                      <a href="/">forget Password</a>
                      <button type="submit">LOGIN</button>
                      <p  style={{textAlign:"center"}}>not a member? <a href="/registration" >SIGN UP</a></p>
                    </form>
                  </Modal>
                     </div>
            </div>
        </div>
    );
}

export default Categories;