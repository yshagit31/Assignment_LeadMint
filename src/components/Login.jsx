import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumbers &&
            hasSpecialChars
        );
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value) {
            setErrors((prev) => ({ ...prev, email: 'Email address is required.' }));
        } else if (!validateEmail(value)) {
            setErrors((prev) => ({ ...prev, email: 'Please enter a valid email.' }));
        } else {
            setErrors((prev) => ({ ...prev, email: '' })); 
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        
    
        if (!value) {
            setErrors((prev) => ({ ...prev, password: 'Password is required.' }));
        } else if (!validatePassword(value)) {
            setErrors((prev) => ({ ...prev, password: 'Please enter a valid password' }));
        } else {
         
            setErrors((prev) => ({ ...prev, password: '' }));
        }
    };

    const handleSignup = () => {
        navigate('/'); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { email: '', password: '' };

   
        if (!email) {
            newErrors.email = 'Email address is required.';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email.';
        }

        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (!validatePassword(password)) {
            newErrors.password = 'Password is incorrect'; 
        }

        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        console.log('Login successful!', { email, password });
  
        setEmail('');
        setPassword('');
        setErrors({ email: '', password: '' });
        navigate('/home');
    };

    return (
        <div className="mx-auto flex w-full h-screen justify-center max-w-sm flex-col gap-6 text-white">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Sign In</h1>
                <p className="text-sm">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">Email address</label>
                        <input
                            placeholder="Type here"
                            type="email"
                            value={email}
                            onChange={handleEmailChange} 
                            className={`input max-w-full ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && (
                            <label className="form-label">
                                <span className="form-label-alt text-red-500">{errors.email}</span>
                            </label>
                        )}
                    </div>
                    <div className="form-field">
                        <label className="form-label">Password</label>
                        <div className="form-control">
                            <input
                                placeholder="Type here"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange} 
                                className={`input max-w-full ${errors.password ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {errors.password && (
                            <label className="form-label">
                                <span className="form-label-alt text-red-500">{errors.password}</span>
                            </label>
                        )}
                    </div>
                    <div className="form-field">
                        <div className="form-control justify-between">
                            <div className="flex gap-2">
                                <input type="checkbox" className="checkbox" />
                                <a href="#">Remember me</a>
                            </div>
                            <label className="form-label">
                                <a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
                            </label>
                        </div>
                    </div>
                    <div className="form-field pt-5">
                        <div className="form-control justify-between">
                            <button type="submit" className="btn btn-primary w-full">Sign in</button>
                        </div>
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <a className="link link-underline-hover link-primary text-sm" onClick={handleSignup}>Don't have an account yet? Sign up.</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
