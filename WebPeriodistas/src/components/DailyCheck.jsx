import React, { useEffect, useState } from 'react';
import '../styles/tarjeta.css';
import { Button } from 'primereact/button';


const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const DailyCheck = () => {
 
  return (
    <div className="card">
      <div className="content">
        
        <div className="back">
          <div className="back-content">
            <i className='pi pi-check-circle' style={{ fontSize: '40px', color: '#fff' }}></i>
            <p>Checkea y disftura de <br />descuentos exclusivos!</p>
          </div>
        </div>
        
        <div className="front">
          <div className="front-content">
            <div className='circulos-container'>
              <ul className='circulos'>
                <li className='icono'>
                  <i className="pi pi-check "></i>
                  <span className='icono-span'>Lunes</span>
                </li>
                <li className='icono'>
                  <i className="pi pi-check "></i>
                  <span className='icono-span'>Martes</span>
                </li>
                <li className='icono'>
                  <i className="pi pi-check"></i>
                  <span className='icono-span'>Miercoles</span>
                </li>
                <li className='icono'>
                  <i className="pi pi-circle "></i>
                  <span className='icono-span'>Jueves</span>
                </li>
                <li className='icono'>
                  <i className="pi pi-circle "></i>
                  <span className='icono-span'>Viernes</span>
                </li>
                <li className='icono'>
                  <i className="pi pi-circle "></i>
                  <span className='icono-span'>Sabado</span>
                </li>
                <li className='icono'>
                  <i className="pi pi-gift "></i>
                  <span className='icono-span'>Domingo</span>
                </li>
              </ul>
            </div>
            <div className='boton-check'>
              <Button label='Marca hoy!' style={{ backgroundColor: 'var(--color-naranja)', border: 'none', padding: '10px 200px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyCheck;