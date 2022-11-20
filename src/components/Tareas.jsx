import React from "react";

function Tareas({ texto, tarea, tiempo, respuesta, tipoTarea }) {
  return (
    <div>
      <div>
        <h2>Tarea {tarea}:</h2>
        <h3>{texto}</h3>
        {tipoTarea === "opinionScale5" ? <h5>Respuesta:{respuesta}</h5> : null}

        <h5>Duración de la tarea: {tiempo} </h5>
      </div>
    </div>
  );
}

export default Tareas;
