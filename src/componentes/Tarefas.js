import React from 'react';
import '../style/Tarefas.css'
import { AiOutlineCloseSquare } from 'react-icons/ai'

function Tarefa ({ id, texto, completada, completarTarefa, eliminarTarefa }) {
    return(
        <div className={completada ?'tarefa-conteiner completada' : 'tarefa-conteiner'}>
          <div className='tarefa-texto'
            onClick={() => completarTarefa(id)}>
            {texto}
          </div>
          <div 
            className='tarefa-icono-conteiner'
            onClick={() => eliminarTarefa(id)}>
            <AiOutlineCloseSquare className='tarefa-icone'/>
          </div>
        </div>
        
    );
}

export default Tarefa;