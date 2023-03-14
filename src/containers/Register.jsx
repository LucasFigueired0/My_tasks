import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../pages/register/Index';
import UserContext from '../contexts/userContext';

const PrivateRegister = () => {
  const navigate = useNavigate();
  const {logado} = useContext(UserContext);

  useEffect(() => {
    if (logado.logado === true) {
      navigate('/home')
    }
  }, [])

  if (logado.logado === false) {
    return (
      <Register/>
    )
  }
}

export default PrivateRegister