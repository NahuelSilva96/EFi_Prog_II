import { Link } from 'react-router-dom';
import logo from '../assets/IMG/logo.png';
import inicioIcon from '../assets/IMG/inicio.png';
import noticiasIcon from '../assets/IMG/noticias.png';
import plantelIcon from '../assets/IMG/plantel.png';
import fixtureIcon from '../assets/IMG/fixture.png';
import sorteoIcon from '../assets/IMG/sorteo.png';
import tiendaIcon from '../assets/IMG/tienda.png';


function Navbar() {
    return (
        <nav className="futbol-nav">
        <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <span>Periodistas FC</span>
        </div>
        <ul>
            <li><Link to="/"><img src={inicioIcon} alt="Inicio" /><span className="etiqueta">Inicio</span></Link></li>
            <li><Link to="/noticias"><img src={noticiasIcon} alt="Noticias" /><span className="etiqueta">Noticias</span></Link></li>
            <li><Link to="/plantel"><img src={plantelIcon} alt="Plantel" /><span className="etiqueta">Plantel</span></Link></li>
            <li><Link to="/fixture"><img src={fixtureIcon} alt="Fixture" /><span className="etiqueta">Fixture</span></Link></li>
            <li><Link to="/sorteo"><img src={sorteoIcon} alt="Sorteo" /><span className="etiqueta">Sorteo</span></Link></li>
            <li><Link to="/tienda"><img src={tiendaIcon} alt="Tienda" /><span className="etiqueta">Tienda</span></Link></li>
        </ul>
        </nav>
    );
}

export default Navbar;
