import React from "react";
import { Link } from "react-router-dom";
import Tareas from "./Tareas";
import { db } from "../db/db";
import './index.css'

function Page({ cliente, testeador, linkVideo, transcripcion,escenario,preguntas }) {
  console.log('soy sb',db.length)
  return (
    <div className="page">
      {testeador+1 > db.length?  
      <div className="button">
        <Link className="link" to={`/test-${testeador-1}`} >Test anterior </Link>
    </div>
      :<div className="button">
        
      <Link className="link" to={`/test-${testeador+1}`} >Siguiente test</Link>
    
  </div>

      }
      
    
      
      <div className="info">
      <h1>{cliente}</h1>
      <h2>Testeador {testeador}</h2>
      <iframe src={linkVideo}></iframe>
      <p>{transcripcion}</p>
      </div>
      <div className="tareas">
      <h2>Tareas</h2>
        <h3>Escenario:{escenario}</h3>
        <div></div>
        </div>
        {preguntas.map((e,i)=>
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
