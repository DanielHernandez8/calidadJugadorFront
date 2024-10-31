import { useEffect, useState } from "react";
import { getPersons, getPlayersByTeam } from "./services/api";

const App = () => {
const [jugadores, setJugadores] = useState();
const [equipos, setEquipos] = useState();

const getTeams = () =>{
  getPersons().then(data=>{
    console.log('Equipos',data)
    setEquipos(data.data)    
  })
}


const handleTeamChange = async (event) => {
  const selectedTeam = event.target.value;
  await getPlayersByTeam(selectedTeam).then(data=>{
    console.log('Jugadores',data)
    setJugadores(data.data.jugadores);
  })
}



useEffect(()=>{
  getTeams();
},[])


 return (
    <>
      <select onChange={handleTeamChange}>
        <option>Selecciona una Opción</option>
        {equipos?.map((equipo) => (
          <option key={equipo.equipoCod} value={equipo.equipoCod}>
            {equipo.nombre}
          </option>
        ))}

      </select>
      <div style={{display:"flex", alignItems:"start"}}>
      <table border="1px">
        {jugadores?.map((jugador) => (
         <tr key={jugador.id} >
            <td>{jugador.jugadorCod}</td>
            <td>{jugador.nombre}</td>
            <td>{jugador.numeroCamiseta}</td>
            {/* <td>
              <div style={{backgroundColor:'yellow', width:`${jugador.calidad * 30}px`, height:'20px'}}></div>
            </td>           */}
          </tr>
        ))}
        </table>


       <table  border="1px">
       <tr>
       {jugadores?.map((jugador) => (
         <td key={jugador.jugadorCod} style={{verticalAlign:'bottom'}}>
          <div  style={{backgroundColor:'yellow', height:`${jugador.calidad * 30}px`, width:'20px'}}></div>
         </td>
        ))} 
        </tr>
      
        <tr>
        {jugadores?.map((jugador) => (
          <td key={jugador.jugadorCod2}>{jugador.numeroCamiseta}</td>
         ))}       
         </tr>
      </table>
      

      </div>
    </>
  );
};

export default App;