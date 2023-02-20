import React, { useState } from 'react'
import "../01_create_account/Create_account.css"
import image from '../../img/image2.svg'
import logo from '../../img/logo.svg'
import {
    
    validateEmail,
    validatePassword
} from "../../utils/validateItems"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState('');

    const validate = (valor, validacao) => {
        return !validacao.test(valor)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrorEmail(validate(e.target.value, validateEmail))
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError(validate(e.target.value, validatePassword))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ((email === '' || errorEmail === true) ||
            (password === '' || passwordError === true)
        ) {
            alert('Fill in the values ​​​​correctly!')
        }
        else {
           
            setEmail('');
            setPassword('');
            

          
            setErrorEmail(false);
            setPasswordError(false)
            setError('')

        }
    };


  return (
    <div className='containerForm'>
    <div className='box_1'>
        <form className='formCadastro' onSubmit={handleSubmit} >
            <div className='areaCadastro'>
                <h1 className='tituloCadastro'>Welcome,</h1>
                <p className='subTituloCadastro'>Please, register to continue</p>
            </div>
          
            <br />
         
            <label className='itemCadastro'>
                <span className='textInput'>e-mail</span>
                <input
                    className={errorEmail === false ? 'areaInput' : 'areaInputError'}
                    type="email" name="email"
                    placeholder='A valid e-mail here'
                    value={email}
                    onChange={handleEmail} />
            </label>
            <br />
            <label className='itemCadastro'>
                <span className='textInput'>password</span>
                <input
                    className={passwordError === false ? 'areaInput' : 'areaInputError'}
                    type="password"
                    name="password"
                    placeholder='Your password'
                    value={password}
                    onChange={handlePassword}
                />
            </label>
         

            <div className='AlertaErro' value={error}>{error}</div>

            {/* <input type="submit" value="Register Now" /> */}
            <button type='submit' value='Send' className='botaoPadrao'>Register Now</button>
        </form>
    </div>
    <div className="box_2">
        <a rel='noreferrer' target="_blank" href="https://compasso.ninja/pls/interno/home.html" >
            <img src={logo} alt="Imagem com logo da uol com um link para intranet" className='logoImagem' />
        </a>
        <img src={image} alt="Imagem de notebook" className='imageForm' />
    </div>
</div>
  )
}

export default Login