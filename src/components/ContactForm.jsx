import { useState, useEffect } from 'react'

function Footer() {
    const [formName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMsg] = useState('');
    const [inputError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [msgError, setMsgError] = useState(false);

    useEffect(() => {
        console.log(`nameError: ${nameError}`);
        console.log(`emailError: ${emailError}`);
        console.log(`msgError: ${msgError}`);
        console.log(`inputError: ${inputError}\n\n\n`);
      }, [nameError, emailError, msgError, inputError]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name == 'form-name') return setName(value);
        else if (name == 'form-email') return setEmail(value);
        else return setMsg(value);
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (checkEmail()) {
            setError(false);
            setEmailError(false);
            console.log(`Name: ${formName}\nEmail: ${email}\nMessage: ${message}`);
        }
        else{
            setError(true);
            setErrorMessage('Please enter a valid email address');
            setEmailError(true);
        } 
    };

    const checkEmail = () => {
        console.log("Checking "+email);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const check = emailRegex.test(email);
        console.log(check);
        return check;
    }

    const handleBlur = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (value.trim() == ''){
            setError(true);
            setErrorMessage('Please enter the required fields below.');
            if (name == 'form-name') setNameError(true);
            else if (name == 'form-email') setEmailError(true);
            else setMsgError(true);
            checkInputs();
        } 
        else {
            if (name == 'form-name') setNameError(false);
            else if (name == 'form-email') setEmailError(false);
            else setMsgError(false);
            if (!nameError && !emailError && !msgError) {
                setError(false);
                setErrorMessage('');
            }
            checkInputs();
        }
    }

    const checkInputs = () => {
        if (
            formName.trim() != '' &&
            email.trim() != '' &&
            message.trim() != ''
        ) {
            setError(false);
            return false;
        }
    }


    return (
      <div className='contact-container'>
        <form id="contact-form" action="" onSubmit={handleFormSubmit} className={inputError ? 'red-outline' : ''}>
                <h3 className='h-font'>Contact Me</h3>
                <h4 id='input-error' className={inputError ? '' : 'd-none'}>{errorMessage}</h4>
                <input 
                    placeholder='Name: '
                    value={formName}
                    type="text" 
                    id='form-name'
                    name="form-name"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={nameError ? 'red-p' : ''}
                    // required
                />
                <input 
                    placeholder='Email address:'
                    value={email}
                    type="text" 
                    id='form-email'
                    name="form-email"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={emailError ? 'red-p' : ''}
                    // required
                />
                <h4 className={msgError ? 'red' : ''}>Message: </h4>
                <textarea 
                    value={message}
                    id='form-message'
                    name="form-message" 
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    // required
                />
            <input type="submit" value="Send" id='button' />
        </form>  
      </div>
    )
    
}

export default Footer;