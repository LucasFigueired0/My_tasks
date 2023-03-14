import { useState } from "react"

import './App.css'
import { getData } from "./store/getData"
import { Outlet } from "react-router-dom"
import UserContext from "./contexts/userContext"

function App() {
  const [dadosLogin] = useState(getData('login_tasks'))

  const [logado, setLogado] = useState(() => {
    let logado1 = dadosLogin
    console.log(dadosLogin)
    if (logado1 === undefined) {
      return {id: '', logado: false, city: ''}
    } 
    else if (dadosLogin.logado === false) {
      return {id: '', logado: false, city: ''}
    }
    else {
      return {id: dadosLogin.id, logado: true, city: dadosLogin.city}
    }
  })

  return (
    <UserContext.Provider value={{logado, setLogado}} >
      <Outlet/>
    </UserContext.Provider>
  )
}

export default App
