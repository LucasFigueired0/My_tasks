import React, { useContext, useEffect, useState } from 'react'

import "./Styles.css"
import { horasMinutos } from '../../../../utils/horasMinutos';
import { daysWeek } from '../../../../utils/daysWeek';
import { validateText } from '../../../../utils/validateTask';
import TaskContext from '../../../../contexts/taskContext';
import { tasksFetch } from '../../../../axios/config';

const CreateTasks = () => {
    const [optionWeek, setOptionWeek] = useState([]);
    const [optionTime, setOptionTime] = useState([]);

    const [taskText, setTaskText] = useState('');
    // const {dayOfWeek} = useContext(TaskContext);
    const [taskWeek, setTaskWeek] = useState('monday');
    const [taskClock, setTaskClock] = useState('');

    const [taskTextError, setTaskTextError] = useState(false);
    const { setCadTask } = useContext(TaskContext);
    const {setCont } = useContext(TaskContext);
    const { allItems} = useContext(TaskContext);

    useEffect(() => {
        setOptionWeek(daysWeek().map((dia) => (
            <option value={dia} key={dia}>{dia}</option>
        )))
    }, [])

    const deleteAllTaskItem = async () => {
        console.log(allItems)
        console.log(taskWeek)

        if (allItems !== null || allItems !== undefined) {
            let okay = null
            for (let i in allItems) {
                if (allItems[i].dayOfWeek === taskWeek) {
                    console.log(allItems[i].dayOfWeek)
                    try {
                        const response = await tasksFetch.delete(`events/${allItems[i]._id}`);
                        console.log('Item deletado com sucesso!');
                        console.log(response.data)
                        okay = "Okay"
                    } catch (error) {
                        console.log(error)
                    }
                }
            }

            if (okay !== null) {
                setCont(prevState => prevState + 1)
                alert('Itens apagados com sucesso!')
            }
        }
        else {
            alert("Não há items para deletar!")
        }
    }

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
            const clock01 = taskClock.slice(0, 2);
            const clock02 = taskClock.slice(taskClock.length - 2);
            console.log(clock01 + clock02)

            setCadTask({
                description: `${taskClock}${taskText}`,
                dayOfWeek: `${taskWeek}`
            })

            setTaskText('');
            setTaskClock('');
            setTaskWeek('Monday');
            setTaskTextError(false)

        }
    }

    return (
        <div className='container-create'>
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
                </div>
            </form>
            <button className='botaoApagar' onClick={deleteAllTaskItem}>- Delete All</button>
        </div>

    )
}

export default CreateTasks