import React from 'react'
import "./Create_account.css"
const Create_account = () => {
    return (
        <div className="principalCadastro">
            <div className='cadastro'>
                    <div className='areaCadastro'>
                        <h1 className='tituloCadastro'>Welcome,</h1>
                        <p className='subTituloCadastro'>Please, register to continue</p>
                    </div>
                <form className='formCadastro'>
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
                </form>
            </div>
        </div>
    )
}

export default Create_account