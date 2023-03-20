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

  const handleDaySelect = (day) =>{
    setDaySelect(day)
  }

  const handleTotalItems = (items) =>{
    setTotalItens(items)
    console.log("Home")
    console.log(items)
  }

  return (

    <div>
      <TaskContext.Provider value={{ cadTask, setCadTask }}>
        <Navbar />
        <CreateTasks />
        <WeekDayBar onDaySelect={handleDaySelect}/>
        <ShowTasks daySelect={daySelect} allItems={handleTotalItems}/>
      </TaskContext.Provider>
    </div>
  )
}

export default Index 