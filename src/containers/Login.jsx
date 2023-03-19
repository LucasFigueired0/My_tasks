import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/userContext'
import Login from '../pages/login/Index'


const PrivateLogin = () => {
  const navigate = useNavigate();
  const { logado } = useContext(UserContext)
  console.log(logado)
  useEffect(() => {
    
    if (logado.logado === true) {
      navigate('/home')
    }
  }, [])

  if (logado.logado === false) {
    return (
      <Login />
    )
  }
}

export default PrivateLogin