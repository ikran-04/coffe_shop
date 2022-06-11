import{useEffect,useState} from 'react';
import '../styles/allCss.css';
import { BiHeart, BiCartAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import Modal from 'react-modal';
import {AiOutlineClose} from "react-icons/ai"

const Products = () => {
    const navigate = useNavigate();
    const [Categories, setCategories] = useState()
    const [Products, setProducts] = useState()
    const userEmail =Cookies.get("userEmail")
    let subtitle;
    const [modalIsOpen, setIsOpen] =useState(false);
    const [error, setError]=useState();
    const[users ,setUsers]=useState();



    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    const getProducts = () => {
        fetch("http://localhost:4000/products")
        .then((res) => {
            return res.json()
        }).then(products => {
            // console.log(products)
            setProducts(products.slice(0,10))
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

   
    const addToCart=(product)=>{
        if(userEmail){
        navigate(`/add/${product.id}`)
        }
        else{
            openModal()
        }
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
    const addToFavorites=(product)=>{
        const userEmail =Cookies.get("userEmail")
        if(userEmail){
            fetch("http://localhost:4000/favorites", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((res) => {
                console.log(res)
            })
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
                                <img src={product.img_url} onClick={() =>{addToCart(product)}} alt="" />
                                <p>{product.discription}</p>
                                <div className="btns">
                                    <button onClick={() =>{addToFavorites(product)}}><BiHeart /></button>
                                    <button onClick={() =>{addToCart(product)}}><BiCartAlt /></button>
                                </div>
                            </div>
                        )
                    })                                                                                                                                                                                       
                }
            </div>
            <div>
                <div className="seeAll">
                    <button><a href="/products">See more</a> </button>
                </div>
            </div>
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
    );
}

export default Products;