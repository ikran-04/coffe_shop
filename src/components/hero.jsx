// import '../images'
import ImgHero from '../images/back.png'
import  '../styles/allCss.css'
const Hero = () => {
    return ( 
        <dev className="Hero">
            <div className="text">
                <h1>REEERERE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                 vulputate libero et velit interdum, ac aliquet
                 consectetur adipiscing elit. Nunc
                 vulputate libero et velit interdum, ac aliquet 
                 consectetur adipiscing elit. Nunc
                 vulputate libero et velit interdum, ac aliquet  </p>
                 <button className='subsBtn'>Subscribe Now</button>
            </div>
            <div className="img">
                <img src={ImgHero} alt="" />
            </div>
        </dev>
     );
}
 
export default Hero;