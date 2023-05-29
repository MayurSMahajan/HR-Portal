import React from 'react'
import Header from '../components/navbar/Header'

const Auth = ({ Component }) => {
    return (
        <div className='App'>
            <Header />
            <div className='components'>
                <Component />
            </div>
        </div>
    )
}

export default Auth