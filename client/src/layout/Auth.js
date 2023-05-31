import React from 'react'

const Auth = ({ Component }) => {
    return (
        <div className='App'>
            <div className='components'>
                <Component />
            </div>
        </div>
    )
}

export default Auth