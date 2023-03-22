import React, { useContext, useState } from 'react'
import TaskContext from '../../../../contexts/taskContext';
import "./Styles.css"


const WeekDayBar = () => {

  const sizeClicked = 15;
  const size = 12;
  
  const {dayOfWeek, setDayOfWeek} = useContext(TaskContext);
  
  const [mondaySize,setMondaySize] = useState(sizeClicked);
  const [tuesdaySize, setTuesdaySize] = useState(size);
  const [wednesdaySize, setWednesdaySize] = useState(size);
  const [thursdaySize, setThursdaySize] = useState(size);
  const [fridaySize, setFridaySize] = useState(size);
  const [saturdaySize, setSaturdaySize] = useState(size);
  const [sundaySize, setSundaySize] = useState(size);
  const [daySelect, setDaySelect] = useState(size)
  
  const clickMonday = () =>{
    setMondaySize(sizeClicked);
    setTuesdaySize(size);
    setWednesdaySize(size);
    setThursdaySize(size);
    setFridaySize(size);
    setSaturdaySize(size)
    setSundaySize(size)
    setDayOfWeek('monday');
  };

  const clickTuesday = () =>{
    setMondaySize(size);
    setTuesdaySize(sizeClicked);
    setWednesdaySize(size);
    setThursdaySize(size);
    setFridaySize(size);
    setSaturdaySize(size)
    setSundaySize(size)
    setDayOfWeek('tuesday');
  };

  const clickWednesday = () =>{
    setMondaySize(size);
    setTuesdaySize(size);
    setWednesdaySize(sizeClicked);
    setThursdaySize(size);
    setFridaySize(size);
    setSaturdaySize(size)
    setSundaySize(size)
    setDayOfWeek('wednesday');
  };

  const clickThursday = () =>{
    setMondaySize(size);
    setTuesdaySize(size);
    setWednesdaySize(size);
    setThursdaySize(sizeClicked);
    setFridaySize(size);
    setSaturdaySize(size)
    setSundaySize(size)
    setDayOfWeek("thursday");
  };

  const clickFriday = () =>{
    setMondaySize(size);
    setTuesdaySize(size);
    setWednesdaySize(size);
    setThursdaySize(size);
    setFridaySize(sizeClicked);
    setSaturdaySize(size)
    setSundaySize(size)
    setDayOfWeek("friday")
  };

  const clickSaturday = () =>{
    setMondaySize(size);
    setTuesdaySize(size);
    setWednesdaySize(size);
    setThursdaySize(size);
    setFridaySize(size);
    setSaturdaySize(sizeClicked)
    setSundaySize(size)
    setDayOfWeek("saturday")
  };

  const clickSunday = () =>{
    setMondaySize(size);
    setTuesdaySize(size);
    setWednesdaySize(size);
    setThursdaySize(size);
    setFridaySize(size);
    setSaturdaySize(size)
    setSundaySize(sizeClicked)
    setDayOfWeek("sunday")
  };


  

  return (
    <div className='week-day-bar'>
      <button onClick={clickMonday} className='monday' style={{width:`${mondaySize}%`}}>Monday</button>
      <button onClick={clickTuesday} className='tuesday' style={{width:`${tuesdaySize}%`}}>Tuesday</button>
      <button onClick={clickWednesday} className='wednesday'style={{width:`${wednesdaySize}%`}}>Wednesday</button>
      <button onClick={clickThursday} className='thursday' style={{width:`${thursdaySize}%`}}>Thursday</button>
      <button onClick={clickFriday} className='friday' style={{width:`${fridaySize}%`}}>Friday</button>
      <button onClick={clickSaturday} className='saturday' style={{width:`${saturdaySize}%`}}>Saturday</button>
      <button onClick={clickSunday} className='sunday' style={{width:`${sundaySize}%`}}>Sunday</button>
    </div>
  )
}

export default WeekDayBar