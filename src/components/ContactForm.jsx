import { useState } from 'react'

function Footer() {
    const [formName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMsg] = useState('');
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name == 'form-name') return setName(value);
        else if (name == 'form-email') return setEmail(value);
        else return setMsg(value);
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(``)
    };


    return (
      <form id="contact-form" action="">

        <label htmlFor="form-name">Name:</label>
        <input 
            value={formName}
            type="text" 
            name="form-name"
            onChange={handleInputChange}
        />

        <label htmlFor="form-email">Email address: </label>
        <input 
            value={email}
            type="text" 
            name="form-email"
            onChange={handleInputChange}
        />

        <label htmlFor="form-message">Message:</label>
        <input 
            value={message}
            type="text" 
            name="form-message" 
            onChange={handleInputChange}
        />

        <button type="submit" onSubmit={handleFormSubmit}>Submit</button>
      </form>  
    )
    
}

export default Footer;