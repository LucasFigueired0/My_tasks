import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom';


import logo from '../../assets/img/logo.svg'
import UserContext from '../../contexts/userContext';
import { getData } from '../../store/getData';
import { validaLogin } from '../../utils/validateLogin';
import "./Styles.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const { logado, setLogado } = useContext(UserContext);
    const navigate = useNavigate();

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let logado1 = validaLogin(email, password);

        if (logado1.logado === true) {
            setLogado({
                id: logado1.id,
                logado: logado1.logado,
                city: logado1.city,
                country: logado1.country
            })
            localStorage.setItem('login_tasks', JSON.stringify([{
                id: logado1.id,
                logado: logado1.logado,
                city: logado1.city,
                country: logado1.country
            }]));
            navigate('/home')
        } else {
            e.preventDefault();
            setEmail(email);
            setPassword('');
        }
    }

    return (
        <div className='containerFormLogin'>
            <div className='box_1Login'>
                <form className='formCadastroLogin' onSubmit={handleSubmit} >
                    <div className='areaCadastroLogin'>
                        <h1 className='tituloCadastroLogin'>Welcome,</h1>
                        <p className='subTituloCadastroLogin'>To continue browsing safety, log in the network</p>
                    </div>
                    <br />
                    {/* email */}
                    <br />
                    <h1 className='tituloLogin'>Login</h1>
                    <label className='itemCadastroLogin'>

                        <input
                            className={errorEmail === false ? 'areaInputLoginEmail' : 'areaInputErrorLogin'}
                            type="email" name="email"
                            placeholder='User name'
                            value={email}
                            onChange={changeEmail} />
                    </label>
                    <br />
                    <label className='itemCadastroLogin'>

                        <input
                            className={passwordError === false ? 'areaInputLoginSenha' : 'areaInputErrorLogin'}
                            type="password"
                            name="password"
                            placeholder='password'
                            value={password}
                            onChange={changePassword}
                        />
                    </label>

                    <div className='criarConta'>
                        <Link className='account' to='/register'>Don't have an account yet? Click here!</Link>
                    </div>
                    <button type='submit' value='Send' className='botaoPadraoLogin'>Log in</button>
                </form>
            </div>
            <div className="box_2Login">
                <a rel='noreferrer' target="_blank" href="https://compasso.ninja/pls/interno/home.html" >
                    <img src={logo} alt="Imagem com logo da uol com um link para intranet" className='logoImagemLogin' />
                </a>
                {/* <img src={image} alt="Imagem de notebook" className='imageForm' /> */}
            </div>
        </div>
    )
}

export default Login