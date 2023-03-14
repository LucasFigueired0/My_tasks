import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataHora() {
  const [dataHora, setDataHora] = useState({});

  function addOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return day + 'th';
    } else if (day % 10 === 1) {
      return day + 'st';
    } else if (day % 10 === 2) {
      return day + 'nd';
    } else if (day % 10 === 3) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }

  async function fetchDataHora() {
      const dataHora = new Date();

      let dia1 = '';
      const dia = dataHora.getDate().toLocaleString('pt-BR', {
        minimumIntegerDigits: 2,
        maximumIntegerDigits: 3,
        useGrouping: false,
      }, {
        day: 'numeric'
      });
      const mes = dataHora.toLocaleString('en-US', {
        month: 'long'
      });
      const ano = dataHora.getFullYear();
      const hora = dataHora.getHours().toString().padStart(2, '0');
      const minuto = dataHora.getMinutes().toString().padStart(2, '0');
      const segundo = dataHora.getSeconds().toString().padStart(2, '0');
      const milissegundo = dataHora.getMilliseconds();

      dia1 = addOrdinalSuffix(dia);

      setDataHora({
        dia1,
        mes,
        ano,
        hora,
        minuto,
        segundo,
        milissegundo
      });
  }

  useEffect(() => {
    fetchDataHora();
    const intervalId = setInterval(fetchDataHora, 1000); // atualiza a cada 1 segundo
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='today'>
      <h1>{dataHora.hora + ':' + dataHora.minuto}</h1>
      <p>{dataHora.mes + ' ' + dataHora.dia1 + ', ' + dataHora.ano}</p>
    </div>
  );
}

export default DataHora;
