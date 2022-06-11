import React from "react"
import { useState,useEffect } from "react";
import {IoMdArrowDropup,IoMdArrowDropdown} from"react-icons/io" ;
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AddToCart = () => {
    const {productId}=useParams()
    const [Products, setProducts] = useState([])
    const navigate=useNavigate()

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
        getProducts()
        // getdata()
    }, [])
    // fil[][]
    const addToCartt =async (found, count) => {
        // fetch("http://localhost:4000/cart/" + found.id).then((res) => {
        //     return res.json()
        // }).then((prod) => {
            
        //    if(prod.id == found.id){
        //        console.log(prod.id == found.id)
        //        return 
        //    }
        found["quantity"] = count
        // })
        const res = await fetch("http://localhost:4000/cart/" + found.id)
        const data = await res.json()
        if(Object.keys(data).length !== 0){
            console.log("data :" + data)
            fetch("http://localhost:4000/cart/" + found.id, {
                method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "quantity": counter           // we are changing the "likes" value to 5
                  }
            )

            })
            navigate('/cart')
            return
        }
       
        
        // console.log(found )
        fetch("http://localhost:4000/cart", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(found)

        })
        .then((res) => {
            navigate('/cart')
           console.log(res)
        })
    }
    const found = Products.find(prod => prod.id == productId)

    const [counter, setCounter] = useState(1);
    function increase() {
        setCounter(count => count + 1);
      };
      const decrease = () => {
          if(counter <= 1){
              return
          }
        setCounter(count => count - 1);
      };

    let body = null
    if (found){
        body = <>
        <div className="addToCart">
        <div className="product-image">
            <img src={found.img_url} alt="" />
        </div>
        <div className="details">
            <div className="name">
                <h1>{found.title}</h1>
            </div>
            <div className="price">
                <h3>{found.price}$</h3>
            </div>
            <div className="reviews">
                ####
            </div>
            <div className="desciption">
                <p>{found.discription}</p>
                <p>{found.details}</p>
                <div className="quantity">
                    <h4>quantity</h4>
                    <button ><span id="quantity">{counter}</span>
                        <div className="btns">
                            <IoMdArrowDropup onClick={()=> {increase()}}/>
                            <IoMdArrowDropdown onClick={()=> {decrease()}}/>
                             </div></button>
                </div>
                <button onClick={() => addToCartt(found, counter)} className="Add-to-cart">Add to Cart</button>
            </div>
        </div>
        </div>
          
        </>
    }
    return ( 
        <div className="addToCart">
{body}

    </div>

     );
}
 
export default AddToCart;