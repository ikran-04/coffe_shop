import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect } from "react";


const Cart = () => {
    const [orederdProducts, setOrderedProducts] = useState();

    const getOrderedProducts = () => {
        fetch("http://localhost:4000/cart")
            .then((res) => {
                return res.json()
            }).then(orderedProducts => {
                // console.log(products)
                setOrderedProducts(orderedProducts)
            })
    }
    useEffect(() => {
        getOrderedProducts()
    }, [])

    const deleteOrder =(product)=>{
        fetch("http://localhost:4000/cart/" + product.id, {
            method: 'DELETE',
        })
        .then((res) => {
           console.log(product)
        })
        window.location.reload(false);
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
                                        <h2>{orderedProduct.title} </h2>
                                    </div>
                                </div>
                                <div className="price">
                                    <p>price:{orderedProduct.price}</p>
                                </div>
                                <div className="compelte">
                                    <button>compelte</button>
                                </div>
                                <button onClick={()=>deleteOrder(orderedProduct) } className="delete"><AiOutlineDelete /></button>
                            </div>

                        )
                    })
                }


            </div>

        </div>
    );
}

export default Cart;