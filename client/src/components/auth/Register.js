import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../assets/register.png';
import axios from 'axios';
import { BASE_URL } from '../utils/util';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const verifyInput = () => {
    // Reset error messages
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!name) {
      setNameError('Please enter your name');
      isValid = false;
    }

    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 chars and contain at least 1 lowercase, 1 uppercase, 1 digit, and 1 symbol'
      );
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (verifyInput()) {
      const dataObjs = {
        name: name,
        email: email,
        password: password,
        role: 'candidate'
      };
      
      console.log(dataObjs);
      axios
        .post(`${BASE_URL}/api/hr/signup`, dataObjs)
        .then((data) => {
          console.log(data);
          alert('Registered successfully');
          navigate('/login');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login">
      <div className="login_info">
        <img className="auth_img" src={register} alt="login" />
      </div>

      <div className="login_form">
        <section className="form_heading">
          <h4>Create A New Account</h4>
          <p style={{ fontSize: '1em', fontWeight: '400' }}>
            Already registered? <Link className="register-link" to="/login">Login here</Link>
          </p>
        </section>

        <div className="form">
          <section>
            <label className="label">Enter Your Name</label>
            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <p style={errorLabel}>{nameError}</p>}
          </section>
          <section>
            <label className="label">Enter Your Email</label>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <p style={errorLabel}>{emailError}</p>}
          </section>
          <section>
            <label className="label">Enter a new Password</label>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <p style={errorLabel}>{passwordError}</p>}
          </section>
          <section>
            <label className="label">Confirm your Password</label>
            <input
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <p style={errorLabel}>{confirmPasswordError}</p>}
          </section>
          <section className="auth-btn-container">
            <button className="auth_button" onClick={handleSubmit}>Create An Account</button>
          </section>
        </div>
      </div>
    </div>
  );
};

const errorLabel = {
    fontSize: "1em",
    fontWeight: "400",
    color: "red",
    margin: "2px",
  };

export default Register;
