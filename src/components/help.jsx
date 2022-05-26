import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Help = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ybwbdri', 'template_nt538ne', form.current, '7lhS5a58_v8wKT2ck')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    

    return ( 
        <div className="help-page">
            <h3>how we can help you</h3>
            <p>&copy; Lorem ipsum dolor sit amet consectetur.</p>
            <div className="contain">
                <form ref={form}  onSubmit={sendEmail} className="form">
                    <input type="text" name='user_name' placeholder="name" />
                    <input type="email" name='user_email' placeholder="email" />
                    <textarea name="message" id="" cols="30" rows="4"></textarea>
                    <button type="submit" value="send">Send Messege</button>
                </form>
                </div>
        </div>
     );
}
 
export default Help;