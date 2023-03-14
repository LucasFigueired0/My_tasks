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
import logo from "../../assets/img/logo.png"


const Navbar = () => {
  const [dataUser] = useState(getData('dados_tasks'));

  const { logado, setLogado } = useContext(UserContext);
  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()
    setLogado({ id: '', logado: false })
    localStorage.setItem('login_tasks', JSON.stringify({ id: '', logado: false, city: '' }));
    navigate('/login')
  };

  return (
    <div className='container-nav'>
      <div className="week-planner">
        <h3>Weekly Planner</h3>
        <p>Use this planner to organize your daily issues</p>
      </div>

      <div className="today">
        <DataHora />
      </div>

      <div className="weather">
        <Weather />
      </div>


      <div className='logout-logout'>
        <a rel='noreferrer' target="_blank" href="https://compasso.ninja/pls/interno/home.html" >
          <img src={logo} alt="Imagem com logo da uol com um link para intranet" className='logo_compass' />
        </a>
        <button className='logout' onClick={logout}>
          <img src={logout1} alt="botao sair" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  )
}

export default Navbar