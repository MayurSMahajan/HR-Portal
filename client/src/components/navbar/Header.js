import React, { useContext } from 'react'
import './nav.css'
import img from '../../assets/img.jpg'
import notification from '../../assets/icons/noticon.png'
import { useNavigate } from 'react-router-dom'
import { DashboardContext, UserContext } from '../../context'

const Header = () => {
    const { user } = useContext(UserContext)
    const { setSection, innerWidth, sideBarToggel, setSideBarToggel } = useContext(DashboardContext)
    const navigate = useNavigate()

    const handelClick = (val, route) => {
        sessionStorage.setItem('currentsection', val)
        setSection(val)
        navigate(route)
    }

    const handelSiderbar = () => {
        setSideBarToggel(!sideBarToggel)
    }
    return (
        < >
            {innerWidth <= 800 ?
                <div className='header'>

                    <button className='toggle_button' onClick={() => handelSiderbar()}> ok</button>
                    <div className='header_logo' onClick={() => handelClick(0, '/')}>
                        <img className='logo_img' src={img} alt="logo" />
                        <p>UpLevel</p>
                    </div>
                </div>

                :
                <div className='header'>

                    <div className='header_logo' onClick={() => handelClick(0, '/')}>
                        <img className='logo_img' src={img} alt="logo" />
                        <p>UpLevel</p>
                    </div>
                    <div className='header_right'>
                        <img className='noti_img' src={notification} alt="notification" />
                        {user ? <img className='profile_img' src={img} alt="profile" /> :
                            <div>
                                <button className='btn_1' onClick={() => navigate('/login')}>signup</button>
                                {/* <button className='btn_2' onClick={() => navigate('/register')}>signin</button> */}
                            </div>
                        }
                    </div>
                </div>
            }






        </>
    )
}

export default Header