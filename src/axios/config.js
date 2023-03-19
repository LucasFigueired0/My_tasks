import axios from "axios";

export const registerFetch = axios.create({
    baseURL: "https://latam-challenge-2.deta.dev/api/v1",
})

// export const loginFecth = axios.create({
//    baseURL: "https://latam-challenge-2.deta.dev/api/v1",
//    headers:{
//     "Authorization": "Bearer"
//    }
// })