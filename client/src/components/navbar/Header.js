import React, { useContext } from 'react'
import './nav.css'
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
                        <p className='logo-text'>🚀 UpLevel</p>
                    </div>
                </div>

                :
                <div className='header'>

                    <div className='header_logo' onClick={() => handelClick(0, '/')}>
                        <p className='logo-text'>🚀 UpLevel</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Header