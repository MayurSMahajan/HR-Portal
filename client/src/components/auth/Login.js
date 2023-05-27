import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'
import axios from 'axios'
import login from "../../assets/login.png"
import { UserContext } from '../../context'
import { BASE_URL } from '../utils/util'

const Login = () => {
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const { user, setUser, setToken } = useContext(UserContext)

    const navigate = useNavigate()
    const handelSubmit = () => {
        const dataObjs = {
            email: Email,
            password: Password,
        }
        console.log(dataObjs)
        if (!user) axios.post(`${BASE_URL}/auth/login`, dataObjs)
            .then((data) => {
                console.log(data)
                setUser(data.data.user)
                setToken(data.data.token)
                localStorage.setItem('token', data.data.token)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data)
                console.log(err)
            })
    }



    return (
        <div className='login'>
            <div className='login_info'>
                <img className='auth_img' src={login} alt="login" />
            </div>

            <div className='login_form'>

                <section className='form_heading'>
                    <h4>Login To Your Account</h4>
                    <p>Dont have an Account?<Link to="/register">Create an account</Link></p>
                </section>

                <div className='form'>


                    <section>
                        <label className='label'>Enter Your email</label>
                        <input className='input' type="email" value={Email}
                            onChange={(a) => setEmail(a.target.value)} />
                    </section>
                    <section>
                        <label className='label'> Password</label>
                        <input className='input' type='password' value={Password}
                            onChange={(a) => setPassword(a.target.value)} />
                    </section>

                    <section className='password_text'>
                        <p>Can’t remember your password? <Link to="#">reset password</Link></p>
                        <button className='auth_button ' onClick={() => handelSubmit()} >Login to Account</button>
                    </section>
                </div>
            </div>

        </div>
    )
}


export default Login