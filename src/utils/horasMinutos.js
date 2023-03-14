export const horasMinutos = () => {
    const horas = [];
    const horaInicial = new Date();
    horaInicial.setHours(0, 0, 0, 0); // Set hora inicial para 00:00:00
  
    const horaFinal = new Date();
    horaFinal.setHours(23, 59, 0, 0); // Set hora final para 23:59:00
  
    let horaAtual = horaInicial;
  
    while (horaAtual <= horaFinal) {
      horas.push(horaAtual.toLocaleTimeString([], { hour12: false, hour: 'numeric', minute: 'numeric' }));
      horaAtual = new Date(horaAtual.getTime() + 60000); // Incrementa 1 minuto
    }
  
    return horas.map((hora) => {
      const [horas, minutos] = hora.split(':');
      return `${horas.replace(/^24$/, '00')}h:${minutos}m`;
    });
  }
  