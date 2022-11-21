import React from "react";
import {db} from './db/db';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
   
    <Routes>
      {db.map((e,i)=>
      <Route exact path={`/test-${i+1}`} element={<Home
        cliente={e.cliente}
        testeador={i+1}
        linkVideo={e.linkVideo}
        transcripcion={e.transcripcion}
        escenario={e.escenario}
        preguntas={e.preguntas}
      />} />
) }
    </Routes>
  );
}

export default App;
