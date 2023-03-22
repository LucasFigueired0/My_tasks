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
  const [allItems, setAllItems] = useState(null)

  const handleDaySelect = (day) =>{
    setDaySelect(day)
  }

  const handleTotalItems = (items) =>{
    setTotalItens(items)
    
    console.log("Itens na home"+items)
  }

  const handleCont = (value) =>{
    setCont(value)
  }
 
  return (

    <div>
      <TaskContext.Provider value={{ cadTask, setCadTask, cont, setCont, allItems, setAllItems}}>
        <Navbar />
        <CreateTasks arr={totalItems} cont={handleCont}/>
        <WeekDayBar onDaySelect={handleDaySelect}/>
        <ShowTasks daySelect={daySelect} contador={cont}/>
      </TaskContext.Provider>
    </div>
  )
}

export default Index 