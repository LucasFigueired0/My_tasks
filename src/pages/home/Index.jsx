import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Index'
import { horasMinutos } from '../../utils/horasMinutos';

const Index = () => {
  const [opcao, setOpcao] = useState('');

  const opcoes = horasMinutos().map((hora) => (
    <option key={hora} value={hora}>{hora}</option>
  ));
  useEffect(()=>{
    opcoes
  },[])

  const handleChange = (event) => {
    setOpcao(event.target.value);
    console.log(event.target.value)
  };
  return (
    <div>
      <Navbar />
      <div className='hora'>
        <input
          type="text"
          id="select-editavel"
          value={opcao}
          onChange={handleChange}
          list="opcoes"
          placeholder='01h:30m'
          className='horasMinutos'
        />
        <datalist id="opcoes">
          {opcoes}
        </datalist>
        
      </div>

    </div>
  )
}

export default Index