import {BsFacebook,BsInstagram,BsTwitter} from"react-icons/bs"
import  '../styles/allCss.css'
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="info">
                <h2>Coffe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vi.</p>
            </div>
            <div className="links">
                <h2>Lorems</h2>
                         <a href="h">About</a>
                         <a href="a">homw</a>
                         <a href="y">you</a>
            </div>
            <div className="social-media">
                <BsFacebook/>
                <BsInstagram/>
                <BsTwitter/>
            </div>
            <div className="map"><iframe title="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.103539419202!2d45.291821035917195!3d2.045545320222652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58420b91f45b93%3A0xee2da9712473db4c!2sHodan%2C%20Mogadishu!5e0!3m2!1sen!2sso!4v1654546898724!5m2!1sen!2sso" 
            ></iframe>
            </div>
        </div>
     );
}
 
export default Footer;