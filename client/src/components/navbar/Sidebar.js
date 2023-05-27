import React, { useContext } from 'react'
import './nav.css'
import homeicon from '../../assets/icons/homeicon.png'
import job from '../../assets/icons/jobsicon.png'
import messageicon from '../../assets/icons/messageicon.png'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../../context'

const Sidebar = () => {

    const { section, setSection } = useContext(DashboardContext)
    const navigate = useNavigate()

    const handleClick = (val, route) => {
        setSection(val)
        console.log(section)
        navigate(route)
    }
    return (
        <nav className='side_nav'>
            <div className='sidenav_items_div'>
                <button onClick={() => handleClick(0, '/home')} className={section === 0 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={homeicon} alt='logo' />
                    <h3>Home</h3>
                </button>
                <button onClick={() => handleClick(2, '/job')} className={section === 2 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={job} alt='logo' />
                    <h3>Jobs</h3>
                </button>
                <button onClick={() => handleClick(3, '/messages')} className={section === 3 ? ' nav_item active' : 'nav_item'}>
                    <img className='side_nav_img' src={messageicon} alt='logo' />
                    <h3>Messaging</h3>
                </button>
            </div>
        </nav>
    )
}

export default Sidebar