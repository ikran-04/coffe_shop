// import {react} from 'react'
import {BsArrowRight} from"react-icons/bs"

import  '../styles/allCss.css'

const Tables = () => {
    return ( 
        <div className="tables">
                <h1>Meet Our barista</h1>
                <p style={{textAlign:"center", width:"500px",margin:"auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis?</p>
            <div className="meet-our-barista">
                <div className="baristas">
                    <div className="barista">
                            <img src="images/our-barista/barista1.jpg" alt="" />
                        <div className="barista-detail">
                            <h2>john tony</h2>
                             <h5> tea brewer</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="barista">
                            <img src="images/our-barista/barista2.jpg" alt="" />
                        <div className="barista-detail">
                            <h2>Emma William</h2>
                             <h5>  pastry chef </h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="barista">
                            <img src="images/our-barista/barista3.jpg" alt="" />
                        <div className="barista-detail">
                            <h2>Isabella James</h2>
                             <h5>Barista</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="barista">
                            <img src="images/our-barista/barista4.jpg" alt="" />
                        <div className="barista-detail">
                            <h2>Noah Liam</h2>
                             <h5> coffee cherry</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dishes" style={{backgroundImage: `url(images/tables/dishesBack.jpg)` ,width: '100%',height: '50%'}}>
                <div className='dishe'>
                    <img src="images/tables/dishes.png" alt="" />
                    <button className='btn'>See All <BsArrowRight/></button>
                </div>
            </div>
        </div>
     );
}
 
export default Tables;