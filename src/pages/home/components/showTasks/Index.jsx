import React, { useContext, useEffect, useState } from 'react'
import { tasksFetch } from '../../../../axios/config';
import TaskContext from '../../../../contexts/taskContext'
import ItemTask from '../itemTask/Index';
import uol from "../../../../assets/img/uol.png"

import "./Styles.css"

const ShowTasks = ({ daySelect, allItems }) => {
    const { cadTask } = useContext(TaskContext);

    const [allTasks, setAllTasks] = useState([]);
    const { cont, setCont } = useContext(TaskContext);
    const [tasks, setTasks] = useState(null)
    const [idDelete, setIdDelete] = useState(null)

    const postTask = async () => {
        let dataAux = ''
        let description = cadTask.description;
        let dayOfWeek = cadTask.dayOfWeek;

        console.log("description: " + description);
        console.log("Day of week: " + dayOfWeek);

        await tasksFetch.post("/events", {
            description,
            dayOfWeek
        }).then((response) => {
            dataAux = response.data;
            setCont(prevState => prevState + 1)
            alert(response.statusText)

        }).catch((error) => {
            // alert(error.response.data)
            console.error("Erro: " + error);
        })
        console.log("Todas as notas" + allTasks)
    }

    const getTask = async () => {

        try {
            const response = await tasksFetch.get('/events');
            const data = response.data.events;
            let dataAux = data.map((dados) => ({
                time: dados.description,
                dayOfWeek: dados.dayOfWeek,
                description: dados.description,
                _id: dados._id,
                userId: dados.userId,
                isRepeat: 'nao'
            })
            )

            let lastData = [{}]

            for (let i = 0; i < dataAux.length; i++) {
                for (let j = i + 1; j < dataAux.length; j++) {
                    if (
                        dataAux[i].time === dataAux[j].time &&
                        dataAux[i].dayOfWeek === dataAux[j].dayOfWeek
                    ) {
                        dataAux[i].isRepeat = 'sim';
                        dataAux[j].isRepeat = 'sim';
                    }
                }
            }

            setAllTasks(dataAux.map((dados) => ({
                time: dados.description.slice(0, 5),
                dayOfWeek: dados.dayOfWeek,
                description: dados.description.slice(5),
                _id: dados._id,
                userId: dados.userId,
                isRepeat: dados.isRepeat
            })
            ))

            allItems(response.data.events)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTaskItem = async (id) => {
        try {
            const response = await tasksFetch.delete(`events/${id}`);
            console.log('Item deletado com sucesso!');
            console.log(response.data)
            setCont(prevState => prevState + 1);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (cadTask !== null) {
            postTask();
            setCont(prevState => prevState + 1)
        }
    }, [cadTask])

    useEffect(() => {
        console.log(allTasks)
        getTask()
    }, [cont])


    return (
        <div className='items-list'>
            <div className='items-list1'>
                <div className='time-txt'>
                    <p>Time</p>
                </div>
                {allTasks.length === 0 ? "Nenhuma tarefa inda" : (
                    allTasks.filter(dados => dados.dayOfWeek === daySelect)
                        .sort((a, b) => a.time.localeCompare(b.time))
                        .map((dados) => (
                            <div key={dados._id} className="task">
                                {/* <div className='time'></div>
                                {dados.time} {dados.description} */}
                                <ItemTask
                                    time={dados.time}
                                    description={dados.description}
                                    weekDay={daySelect}
                                    deleteItem={deleteTaskItem}
                                    idItem={dados._id}
                                    repeat={dados.isRepeat}
                                    dados={allTasks}
                                />
                            </div>
                        ))
                )}
            </div>
        </div>
    )
}

export default ShowTasks