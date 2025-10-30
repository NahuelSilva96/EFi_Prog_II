import React ,{ useEffect, useState } from 'react';
import '../styles/tarjeta.css';
import { Button } from 'primereact/button';

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const DailyCheck = () => {
  const [checkedDays, setCheckedDays] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('checkedDays')) || [];
    setCheckedDays(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkedDays', JSON.stringify(checkedDays));
  }, [checkedDays]);

  const toggleDay = (index) => {
    const dia = diasSemana[index];
    if (checkedDays.includes(dia)) {
      setCheckedDays(checkedDays.filter(d => d !== dia));
    } else {
      setCheckedDays([...checkedDays, dia]);
    }
  };

  const marcarHoy = () => {
    const hoyIndex = new Date().getDay() - 1; // lunes = 0
    if (hoyIndex >= 0 && hoyIndex < diasSemana.length) toggleDay(hoyIndex);
  };

  return (
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <i className='pi pi-check-circle icono' style={{ fontSize: '40px', color: '#fff' }}></i>
              <strong>Check Diario</strong>
              <p>Checkea y disftura de <br />descuentos exclusivos!</p>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">Miercoles</small>
              <div className='circulos-container'>
                  <ul className='circulos'>
                    <li className='icono'>
                      <i className="pi pi-circle-fill "></i>
                      <span className='icono-span'>Lunes</span>
                    </li>
                    <li className='icono'>
                      <i className="pi pi-circle-fill "></i>
                      <span className='icono-span'>Martes</span>
                    </li>
                    <li className='icono'>
                      <i className="pi pi-circle-fill "></i>
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
                      <span className='icono-span'>Miercoles</span>
                    </li>

                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DailyCheck;