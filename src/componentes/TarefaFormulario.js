import React, { useState } from "react";
import '../style/TarefaFormulario.css';
import { v4 as uuidv4 } from 'uuid'

function TarefaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();

    const tarefaNova = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tarefaNova);
  }

  return(
    <form className='tarefa-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarefa-input'
        type="text"
        placeholder="Escreva uma Tarefa"
        name="texto"
        onChange={manejarCambio}/>
        <button className="tarefa-botão">Adicionar Tarefa</button>
    </form>
  );
}

export default TarefaFormulario;