import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {


    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input className="input" type="email" name="Email" id="" placeholder="Email" />
                    <br />
                    <br />
                    <input className="input" type="password" name="Password" id="" placeholder="password" />
                    <br />
                    <br />
                    <input className="btn-regular " type="submit" value="Login" />
                </form>

                <p>Are you new ? <Link to="/register">Create Account</Link></p>


                <br /><br />

                <GoogleButton type="light"
                    onClick={handleGoogleSignIn}
                />
            </div>
        </div>
    );
};

export default Login;