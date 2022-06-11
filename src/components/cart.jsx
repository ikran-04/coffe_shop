import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai"
import Cookies from "js-cookie";

import { useState, useEffect } from "react";
import Modal from 'react-modal';

const Cart = () => {
    const [orederdProducts, setOrderedProducts] = useState();
    const [oreders, setOrderes] = useState();
    const userEmail = Cookies.get("userEmail")
    const userId = Cookies.get("userId")

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    // }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const getOrderedProducts = () => {
        fetch("http://localhost:4000/cart")
            .then((res) => {
                return res.json()
            }).then(orderedProducts => {
                // console.log(products)
                setOrderedProducts(orderedProducts)
            })
    }
    const getOrderes = () => {
        fetch("http://localhost:4000/orders")
            .then((res) => {
                return res.json()
            }).then(orders => {
                // console.log(products)
                setOrderes(orders)
            })
    }
    useEffect(() => {
        getOrderedProducts()
    }, [])
    useEffect(() => {
        getOrderes()
    }, [])

    const deleteOrder = (product) => {
        fetch("http://localhost:4000/cart/" + product.id, {
            method: 'DELETE',
        })
            .then((res) => {
                console.log(product)
            })
        window.location.reload(false);
    }
    const compeleteOrder = (orderedProduct) => {
        setIsOpen(true);
        // console.log(orderedProduct)
        window.location.reload(false);
        orederdProducts.forEach((order) => {
            fetch("http://localhost:4000/orders", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then((res) => {
                 console.log(res)
            })

            fetch("http://localhost:4000/cart/" + order.id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderedProduct)
            })
            .then((res) => {
                console.log(res)
            })
        })
    }
    const completed = (orderedProduct) => {
        fetch("http://localhost:4000/orders", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderedProduct)
        })
        .then((res) => {
             console.log(res)
        })
        console.log("console")
        orderedProduct.forEach((order) => {
            console.log(order)
        })
         window.location.reload(false);


        // fetch("http://localhost:4000/cart", {
        //     method: 'DELETE',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(orderedProduct)
        // })
        // .then((res) => {
        //      console.log(res)
        // })
    }

    return (
        <div className="cart">
             <div className="orders">

{orederdProducts &&
    orederdProducts.map((orderedProduct) => {
        return (
            <div className="item" key={orderedProduct.id}>
                <div className="item-image">
                    <img src={orderedProduct.img_url} alt="" />
                    <div className="item-detail">
                        <p>{orderedProduct.title} </p>
                    </div>
                </div>
                <div className="price">
                    <p>price:{orderedProduct.price}$</p>
                </div>

                <div className="quantityy">
                    <p>quantity:{orderedProduct.quantity}</p>
                </div>
                <div className="total">
                    <p>total price:{orderedProduct.price*orderedProduct.quantity}$</p>
                </div>
                
                
                <button onClick={() => deleteOrder(orderedProduct)} className="delete"><AiOutlineDelete /></button>
                <div className='compelete-button'>
                <div className="compelte">
                    <button onClick={() => { compeleteOrder(orderedProduct) }}>compelte</button>
               </div>
                 </div>
            </div>
            
            
        )
        
    })
    
}

<Modal className={"complete-modal"}
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}

>

    <button className="close-btn" onClick={closeModal}><AiOutlineClose /></button>

    <div>
       
       <h1>order Completed</h1> 

    </div>

</Modal>

</div>
        </div>
    );
}

export default Cart;