import React from "react";
import Page from "./Page";

function Home({cliente,testeador,linkVideo,transcripcion,escenario,preguntas}) {
  
  return (
    <div>
     
          
          <Page
            cliente={cliente}
            testeador={testeador}
            linkVideo={linkVideo}
            transcripcion={transcripcion}
            escenario={escenario}
            preguntas={preguntas}
          />
    
    </div>
  );
}

export default Home;
