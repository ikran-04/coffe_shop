// import {react} from 'react'
import {BsArrowRight} from"react-icons/bs"

import  '../styles/allCss.css'

const Tables = () => {
    return ( 
        <div className="tables">
            <h1>Most Popular Dishes</h1>
            <div className="table">
                <div className='col-1'>
                    <h2>Make your Table </h2>
                    <p>You can  Order  A Table You And YOur  Freinds Or Family this called the magic table
                    A Table You And YOur  Freinds Or Family this called the magic table
                    </p>
                    <button>Order Now</button>
                </div>
                <div className='col-2'>
                   <img src="images/tables/table.jpg"alt="" />
                </div>
            </div>
            <div className="dishes" style={{backgroundImage: `url(images/tables/dishesBackground.png)` ,width: '100%',height: '50%'}}>
                <div className='dishe'>
                    <img src="images/tables/dishes.png" alt="" />
                    <button className='btn'>See All <BsArrowRight/></button>
                </div>
            </div>
        </div>
     );
}
 
export default Tables;