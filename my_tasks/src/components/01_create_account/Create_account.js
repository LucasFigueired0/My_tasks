import React, { useState } from 'react'
//Styles
import "./Create_account.css"
//Images
import image from '../../img/image2.svg'
import logo from '../../img/logo.svg'
//Utils
import {
    validateFirstName,
    validateLastName,
    validateCountry,
    validateCity,
    validateEmail,
    validatePassword,
    validateBirth
} from "../../utils/regex"

const Create_account = () => {

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

    const validate = (valor, validacao) => {
        return !validacao.test(valor)
    }

    // const validateAgeUser = (dataUser) =>{
    //    return validateBirth(dataUser) <= 0?true:false;
    // }

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


    const handleSubmit = (e) => {
        e.preventDefault();

        if ((firstName === '' || errorName === true) ||
            (lastName === '' || errorLastName === true) ||
            (birthDate === '' || errorBirthDate === true) ||
            (country === '' || errorCountry === true) ||
            (city === '' || errorCity === true) ||
            (email === '' || errorEmail === true) ||
            (password === '' || passwordError === true)
        ) {
            alert('Preencha todos os campos corretamente!')
        }
        else {
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
                <a target="_blank" href="https://compasso.ninja/pls/interno/home.html" >
                    <img src={logo} alt="" className='logoImagem' />
                </a>
                <img src={image} alt="" className='imageForm' />
            </div>
        </div>
    )
}

export default Create_account