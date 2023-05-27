import React from 'react'
import Header from '../components/navbar/Header'

const Auth = ({ Component }) => {
    return (
        <div className='App'>
            <div className='header_sidebar'>
                <Header />
            </div>
            <div className='components'>
                <Component />
            </div>
        </div>
    )
}

export default Auth