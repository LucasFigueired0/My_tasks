import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { getData } from '../../store/getData';
//styles
import "./Styles.css"
//components
import Weather from './climate/Clima';
import DataHora from './dataHora/DataHora';
//images
import logout1 from "../../assets/img/logout1.svg"


const Navbar = () => {
  const [dataUser] = useState(getData('dados_tasks'));

  const { logado, setLogado } = useContext(UserContext);
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState(() => {
    let usuario = ''
    for (let i in dataUser) {
      if (dataUser[i].id === logado.id) {
        usuario = dataUser[i].firstName
      }
    }

    return usuario;
  }
  );

  const logout = (e) => {
    e.preventDefault()
    setLogado({ id: '', logado: false })
    localStorage.setItem('login_tasks', JSON.stringify({ id: '', logado: false, city: '' }));
    navigate('/login')
  };

  return (
    <div className='container-nav'>
      <div className="week-planner">
        <h3>Week Planner</h3>
        <p>Use this planner to organize your daily issues</p>
      </div>

      <div className="today">
        <DataHora />
      </div>

      <div className="weather">
        <Weather />
      </div>

      
      <button className='logout' onClick={logout}>
        <img src={logout1} alt="botao sair"/>
        <p>Logout</p>
      </button>
     
    </div>
  )
}

export default Navbar