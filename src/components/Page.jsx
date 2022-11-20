import React from "react";
import { Link } from "react-router-dom";
import Tareas from "./Tareas";
import './index.css'

function Page({ cliente, testeador, linkVideo, transcripcion,escenario,preguntas }) {
  console.log('soy testeador',testeador)
  return (
    <div className="page">
      <div className="info">
      <h1>{cliente}</h1>
      <h2>Testeador {testeador}</h2>
      <iframe src={linkVideo} width="800" height="600"></iframe>
      <p>{transcripcion}</p>
      </div>
      <h2>Tareas</h2>
        <h3>Escenario:{escenario}</h3>
        {preguntas && preguntas.map((e,i)=>
        <Tareas
        texto={e.texto}
        tarea={i+1}
         tiempo= {e.tiempo}
         respuesta= {e.respuesta}
         tipoTarea={e.tipoTarea}
        />
        )}
    </div>
  );
}

export default Page;
