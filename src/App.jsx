import { useEffect, useState } from "react";
import { getPersons } from "./services/api";

const App = () => {
const [equipo, setEquipo] = useState();
const [equipos, setEquipos] = useState();

const getPlayers = () =>{
  getPersons().then(data=>{
    console.log('111',data)
    setEquipos(data.data)    
  })
}

useEffect(()=>{
  getPlayers();
},[])

  return (
    <>
    <select>
       {equipos?.map((equipo) => (
      <option  key={equipo.equipoCod} value={equipo.equipoCod}>{equipo.nombre}</option>
  ))}
  </select>
    </>
  );
};

export default App;