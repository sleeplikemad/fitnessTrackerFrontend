import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { storeToken } from '../auth';
import {loginUser} from '../api'

const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <form
                className="login-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const results = await loginUser(username, password);
                        storeToken(results.token);
                        setIsLoggedIn(true);
                        setUsername('');
                        setPassword('');
                    } catch (err) {
                        console.log(err);
                    }
                }}>

                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />

                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />

                <button>Login</button>
            </form>
            <p>Don't have an account? <Link className='signup-link' to="/register">Sign Up</Link></p>
        </div>
    )
}

export default Login;