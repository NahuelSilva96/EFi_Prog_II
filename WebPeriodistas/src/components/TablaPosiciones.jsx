
function TablaPosiciones(){
    const equipos = [
      { pos: 1, nombre: "Fusión Banco de Cuyo", pts: 17, pj: 9, pg: 5, pe: 2, pp: 2, gf: 15, gc: 6 },
      { pos: 2, nombre: "Fusión Banco Popular", pts: 15, pj: 9, pg: 4, pe: 3, pp: 2, gf: 11, gc: 9 },
      { pos: 3, nombre: "Docentes A", pts: 15, pj: 9, pg: 4, pe: 3, pp: 2, gf: 11, gc: 6 },
      { pos: 4, nombre: "Fusión Comunicadores", pts: 15, pj: 9, pg: 3, pe: 6, pp: 0, gf: 10, gc: 6 },
      { pos: 5, nombre: "Abogados B", pts: 15, pj: 9, pg: 3, pe: 6, pp: 0, gf: 9, gc: 6 },
      { pos: 6, nombre: "CECIS", pts: 13, pj: 9, pg: 3, pe: 4, pp: 2, gf: 9, gc: 11 },
      { pos: 7, nombre: "Fusión Visitadores y Odontólogos", pts: 8, pj: 9, pg: 2, pe: 2, pp: 5, gf: 4, gc: 8 },
      { pos: 8, nombre: "Periodistas", pts: 8, pj: 9, pg: 1, pe: 5, pp: 3, gf: 7, gc: 11 },
      { pos: 9, nombre: "Judiciales", pts: 6, pj: 9, pg: 1, pe: 3, pp: 5, gf: 10, gc: 18 },
      { pos: 10, nombre: "Médicos B", pts: 5, pj: 9, pg: 1, pe: 2, pp: 6, gf: 5, gc: 10 },
    ];
    return(
    <div className="positions">
      <div className="top">
        <p>Posiciones Ascenso</p>
      </div>
      <ul className="teams-table">
        {equipos.map((eq) => (
          <li key={eq.pos} className={`team ${eq.nombre === "Periodistas" ? "highlight" : ""}`}>
            <div className="team-info">
              <p className="position">{eq.pos}</p>
              <p className="team-name">{eq.nombre}</p>
            </div>
            <p className="points">{eq.pts} pt</p>
          </li>
        ))}
      </ul>
    </div>
    );
}
export default TablaPosiciones;