import { useEffect, useState } from "react"

import './App.css'
import { getData } from "./store/getData"
import { Outlet } from "react-router-dom"
import UserContext from "./contexts/userContext"

function App() {
  const [dadosLogin] = useState(getData('login_tasks'))

  const [logado, setLogado] = useState(() => {
    // let logado1 = dadosLogin
    console.log(dadosLogin)
   
    if (dadosLogin.logado === false) {
      console.log('Aqui')
      return {key: '', logado: false}
    }
    else {
      console.log('Aqui')
      return {key: dadosLogin.key, logado: true}
    }
  })

  return (
    <UserContext.Provider value={{logado, setLogado}} >
      <Outlet/>
    </UserContext.Provider>
  )
}

export default App
