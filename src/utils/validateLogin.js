import { registerFetch } from "../axios/config";
import { getData } from "../store/getData";

export const validaLogin = async (email, password) => {
   
    let dados = null
    let data = null

    await registerFetch.post("/users/sign-in", {
        email,
        password
    }).then((response) => {
        dados = response.data
        if (response.status === 200) {
            data = {
                key: dados.key,
                logado: true
            }
            alert("Login efetuado com sucesso!")
            return data;
        } else if (response.status === 400) {
            data = {
                key: "",
                logado: false
            }
            alert("Ivalid input values!")
            return data;
        } else {
            data = {
                key: "",
                logado: false
            }
            alert("server failure!")
            return data;
        }
    }).catch((error) => {
        data = {
            key: "",
            logado: false
        }
        alert("Ivalid input values or server failure!")
        console.error("Erro: " + error)
        return data;
    })

    
}

