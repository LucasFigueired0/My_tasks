import React, { useEffect, useState } from 'react'
//Styles
import "./Styles.css"
//Axios
import { registerFetch } from '../../axios/config';
import axios from 'axios';
//Images
import logo from '../../assets/img/logo.svg'
//Utils
import {
    validateFirstName,
    validateLastName,
    validateCountry,
    validateCity,
    validateEmail,
    validatePassword,
    validateBirth,
    emailSemelhante
} from "../../utils/validateRegister";

import { chave } from '../../utils/generateKey';

import { useNavigate } from 'react-router-dom'
import { getData } from '../../store/getData';


const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // Error
    const [error, setError] = useState('');
    const [errorName, setErrorName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorBirthDate, setErrorBirthDate] = useState(false);
    const [errorCountry, setErrorCountry] = useState(false);
    const [errorCity, setErrorCity] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [cont, setCont] = useState(0);
    const navigate = useNavigate();
    //localstorage
    const [dataSend, setDataSend] = useState(getData('dados_tasks'))
    const [statusResponse, setStatusResponse] = useState(null)
    

    useEffect(() => {
        localStorage.setItem('dados_tasks', JSON.stringify(dataSend))
        setCont(cont + 1);
        if (cont > 0) {
            navigate('/login')
        }
        console.log(cont)
    }, [dataSend])


    const validate = (valor, validacao) => {
        return !validacao.test(valor)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setErrorName(validate(e.target.value, validateFirstName));
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        setErrorLastName(validate(e.target.value, validateLastName));
    };

    const handleBirthDate = (e) => {
        setBirthDate(e.target.value);
        setErrorBirthDate(validateBirth(e.target.value));
    };

    const handleCountry = (e) => {
        setCountry(e.target.value);
        setErrorCountry(validate(e.target.value, validateCountry));
    };

    const handleCity = (e) => {
        setCity(e.target.value);
        setErrorCity(validate(e.target.value, validateCity))
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrorEmail(validate(e.target.value, validateEmail))
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError(validate(e.target.value, validatePassword))
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (password === e.target.value && validate(password, validatePassword) === false) {
            setPasswordError(false)
        }
        else {
            setPasswordError(true)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((firstName === '' || errorName === true) ||
            (lastName === '' || errorLastName === true) ||
            (birthDate === '' || errorBirthDate === true) ||
            (country === '' || errorCountry === true) ||
            (city === '' || errorCity === true) ||
            (email === '' || errorEmail === true) ||
            (password === '' || passwordError === true)
        ) {
            alert('Fill in the values ​​​​correctly!')
        } else if (emailSemelhante(email, dataSend) === true) {
            alert('This email is already registered!')
            setErrorEmail(true)
        }
        else {
            

            await registerFetch.post("/users/sign-up", {
                firstName,
                lastName,
                birthDate,
                city,
                country,
                email,
                password,
                confirmPassword
            }).then((response) => {
                console.log(response.status)
                console.log(response.statusText)
                setStatusResponse(response.status);

                alert(response.statusText)




                setFirstName('');
                setLastName('');
                setBirthDate('');
                setCountry('');
                setCity('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                setErrorName(false);
                setErrorLastName(false);
                setErrorBirthDate(false);
                setErrorCountry(false);
                setErrorCity(false)
                setErrorEmail(false);
                setPasswordError(false)
                setError('')
                navigate('/login')


            }).catch((error) => {
                alert("Ivalid input values or server failure!")

                console.error("Erro: " + error)
            })

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
                    {/* First name */}
                    <label className='itemCadastro'>
                        <span className='textInput'>first name</span>
                        <input
                            className={errorName === false ? 'areaInput' : 'areaInputError'}
                            type="text"
                            name="FirstName"
                            placeholder='Your first name'
                            // pattern='[a-zA-Z]+'
                            value={firstName}
                            onChange={handleFirstName} />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>last name</span>
                        <input
                            className={errorLastName === false ? 'areaInput' : 'areaInputError'}
                            type="text"
                            name="LastName"
                            placeholder='Your last name'
                            value={lastName}
                            onChange={handleLastName}
                        />
                    </label>
                    <br />
                    <label className="itemCadastro">
                        <span className="textInput">Birth date</span>
                        <input
                            type="date"
                            className={errorBirthDate === false ? 'areaInput' : 'areaInputError'}
                            value={birthDate}
                            onChange={handleBirthDate}
                        />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>Country</span>
                        <input
                            className={errorCountry === false ? 'areaInput' : 'areaInputError'}
                            type="text"
                            name="country"
                            placeholder='Your country'
                            value={country}
                            onChange={handleCountry}
                        />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>City</span>
                        <input
                            className={errorCity === false ? 'areaInput' : 'areaInputError'}
                            type="text"
                            name="City"
                            placeholder='Your City'
                            value={city}
                            onChange={handleCity}
                        />
                    </label>
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
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>password</span>
                        <input
                            type="password"
                            name="passwordConfirm"
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            className={passwordError === false ? 'areaInput' : 'areaInputError'}
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
                {/* <img src={image} alt="Imagem de notebook" className='imageForm' /> */}
            </div>
        </div>
    )
}

export default Register