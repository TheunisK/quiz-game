import {React, useState} from 'react';

import '../styles/register.css';

import Header from './Header';

function Register() {

    const emptyUser = {
        email: '',
        username: '',
        password: ''
    }

    const [userDetails, setUserDetails] = useState(emptyUser);


    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails({
            ...userDetails, [name]: value
        });
        console.log(userDetails);
    }

    return (
        <div className='register-page'>
            <Header />
            <div className='register-main'>
                <div className='form-wrapper'>
                    <h3>Register</h3>
                    <form>
                        <div className='text-field'>
                            <input 
                                type='text'
                                required
                                onChange={(e) => handleChange()}
                            />
                            <label>Username</label>
                        </div>
                        <div className='text-field'>
                            <input 
                                type='password' 
                                required
                                onChange = {(e) => handleChange()}
                            />
                            <label>Password</label>
                        </div>
                        <div className='text-field'>
                            <input 
                                type='email' 
                                required
                                onChange = {(e) => handleChange()}
                            />
                            <label>Email</label>
                        </div>
                        <input type='submit' value='Register'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;