import emailjs from '@emailjs/browser';
const Help = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_nt538ne', e.target, 'E1kgocA2d5W3C8YvF4B-a')
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
                <form  onSubmit={sendEmail} className="form">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <textarea name="description" id="" cols="30" rows="4"></textarea>
                    <button type="submit" value="send">Send Messege</button>
                </form>
                </div>
        </div>
     );
}
 
export default Help;