import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/home/Index'
import UserContext from '../contexts/userContext';
import { getData } from '../store/getData';

const PrivateHome = () => {
    const navigate = useNavigate();
    const { logado, setLogado } = useContext(UserContext);
    const [logar, setLogar] = useState(getData('login_tasks'))

    useEffect(() => {
        
        setLogado({
            key: logar.key,
            logado: logar.logado,
        })
        
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