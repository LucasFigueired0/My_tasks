import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom';


import logo from '../../assets/img/logo.svg'
import { registerFetch } from '../../axios/config';
import UserContext from '../../contexts/userContext';
import "./Styles.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const { logado, setLogado } = useContext(UserContext);
    const [cont, setCont] = useState(false);
    const navigate = useNavigate();
    const [chave, setChave] = useState('')

   
    useEffect(()=>{
        if(cont === true){
            console.log("chave: ", chave)
            navigate('/home')
        }
    },[cont])

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data1 = null;
        let dataAux = null;
        let statusResponse = 0


        await registerFetch.post("users/sign-in", {
            email,
            password
        }).then((response) => {
            dataAux = response.data;
         
            console.log(response.statusText)

            statusResponse = response.status;
            if (response.status === 200) {
                data1 = {
                    key: dataAux.token,
                    logado: true,
                }

            } else if (response.status === 400) {
                alert("Ivalid input values!")
            } else {
                alert("server failure!")
            }
            
        }).catch((error) => {
            // e.preventDefault
            setEmail(email);
            setPassword('');
            alert(error.response.data)
            console.error("Erro: " + error)
        })

        if(statusResponse === 200){
            setLogado({
                key: data1.key,
                logado: data1.logado,
            })

            setChave(data1.key)

            localStorage.setItem('login_tasks', JSON.stringify({
                key: data1.key,
                logado: data1.logado,
            }));

            
            alert('Login successfully completed!')
            setCont(true)

            //Isso é uma "Gambiarra" por enquanto, se puder ajudar a resolver o problema com navigate, deixe um feedback
            window.location.reload()
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