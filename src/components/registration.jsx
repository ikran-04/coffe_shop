import {useState} from 'react';
import Cookies from "js-cookie";


const Register = () => {
    const [fullName, setfullName] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "fullname"){
            setfullName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }
    const handleSubmit = (fullName,email,password) => {
        Cookies.set("userName",fullName)
        Cookies.set("userEmail",email)
        Cookies.set("userPassword",password)
        console.log( fullName,email,password)
        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName:fullName,
                email:email,
                password:password,
            })
        })
        .then((res) => {
           console.log(res)
        })
    }
    return ( 
        <div className="register">
            <div className="img">
                <img src="images/registration-image.jpg" alt="" /> 
            </div>
            <div className="registration-form">
                    <h1>Create Account</h1>
                <form >
                    <input type="name" id='fullname' value={fullName} onChange = {(e) => handleInputChange(e)} placeholder="name" required />
                    <input type="Email" id='email' value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" required />
                    <input type="password" id='password' value={password} onChange = {(e) => handleInputChange(e)} placeholder="password" required />
                    <div style={{display:"flex" , alignItems:"center"}}>
                    <input type="checkbox" name="policy" id="policy" />
                    <label htmlFor="policy">i agree <span>terms</span>and <span>private policy</span></label>
                    </div>
                <button type="submit" value="Submit" onClick={()=>handleSubmit(fullName,email,password)}>Register</button>
                </form>

            </div>
        </div>
     );
}
 
export default Register;