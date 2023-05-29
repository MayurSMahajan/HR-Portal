import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/navbar/Header'
import Sidebar from '../components/navbar/Sidebar'
import { UserContext } from '../context';
import Loading from '../components/utils/Loader/Loading'

const Main = ({ Component }) => {
    const { user, VerifyLoading, VerifiedHR } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!VerifiedHR) {
            if (user) {
                return navigate("/home");
            } else {
                return navigate('/login')
            }
        }
        // eslint-disable-next-line
    }, [user, VerifyLoading]);
    return (
        <>
            {VerifyLoading ? <Loading /> :
                <div className='App'>
                    <Header />
                    <div className='components'>
                        <Sidebar />
                        <Component />
                    </div>
                </div>}
        </>
    )
}

export default Main