import React, { useContext } from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom'
import { DashboardContext, UserContext } from '../../context'

const Header = () => {
    const { user, setUser} = useContext(UserContext)
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

    const handelLogOut = () => {
        localStorage.removeItem('token')
        setUser()
        navigate('/')
    }

    return (
        < >
            {innerWidth <= 800 ?
                <div className='header'>

                    <button className='toggle_button' onClick={() => handelSiderbar()}> ok</button>
                    <div className='header_logo' onClick={() => handelClick(0, '/')}>
                        <p className='logo-text'>🚀 UpLevel</p>
                    </div>
                </div>

                :
                <div className='header'>

                    <div className='header_logo' onClick={() => handelClick(0, '/')}>
                        <p className='logo-text'>🚀 UpLevel</p>
                    </div>
                    <div className='header_right'>
                        {user ?
                            // <div className='profile_nav'>
                            //     <img className='profile_img' src={img} alt="profile" />
                            //     <div className='profile_Dropdown'>
                            //         <button onClick={() => navigate('/myProfile')}>My Profile</button>
                            //         <button onClick={() => handelLogOut()}>Logout</button>
                            //     </div>
                            // </div> 
                            // <CustomDropdown />
                            <div>
                                <button className='btn_1' onClick={() => handelLogOut()}>Logout</button>
                                {/* <button className='btn_2' onClick={() => navigate('/register')}>signin</button> */}
                            </div>

                            :
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