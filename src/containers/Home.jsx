import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/home/Index'
import UserContext from '../contexts/userContext';

const PrivateHome = () => {
    const navigate = useNavigate();
    const {logado} = useContext(UserContext);

    // useEffect(() => {
    //     localStorage.setItem('login_tasks', JSON.stringify(logado));
    // }, [logado])
    
    useEffect(() => {
        console.log('Home: '+logado)
        if (logado.logado === false) {
            navigate('/login')
        }
    }, [])
    if (logado.logado === true) {
        return (
            <Home />
        )
    }
}

export default PrivateHome