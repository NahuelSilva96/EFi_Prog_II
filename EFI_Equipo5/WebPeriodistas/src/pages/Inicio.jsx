import Carrusel from '../components/Carrusel';
import CarruselNoticias from '../components/NoticiasCarru';
import TablaPosiciones from '../components/TablaPosiciones';
import DailyCheck from '../components/DailyCheck';


function Inicio() {
  return (
  <article className='inicio-container'>
    <section className='carrusel'>
      <Carrusel />
    </section>
  
    <section className='overlay'>
      
      <article className='izquierda'>
        <div className="cards-container">
          <TablaPosiciones />
          <DailyCheck />
        </div>
      
      </article>

      <section className="derecha">
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

    <section className='matches' style={{ color: 'white'}}>
      <article className='pre-matches'>
        <h2>Ultimo partido</h2>
      </article> 
      <article className='post-matches'>
        <h2>Proximo partido</h2>
      </article>
      
    </section>
  </article>
  );
}
export default Inicio;
