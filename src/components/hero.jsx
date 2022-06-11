import  '../styles/allCss.css'
const Hero = () => {
    return ( 
        <div className="Hero">
            <div className="text">
                <h1>The Cave Coffe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                 vulputate libero et velit interdum, ac aliquet
                 consectetur adipiscing elit. Nunc
                 vulputate libero et velit interdum, ac aliquet   </p>
                 <div className="hero-btns">
                 <button className='subsBtn'>Subscribe Now</button>
                 <button className='Watch-sBtn'>Watch Now</button>
                 </div>
            </div>
            <div className="img">
                <img src="images/back.png"alt="" />
            </div>
        </div>
     );
}
 
export default Hero;