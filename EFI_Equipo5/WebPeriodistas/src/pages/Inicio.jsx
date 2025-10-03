import Carrusel from '../components/Carrusel';
import CarruselNoticias from '../components/NoticiasCarru';
import TablaPosiciones from '../components/TablaPosiciones';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

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
          <Card title="Daily Check" className="primercard">
            <p>Registro diario de actividades o check.</p>
            <Button label="Completar" icon="pi pi-check" />
          </Card>
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
  </article>
  );
}
export default Inicio;
