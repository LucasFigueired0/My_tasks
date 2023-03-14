import React, { useEffect, useState } from 'react'

import "./Styles.css"
import { horasMinutos } from '../../../../utils/horasMinutos';
import { daysWeek } from '../../../../utils/daysWeek';
const CreateTasks = () => {
    const [optionWeek, setOptionWeek] = useState([]);
    const [optionTime, setOptionTime] = useState([]);

    const [taskText, setTaskText] = useState('');
    const [taskWeek, setTaskWeek] = useState('');
    const [taskClock, setTaskClock] = useState('');

    useEffect(() => {

        setOptionTime(horasMinutos().map((hora) => (
            <option key={hora} value={hora}>{hora}</option>
        ))
        )
        setOptionWeek(daysWeek().map((dia) => (
            <option value={dia} key={dia}>{dia}</option>
        )))
    }, [])

    const handleText = (e) => {
        setTaskText(e.target.value);
    }

    const handleWeek = (e) => {
        setTaskWeek(e.target.value);
    };

    const handleClock = (e) => {
        setTaskClock(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskText)
        console.log(taskWeek)
        console.log(taskClock)
    }

    return (
        <form className='create-task' onSubmit={handleSubmit}>
            <div className='inputZone'>
                <input type="text" className='taskIssues' placeholder='Task or issue' onChange={handleText} />
                <select className='daysWeek' value={taskWeek} onChange={handleWeek}>
                    {optionWeek}
                </select>
                <div className='hora'>
                    <input
                        type="text"
                        id="select-editavel"
                        value={taskClock}
                        onChange={handleClock}
                        list="opcoes"
                        placeholder='01h:30m'
                        className='horasMinutos'
                    />
                    <datalist id="opcoes">
                        {optionTime}
                    </datalist>
                </div>
            </div>
            <div className='buttonsZone'>
                <input className='botaoEnviar' type="submit" value="+ Add to calendar" />
                <button className='botaoApagar'>- Delete All</button>
            </div>
        </form>
    )
}

export default CreateTasks