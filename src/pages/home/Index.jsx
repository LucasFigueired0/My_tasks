//Components
import { useState } from 'react';
import Navbar from '../../components/navbar/Index'
import TaskContext from '../../contexts/taskContext';
import CreateTasks from './components/createTasks';
import ShowTasks from './components/showTasks/Index';
import WeekDayBar from './components/weekDayBar/Index';

const Index = () => {
  const [cadTask, setCadTask] = useState(null)
  const [cont, setCont] = useState(0);
  const [allItems, setAllItems] = useState(null)
  const [dayOfWeek, setDayOfWeek] = useState('monday')

  return (

    <div>
      <TaskContext.Provider value={{
        cadTask, setCadTask,
        cont, setCont,
        allItems, setAllItems, 
        dayOfWeek, setDayOfWeek
      }}>
        <Navbar />
        <CreateTasks />
        <WeekDayBar/>
        <ShowTasks />
      </TaskContext.Provider>
    </div>
  )
}

export default Index 