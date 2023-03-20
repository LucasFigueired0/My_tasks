import axios from "axios";

import { getData } from "../store/getData"
const key = getData("login_tasks")

export const registerFetch = axios.create({
    baseURL: "https://latam-challenge-2.deta.dev/api/v1",
})

export const tasksFetch = axios.create({
    baseURL: "https://latam-challenge-2.deta.dev/api/v1",
    headers: {
        "Authorization": `Baerer ${key.key}`
    }
})