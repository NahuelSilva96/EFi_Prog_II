import Carrusel from '../components/Carrusel';
import CarruselNoticias from '../components/NoticiasCarru';
import TablaPosiciones from '../components/TablaPosiciones';
import DailyCheck from '../components/DailyCheck';
import '../styles/inicio.css';
import { Button } from 'primereact/button';
import Contador from "../components/Contador";



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
            <a target="_blank" href="https://www.instagram.com/equipodeperiodistasr4?igsh=M3VmMXUxeWhvamI0"><i className="pi pi-instagram"></i></a>
          </div>
          <div className="social-media">
            <a target="_blank" href="https://x.com/periodistasrio4"><i className="pi pi-twitter"></i></a>
          </div>
          <div className="social-media">
            <a target="_blank" href="https://www.youtube.com/@periodistasrio4"><i className="pi pi-youtube"></i></a>
          </div>
          <div className="social-media">
            <a target="_blank" href="https://www.tiktok.com/@periodistasrio4"><i className="pi pi-tiktok"></i></a>
          </div>
        </article>
      </section>
    </section>
      
    <section className='noticias-carru'>
      <CarruselNoticias />
    </section>

    <section className="matches">
      <section className="header-matches">
        <h2 className='header-title'>Partidos</h2>
        <Contador />
      </section>
      <section className="matches-container">
        <article className="match-card">
          <article className='match-container'>
            <section className='match'>
              <p>Anterior</p>
              <span>Liga de Profesionales</span>
            </section>
            <section className='partido'>
              <article className='team-1'>
                <p>Periodistas</p>
              </article>
              <article className='resultado'>
                <span className='result-container'>0</span>
                <span className='result-container'>-</span>
                <span className='result-container'>2</span>
              </article>
              <article className='team-2'>
                <p>Abogados</p>
              </article>
            </section>
            <section className='data-match'>
              <p>Sab 18/10/25 - 15:40hs / Abogados 1</p>
            </section>
          </article>
        </article>
        <article className="match-card mc-centro">
          <article className='match-container'>
            <section className='match'>
              <p>Siguiente</p>
              <span>Liga de Profesionales</span>
            </section>
            <section className='partido'>
              <article className='team-1 '>
                <p>Cuyo</p>
              </article>
              <article className='resultado'>
                <span className='result-container'>-</span>
                <span className='result-container'>-</span>
                <span className='result-container'>-</span>
              </article>
              <article className='team-2'>
                <p>Periodistas</p>
              </article>
            </section>
            <section className='data-match'>
              <p>Sab 25/10/25 - 15:40hs / Abogados 1</p>
            </section>
          </article>
        </article>
        <article className="match-card">
          <TablaPosiciones />
        </article>
      </section>
    </section>

    <section className='daily-check'>
      <h3>Check Diario</h3>
      <DailyCheck />
    </section>
  </article>
  );
}
export default Inicio;
