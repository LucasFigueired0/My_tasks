import React, { useEffect, useState } from 'react'
import "./Create_account.css"

import image from '../../img/image2.svg'
import logo from '../../img/logo.svg'
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
    const [errorName, setErrorName] = useState(1)
    const [errorLastName, setErrorLastName] = useState(1);
    const [errorBirthDate, setErrorBirthDate] = useState(1);
    const [errorCountry, setErrorCountry] = useState(1);
    const [errorCity, setErrorCity] = useState(1);
    const [errorEmail, setErrorEmail] = useState(1);
    const [passwordError, setPasswordError] = useState(1);


    const handleFirstName = (e) => {
        setFirstName(e.target.value);

    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleBirthDate = (e) => {
        setBirthDate(e.target.value);
    };

    const handleCountry = (e) => {
        setCountry(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)

        if(password === e.target.value){
            setPasswordError(1)
        }
        else{
            setPasswordError(0)
        }
        
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário completo:")
        console.log("First name: ", firstName);
        console.log("Last Name: ", lastName);
        console.log("Birth date: ", birthDate);
        console.log("Country: ", country);
        console.log("City: ", city);
        console.log("Email: ", email);
        console.log("Password: ", password);
        console.log("Confirm password: ", confirmPassword);

        if (!firstName | !lastName | !birthDate | !country | !city | !email) {
            setError("Preencha todos os campos!")
            if (firstName === '') setErrorName(0);

            if (lastName === '') setErrorLastName(0);

            if (birthDate === '') setErrorBirthDate(0);

            if (country === '') setErrorCountry(0);

            if (city === '') setErrorCity(0)

            if (email === '') setErrorEmail(0);

            if (password === '') setPasswordError(0)

        } else {
            setFirstName('');
            setLastName('');
            setBirthDate('');
            setCountry('');
            setCity('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            setErrorName(1);
            setErrorLastName(1);
            setErrorBirthDate(1);
            setErrorCountry(1);
            setErrorCity(1)
            setErrorEmail(1);
            setPasswordError(1)
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
                            className={errorName === 1 ? 'areaInput' : 'areaInputError'}
                            type="text"
                            name="FirstName"
                            placeholder='Your first name'
                            value={firstName}
                            onChange={handleFirstName} />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>last name</span>
                        <input
                            className={errorLastName === 1 ? 'areaInput' : 'areaInputError'}
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
                            className={errorBirthDate === 1 ? 'areaInput' : 'areaInputError'}
                            value={birthDate}
                            onChange={handleBirthDate}
                        />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>Country</span>
                        <input
                            className={errorCountry === 1 ? 'areaInput' : 'areaInputError'}
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
                            className={errorCity === 1 ? 'areaInput' : 'areaInputError'}
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
                            className={errorEmail === 1 ? 'areaInput' : 'areaInputError'}
                            type="email" name="email"
                            placeholder='A valid e-mail here'
                            value={email}
                            onChange={handleEmail} />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>password</span>
                        <input
                            className={passwordError === 1 ? 'areaInput' : 'areaInputError'}
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
                            className={passwordError === 1 ? 'areaInput' : 'areaInputError'}

                        />
                    </label>

                    <div className='AlertaErro' value={error}>{error}</div>

                    {/* <input type="submit" value="Register Now" /> */}
                    <button type='submit' value='Send' className='botaoPadrao'>Register Now</button>
                </form>
            </div>
            <div className="box_2">
                <a href="https://compasso.ninja/pls/interno/home.html" target="_blank">
                    <img src={logo} alt="" className='logoImagem' />
                </a>
                <img src={image} alt="" className='imageForm' />
            </div>
        </div>
    )
}

export default Create_account