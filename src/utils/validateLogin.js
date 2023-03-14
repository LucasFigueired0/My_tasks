import { getData } from "../store/getData";

export const validaLogin = (email, password) => {
    const dataUser = getData('dados_tasks');
    let logado = false;
    let id1 = '';
    let city = '';
    let country = ''

    for (let i in dataUser) {
        if (email === dataUser[i].email && password === dataUser[i].password) {
            logado = true;
            id1 = dataUser[i].id;
            city = dataUser[i].city;
            country = dataUser[i].country;
        }
    }

    if(logado===true){
        const dados={
            id:id1,
            logado: true,
            city: city,
            country: country
        };
        
        return dados;
      
    }else{
        const dados = {
            id: '',
            logado: false
        }
        return dados;
    }
}