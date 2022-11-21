import React from "react";

function Tareas({ texto, tarea, tiempo, respuesta, tipoTarea }) {
  return (
      <div className="card-tareas">
        <h2>Tarea {tarea}:</h2>
        <h3>{texto}</h3>
        {tipoTarea === "opinionScale5" ? <h4>Respuesta: {respuesta}</h4> : null}

        <h5>Duración de la tarea: {tiempo} </h5>
        <div></div>
      </div> 
  );
}

export default Tareas;
