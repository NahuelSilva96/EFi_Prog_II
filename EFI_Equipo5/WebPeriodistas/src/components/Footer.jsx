import { useNavigate } from 'react-router-dom';
import React from 'react'; 
import '../styles/footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <section classname="">
        <ul className="footer-content-publi">

          <li >
            <a href="">
              <img src="./public/img/copia_centro.png" alt="" />
            </a></li>
          <li>
            <a href="">
              <img src="./public/img/barja_bus.png" alt="Barja Bus"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./public/img/Dg.png" alt="Dg" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="./public/img/Chic.jpg" alt="Chic"/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./public/img/equi5.png" alt="Equis5" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="./public/img/barcadia.png" alt="Barcadia" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="./public/img/1.png" alt="tecnored" />
            </a>
          </li>
          <li><a href="">Super frutas </a></li>
          <li><a href="">CARNICERIA EMMITA</a></li>
          <li><a href="">RIOPLAST</a></li>

        </ul>
      </section>

      <div className="footer-content">
        {/* Sección de Enlaces */}
        <ul className="footer-links">
          <li onClick={() => navigate('/noticias')}>Noticias</li>
          <li onClick={() => navigate('/contacto')}>Contacto</li>
          <li onClick={() => navigate('/aviso-legal')}>Aviso Legal</li>
        </ul>
        
        {/* Redes Sociales  */}
        <div classname="">
<<<<<<< Updated upstream
          <section className="derecha-footer">
            <article className="redes-container-footer">
              <div className="social-media-footer">
                <a target="_blank" href="https://www.instagram.com/equipodeperiodistasr4?igsh=M3VmMXUxeWhvamI0"><i className="pi pi-instagram"></i></a>
              </div>
              <div className="social-media-footer">
                <a target="_blank" href="https://x.com/periodistasrio4"><i className="pi pi-twitter"></i></a>
              </div>
              <div className="social-media-footer">
                <a target="_blank" href="https://www.youtube.com/@periodistasrio4"><i className="pi pi-youtube"></i></a>
              </div>
              <div className="social-media-footer">
                <a target="_blank" href="https://www.tiktok.com/@periodistasrio4"><i className="pi pi-tiktok"></i></a>
              </div>
            </article>
          </section>
=======
            
            <section className="">
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
>>>>>>> Stashed changes
        </div>

        {/* Sección de Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} WebPeriodistas. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer
