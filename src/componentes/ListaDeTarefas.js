import React, { useState, useEffect } from "react";
import TarefaFormulario from "./TarefaFormulario";
import '../style/ListaDeTarefas.css';
import Tarefa from './Tarefas'
// npx json-server -p 3500 -w data/db.json

function ListaDeTarefas () {

const [tarefas, setTarefas] = useState ([]);

useEffect(()=>{
  fetch("http://localhost:3500/productos")
  .then(res=> res.json()).then((res)=> setTarefas(res));

  },[])

 

  const agregarTarefa = tarefa => {
    if (tarefa.texto.trim()) {
      tarefa.texto = tarefa.texto.trim();

      const tarefasAtualizadas = [tarefa, ...tarefas];

     setTarefas(tarefasAtualizadas); 
      
     fetch("http://localhost:3500/productos",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(tarefa)
    })
    }
  }

  const eliminarTarefa = id => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);

    fetch("http://localhost:3500/productos/"+id,{
      method:"DELETE"})
  }

  const completarTarefa = id => {
    const tarefasAtualizadas = tarefas.map(tarefa => { 

      if(tarefa.id ===  id && tarefa.completada === false) {
        
        tarefa.completada = true;

        fetch("http://localhost:3500/productos/"+id, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify( {completada: true} ) })

      };
      return tarefa
    })
    setTarefas(tarefasAtualizadas);
}

    return (
     <>
      <TarefaFormulario onSubmit={agregarTarefa}/>
      <div className="tarefas-lista-conteiner">
        
        {
        tarefas.map((tarefas) =>
        <Tarefa
          key={tarefas.id}
          id={tarefas.id}
          texto={tarefas.texto}
          completada={tarefas.completada} 
          eliminarTarefa={eliminarTarefa}
          completarTarefa={completarTarefa}/>
          )}

      </div> 
     </>
    );
}

export default ListaDeTarefas 