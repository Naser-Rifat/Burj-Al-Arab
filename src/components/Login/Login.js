import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {


    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {

                console.log(result)
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

                <button type="light"
                    onClick={handleGoogleSignIn}
                />
            </div>
        </div>
    );
};

export default Login;