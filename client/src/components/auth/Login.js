import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";
import login from "../../assets/login.png";
import { UserContext } from "../../context";
import { BASE_URL } from "../utils/util";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [Password, setPassword] = useState("");
  const { user, setUser, setToken } = useContext(UserContext);
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
    setEmailErrorMsg("");
    setPasswordErrorMsg("");

    let isValid = true;

    if (!Email) {
      setEmailErrorMsg("Please enter your email");
      isValid = false;
    } else if (!validateEmail(Email)) {
      setEmailErrorMsg("Please enter a valid email address");
      isValid = false;
    }

    if (!Password) {
      setPasswordErrorMsg("Please enter your password");
      isValid = false;
    } else if (!validatePassword(Password)) {
      setPasswordErrorMsg("Incorrect Password");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (verifyInput()) {
      const dataObjs = {
        email: Email,
        password: Password,
      };
      console.log(dataObjs);
      if (!user) {
        axios
          .post(`${BASE_URL}/api/hr/login`, dataObjs)
          .then((data) => {
            console.log(data);
            setUser(data.data.user);
            setToken(data.data.token);
            localStorage.setItem("token", data.data.token);
            navigate("/home");
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      }
    }
  };

  if (user) {
    return navigate("/home");
  }

  return (
    <div className="login">
      <div className="login_info">
        <img className="auth_img" src={login} alt="login" />
      </div>

      <div className="login_form">
        <section className="form_heading">
          <h4>Login To Your Account</h4>
          <p style={subLabelStyle}>
            Don't have an Account yet?{" "}
            <Link className="register-link" to="/register">
              Create an account
            </Link>
          </p>
        </section>

        <div className="form">
          <section>
            <label className="label">Enter Your Email</label>
            <input
              className="input"
              type="email"
              value={Email}
              onChange={(a) => setEmail(a.target.value)}
            />
            <p style={errorLabel}>{emailErrorMsg}</p>
          </section>
          <section>
            <label className="label"> Password</label>
            <input
              className="input"
              type="password"
              value={Password}
              onChange={(a) => setPassword(a.target.value)}
            />
            <p style={errorLabel}>{passwordErrorMsg}</p>
          </section>

          <section className="password_text">
            <p style={subLabelStyle}>
              Can not remember your password? <Link to="#">reset password</Link>
            </p>
          </section>

          <section className="auth-btn-container">
            <button className="auth_button " onClick={handleSubmit}>
              Login to Account
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

const subLabelStyle = {
  fontSize: "1em",
  fontWeight: "400",
};

const errorLabel = {
  fontSize: "1em",
  fontWeight: "400",
  color: "red",
  margin: "2px",
};

export default Login;
