import { React, useState } from 'react';

import '../styles/landingPage.css';

import Header from './Header';

function LandingPage() {

    const emptyUser = {
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
        <div className="main-container">
            <Header />
            <div className="main">
                <div className="left-main">
                <div className='form-wrapper'>
                    <h3>Sign In</h3>
                    <form>
                        <div className='text-field'>
                            <input 
                                type='text' 
                                required
                                onChange={handleChange()}
                            />
                            <label>Username</label>
                        </div>
                        <div className='text-field'>
                            <input 
                                type='password' 
                                required
                                onChange={handleChange()}
                            />
                            <label>Password</label>
                        </div>
                        <input type='submit' value='Login'/>
                        <h4>Don't have an account?</h4>
                        <p>Sign Up HERE!</p>
                    </form>
                </div>
                </div>
                <div className="right-main">
                    <div className='square-dash'></div>
                    <div className='border'></div>
                    <div className='square'>
                        ?
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage;