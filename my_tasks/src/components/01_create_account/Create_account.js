import React from 'react'
import "./Create_account.css"
import ImgForm from '../00_ImagemForm/ImgForm'
import image from '../../img/image2.svg'
import logo from '../../img/logo.svg'
const Create_account = () => {
    return (
        <div className='containerForm'>
            <div className='box_1'>
                <form className='formCadastro'>
                    <div className='areaCadastro'>
                        <h1 className='tituloCadastro'>Welcome,</h1>
                        <p className='subTituloCadastro'>Please, register to continue</p>
                    </div>
                    <label className='itemCadastro'>
                        <span className='textInput'>first name</span>
                        <input className='areaInput' type="text" name="FirstName" placeholder='Your first name' />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>last name</span>
                        <input className='areaInput' type="text" name="LastName" placeholder='Your last name' />
                    </label>
                    <br />
                    <label className="itemCadastro">
                        <span className="textInput">Birth date</span>
                        <input type="date" className="areaInput" />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>Country</span>
                        <input className='areaInput' type="text" name="country" placeholder='Your country' />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>City</span>
                        <input className='areaInput' type="text" name="City" placeholder='Your City' />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>e-mail</span>
                        <input className='areaInput' type="email" name="email" placeholder='A valid e-mail here' />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>password</span>
                        <input className='areaInput' type="password" name="password" placeholder='Your password' />
                    </label>
                    <br />
                    <label className='itemCadastro'>
                        <span className='textInput'>password</span>
                        <input className='areaInput' type="password" name="passwordConfirm" placeholder='Confirm your password' />
                    </label>

                    <button className='botaoPadrao'>Register Now</button>
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