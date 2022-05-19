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
                <ul>
                    <li>
                         <a href="h">About</a>
                    </li>
                    <li>
                         <a href="a">homw</a>
                    </li>
                    <li>
                         <a href="y">you</a>
                    </li>
                </ul>
               
            </div>
            <div className="social-media">
                <BsFacebook/>
                <BsInstagram/>
                <BsTwitter/>
            </div>
            <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80492.44013093942!2d45.27164543572123!3d2.0592861922847336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc59d9!2sMogadishu!5e1!3m2!1sen!2sso!4v1652962705793!5m2!1sen!2sso" ></iframe>
            </div>
        </div>
     );
}
 
export default Footer;