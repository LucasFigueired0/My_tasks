import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/home/Index'
import { getData } from '../store/getData';

const PrivateHome = () => {
    const navigate = useNavigate();
    const [logar] = useState(getData('login_tasks'))

    useEffect(() => {
        
        if (logar.logado === false) {
            navigate('/login')
        }
    }, [])
    if (logar.logado === true) {
        return (
            <Home />
        )
    }
}

export default PrivateHome