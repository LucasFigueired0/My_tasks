//Components
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Index'
import TaskContext from '../../contexts/taskContext';
import CreateTasks from './components/createTasks';
import ShowTasks from './components/showTasks/Index';
import WeekDayBar from './components/weekDayBar/Index';

const Index = () => {
  const [cadTask, setCadTask] = useState(null)
  const [daySelect, setDaySelect] = useState('monday')
  const [totalItems, setTotalItens] = useState(null)
  const [cont, setCont] = useState(0);

  const handleDaySelect = (day) =>{
    setDaySelect(day)
  }

  const handleTotalItems = (items) =>{
    let ids = items.map((dados)=>({id: dados._id}))
    setTotalItens(ids)
    // console.log("Home")
    // console.log(ids)
  }

  const handleCont = (value) =>{
    setCont(value)
  }

  return (

    <div>
      <TaskContext.Provider value={{ cadTask, setCadTask, cont, setCont}}>
        <Navbar />
        <CreateTasks arr={totalItems} cont={handleCont}/>
        <WeekDayBar onDaySelect={handleDaySelect}/>
        <ShowTasks daySelect={daySelect} allItems={handleTotalItems} contador={cont}/>
      </TaskContext.Provider>
    </div>
  )
}

export default Index 