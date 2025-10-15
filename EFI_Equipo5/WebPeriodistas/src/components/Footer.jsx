import { useNavigate } from 'react-router-dom';
import React from 'react'; 
import '../styles/footer.css';


function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-content">
        {/* Sección de Enlaces */}
        <ul className="footer-links">
          <li onClick={() => navigate('/noticias')}>
            Noticias
          </li>
          <li onClick={() => navigate('/contacto')}>
            Contacto
          </li>
          <li onClick={() => navigate('/aviso-legal')}>
            Aviso Legal
          </li>
        </ul>
        
        {/* Redes Sociales  */}
        <div classname="">
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
        </div>

        {/* Sección de Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} WebPeriodistas. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
