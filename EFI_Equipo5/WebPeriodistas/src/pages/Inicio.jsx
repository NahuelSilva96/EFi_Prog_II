import Carrusel from '../components/Carrusel';
import CarruselNoticias from '../components/NoticiasCarru';
import TablaPosiciones from '../components/TablaPosiciones';
import DailyCheck from '../components/DailyCheck';
import '../styles/inicio.css';
import { Button } from 'primereact/button';


function Inicio() {
  const equipos = [
    { pos: 1, nombre: "Fusión Banco de Cuyo", pts: 17 },
    { pos: 2, nombre: "Fusión Banco Popular", pts: 15 },
    { pos: 3, nombre: "Docentes A", pts: 15 },
    { pos: 4, nombre: "Fusión Comunicadores", pts: 15 },
    { pos: 5, nombre: "Abogados B", pts: 15 },
    { pos: 6, nombre: "CECIS", pts: 13 },
    { pos: 7, nombre: "Fusión Visitadores y Odontólogos", pts: 8 },
    { pos: 8, nombre: "Periodistas", pts: 8 },
    { pos: 9, nombre: "Judiciales", pts: 6 },
    { pos: 10, nombre: "Médicos B", pts: 5 },
  ];
  return (
  <article className='inicio-container'>
    <section className='carrusel'>
      <Carrusel />
    </section>
     <section className='overlay'>
      <section className="redes">
        <article className="redes-container">
          <div className="social-media">
            <i className="pi pi-instagram"></i>
          </div>
          <div className="social-media">
            <i className="pi pi-twitter"></i>
          </div>
          <div className="social-media">
            <i className="pi pi-youtube"></i>
          </div>
          <div className="social-media">
            <i className="pi pi-facebook"></i>
          </div>
        </article>
      </section>
    </section>
      
    <section className='noticias-carru'>
      <CarruselNoticias />
    </section>
    <section className='matches'>
          <h2 className='titulo-matches'> PARTIDOS: </h2>

          
      <section className='matches-container' style={{ color: 'white'}}>
        <article className='pre-matches-container'>
        <div className='pre-top'>
          <span className='pre-matches-title'>ANTERIOR:</span>
          <article className='pre-match-date'>
                <p className='match-day'>04</p>
                <p className='match-month'>Oct</p>
          </article>
        </div>
          <article className='pre-matches-data'>
            
            <article className='pre-match-result'>
              <section className='match-info-container'>
                  <div className='date-info'>
                    <span>
                      Liga de Profesionales - 15:40hs
                    </span>
                  </div>
                  <div className='team-container'>
                    <span className='team-name'>Periodistas</span>
                    <span className='team-result'>0</span>
                  </div>
                  <div className='team-container'>
                    <span className='team-name'>Abogados B</span>
                    <span className='team-result'>2</span>
                  </div>
              </section>
            </article>
          </article>
        </article> 
        <article className='post-matches-container'>
          <span className='post-matches-title'>PROXIMO:</span>
          <article className='post-matches-data'>
            <article className='post-match-date'>
              <p className='incoming-match-day'>11</p>
              <p className='incoming-match-month'>Oct</p>
            </article>
            <section className='post-match-incoming'>
            <section className='incoming-match-info-container'>
              <div className='incoming-date-info'>
                <span>Liga de Profesionales<br />12:20hs</span>
              </div>
            
                {[...equipos]
                  .filter(eq => eq.nombre === "Periodistas" || eq.nombre === "Abogados B")
                  .map(eq => (
                    <div className='incoming-team-container' key={eq.pos}>
                      <span className='incoming-team-name'>{eq.nombre}</span>
                      <div className='incoming-team-table'>{eq.pts} pts</div>
                    </div>
                ))}
              </section>
            </section>
              
          </article>
        </article>
        <article className='positions-container'>
          <TablaPosiciones />
        </article>
      </section>
    </section>

  </article>
  );
}
export default Inicio;
