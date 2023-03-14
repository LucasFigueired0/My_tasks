import React, { useEffect, useState } from 'react'

import "./Styles.css"
import { horasMinutos } from '../../../../utils/horasMinutos';
import { daysWeek } from '../../../../utils/daysWeek';
const CreateTasks = () => {
    const [opcao, setOpcao] = useState('');
    const [optionWeek, setOptionWeek] = useState([]);
    const [optionTime, setOptionTime] = useState([]);

    useEffect(() => {
        setOptionTime(horasMinutos().map((hora) => (
            <option key={hora} value={hora}>{hora}</option>
        ))
        )

        setOptionWeek(daysWeek().map((dia) => (
            <option value={dia} key={dia}>{dia}</option>
        )))

        console.log(optionWeek)
    }, [])

    const handleClock = (event) => {
        setOpcao(event.target.value);
    };
    return (
        <form className='create-task'>
            <div className='inputZone'>
                <input type="text" className='taskIssues' placeholder='Task or issue'/>
                <select className='daysWeek' name="" id="">
                    {optionWeek}
                </select>
                <div className='hora'>
                    <input
                        type="text"
                        id="select-editavel"
                        value={opcao}
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