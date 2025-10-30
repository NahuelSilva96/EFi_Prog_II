import { useNavigate } from 'react-router-dom';
import React from 'react'; 
import '../styles/footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-content">
        
        {/* Redes Sociales  */}
        <section className="footer-top-section">
                <article className="logo_footer">
                  <img src="./public/img/logot.png"/>
                </article>

                <article className="redes-container-footer">
                  <div className="social-media-footer">
                    <i className="pi pi-instagram"></i>
                  </div>
                  <div className="social-media-footer">
                    <i className="pi pi-twitter"></i>
                  </div>
                  <div className="social-media-footer">
                    <i className="pi pi-youtube"></i>
                  </div>
                  <div className="social-media-footer">
                    <i className="pi pi-facebook"></i>
                  </div>
                </article>
        </section>


      <div class="linea"></div>

        <ul className="footer-content-publi">
          <li >
            <a href="" className='sponsors'>
              <img src="./public/img/copia_centro.png" alt="" />
            </a></li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/barja_bus.png" alt="Barja Bus"/>
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/Dg.png" alt="Dg" />
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/Chic.jpg" alt="Chic"/>
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/equi5.png" alt="Equis5" />
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/barcadia.png" alt="Barcadia" />
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/1.png" alt="tecnored" />
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/RP.jpeg" alt="" />
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/CE.png" alt="" />
            </a>
          </li>
          <li>
            <a href="" className='sponsors'>
              <img src="./public/img/SF.png" alt="" />
            </a>
          </li>

        </ul>


        {/* Sección de Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} WebPeriodistas. Todos los derechos reservados.</p>
          
          <ul className="footer-links">
            <li onClick={() => navigate('/noticias')}>Noticias</li>
            <li onClick={() => navigate('/contacto')}>Contacto</li>
            <li onClick={() => navigate('/aviso-legal')}>Aviso Legal</li>
          </ul>

        </div>

    </footer>
  );
}

export default Footer
