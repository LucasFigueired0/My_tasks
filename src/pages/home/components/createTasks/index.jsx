import React, { useEffect, useState } from 'react'

import "./Styles.css"
import { horasMinutos } from '../../../../utils/horasMinutos';
import { daysWeek } from '../../../../utils/daysWeek';
import { validateText } from '../../../../utils/validateTask';

const CreateTasks = () => {
    const [optionWeek, setOptionWeek] = useState([]);
    const [optionTime, setOptionTime] = useState([]);

    const [taskText, setTaskText] = useState('');
    const [taskWeek, setTaskWeek] = useState('Monday');
    const [taskClock, setTaskClock] = useState('');

    const [taskTextError, setTaskTextError] = useState(false);
    const [taskClockError, setTaskClockError] = useState(false);

    useEffect(() => {
        setOptionTime(horasMinutos().map((hora) => (
            <option key={hora} value={hora}>{hora}</option>
        ))
        )
        setOptionWeek(daysWeek().map((dia) => (
            <option value={dia} key={dia}>{dia}</option>
        )))
    }, [])

    const validate = (valor, validacao) => {
        return !validacao.test(valor)
    }

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
        if (validate(taskText, validateText) === true) {
            setTaskTextError(true)
        } else {
            setTaskText('');
            setTaskClock('');
            setTaskWeek('Monday');

            setTaskTextError(false)
            console.log(taskText)
            console.log(taskWeek)
            console.log(taskClock)
        }
    }

    return (
        <form className='create-task' onSubmit={handleSubmit}>
            <div className='inputZone'>

                <div className='textoInput'>
                    <input
                        type="text"
                        value={taskText}
                        className={taskTextError ? 'taskIssuesError' : 'taskIssues'}
                        placeholder='Task or issue'
                        onChange={handleText}
                        maxLength='300'
                    />
                    {/* Ainda será implementado */}
                    {/* {taskTextError ? <span className='spanError'>Os valores foram digitados incorretamente</span> : <span></span>} */}
                </div>

                <select
                    className='daysWeek'
                    value={taskWeek}
                    onChange={handleWeek}
                >
                    {optionWeek}
                </select>

                <div className='hora'>
                    <input
                        type="time"
                        lang="pt-BR"
                        value={taskClock}
                        onChange={handleClock}
                        className='horasMinutos'
                    />
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