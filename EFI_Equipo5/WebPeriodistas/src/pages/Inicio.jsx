import Carrusel from '../components/Carrusel';
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
        <Card title='Tabla de Posiciones' className='primecard'>
          <p>Tabla de Posiciones</p>
          <Button label="Ver más" icon="pi pi-search" />
        </Card>

        <Card title="Daily Check" className="primercard">
          <p>Registro diario de actividades o check.</p>
          <Button label="Completar" icon="pi pi-check" />
        </Card>
      
      </article>

      <div className="derecha">
        <div className="redes-container">
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
    </div>
      </div>
    </section>
  </article>
  );
}
export default Inicio;
